# hadoop

## hadoop版本

1. Hadoop1.0：包括Common、HDFS、MapReduce

2. Hadoop2.0：包括Common、HDFS、MapReduce、YARN。Hadoop1.0和Hadoop2.0不兼容。从Hadoop2.7版本开始，包含了Ozone，从Hadoop2.10版本开始，包含了Submarine
3. Hadoop3.0：包括了Common、HDFS、MapReduce、YARN以及Ozone模块，最新的Hadoop3.0版本中包含了Submarine

## hadoop模块

### 1. Hadoop Common：用于支持其他模块
2. Hadoop Distributed File System (HDFS™)：分布式存储 
3. Hadoop YARN：任务调度和资源管理
4. Hadoop MapReduce：基于YARN的分布式计算框架
5. Hadoop Ozone：对象存储
6. Hadoop Submarine：机器学习引擎

## hadoop安装

### 单机安装及配置

- Hadoop伪分布式安装.txt
- Hadoop完全分布式搭建.txt

### Hadoop2.0和Hadoop3.0的区别

- [https://www.jianshu.com/p/fb2fa03a2f03](https://www.jianshu.com/p/fb2fa03a2f03)

## HDFS

### 图解

- 

### namenode

- 作用

	- 管理DataNode和存储元数据(metadata)

- 元数据

	- a. 文件的存储路径
	b. 文件的权限
	c. 文件大小
	d. Block大小
	e. 文件和BlockID的映射关系
	f. BlockID和DataNode的映射关系
	g. 副本数量
	- 元数据和文件中的具体内容无关
	- 元数据大小是130~180B
	- a. 维系在内存中的目的是为了读写快
	b. 维系在磁盘中的目的是为了崩溃恢复

		- 在磁盘上的存储文件

			- edits：操作文件。记录写操作
			- fsimage：元镜像文件。记录元数据，这个文件中的元数据往往是落后于内存中的元数据的

	- 元数据的存储路径由hadoop.tmp.dir属性来决定,不指定或者写错则默认为/tmp下
	- 当NameNode收到写请求，会先将这个请求写到edits_inprogress文件中，如果记录成功则更新内存中的元数据，如果内存中的元数据更新成功则给客户端返回一个ack(确认字符)表示成功，在这个过程中没有改动fsimage

		- 

	- 随着HDFS运行时间的增长，edits_inprogress会越来越大，同时fsimage和内存中元数据的差距越来越大，需要在适当的时机更新fsimage，edits_inprogress文件会滚动，滚动出一个edits文件以及产生一个新的edits_inprogress

		- 空间：当edits文件达到指定大小（默认是64M，可以通过fs.checkpoint.size来调节，单位是字节）的时候，会滚动产生一个新的edits_inprogress
		- 时间：当距离上一次滚动的间隔时间达到指定条件（默认是1H，可以通过fs.checkpoint.period来调节，单位是秒）的时候，会滚动产生一个新的edits_inprogress
		- 强制：hadoop dfsadmin -rollEdits
		- 重启：当NameNode重启的时候会自动触发edits文件的滚动

	- NameNode通过心跳机制来管理DataNode

		- 默认心跳的间隔时间是3s，这个属性可以通过dfs.heartbeat.interval来调节，单位是秒
		- 当NameNode超过10min没有收到DataNode的心跳，则认为这个节点已经lost（丢失），NameNode会将这个节点上的数据备份到其他节点上保证整个集群中的副本数量
		- 心跳信号

			- 当前DataNode的状态(预服役、服役、预退役、退役)
			- DataNode中BlockID
			- clusterID - 集群编号。clusterID在NameNode被格式化(hadoop namenode -format)的时候产生，NameNode在启动的时候会将clusterID发送给每一个DataNode，当DataNode在发送心跳的时候需要携带这个clusterID来进行校验的。DataNode只接受一次clusterID

	- 	NameNode/HDFS重启，会触发edits_inprogress文件的滚动，将操作更新到fsimage中，然后将fsimage文件中的内容加载到内存中，加载完成之后会等待DataNode的心跳，收到心跳之后进行校验，如果校验失败，NameNode会试图恢复这些数据然后重新校验，这个过程称之为安全模式。直到校验成功，NameNode会自动退出安全模式

		- 	如果在合理时间内，安全模式没有退出，那么就意味着产生了数据的丢失，需要强制退出安全模式：hadoop dfsadmin -safemode leave

### datanode

- block:数据将会按照指定的大小来分块

	- 分块的意义:1)能够存储超大文件 2)能够快速备份
	- 作用

		- 存储Block，将Block存储在DataNode的磁盘上

	- DataNode会定时向NameNode发送心跳信号
	Block在磁盘上的存储位置由hadoop.tmp.dir来决定
	- 默认为128M,通过dfs.blocksize(hdfs-site.xml)属性来配置，单位是字节
	- 如果一个文件不足一个Block的默认大小，那么这个文件大小为实际大小
	- HDFS会对每一个Block分配一个全局递增的编号 - Block ID: 1073741825

### SecondaryNameNode

- SecondaryNameNode不是NameNode的热备，而是辅助NameNode完成edits文件的滚动
- 在HDFS集群中，如果存在SecondaryNameNode，那么edits文件的滚动过程是由SecondaryNameNode完成；如果不存在SecondaryNameNode，那么edits文件的滚动过程就是由NameNode自己完成
- HDFS设计的时候，采取了SecondaryNameNode+NameNode机制或者双NameNode机制，考虑NameNode的核心地位，必然要对NameNode进行备份，那也就意味着需要采用双NameNode机制，那么此时就需要舍弃SecondaryNameNode

### 副本放置策略

- 第一个副本

	- 集群内部上传：哪个DataNode上传，第一个副本就放在哪个DataNode上
集群外部上传：NameNode会等待DataNode的心跳，然后选择一个相对空闲的DataNode来存储这个副本

- 第二个副本

	- Hadoop2.7之前：第二个副本是放在和第一个副本不同机架的节点上
Hadoop2.7开始：第二个副本是放在和第一个副本相同机架的节点上

- 第三个副本

	- Hadoop2.7之前：第三个副本是放在和第二个副本相同机架的节点上
Hadoop2.7开始：第三个副本是放在和第二个副本不同机架的节点上

- 更多副本

	- 放在相对空闲的节点上

### 机架感知策略

- 所谓的机架本质上就是一个Map，机架感知实际上
就是将一个节点的IP或者主机名映射到某个值上
- 机架指的是逻辑机架而不是物理机架，也就意味着可以将不同物理机架上的节点映射到同一个逻辑机架上，但是实际过程中往往是将同一个物理机架上的节点映射到同一个逻辑机架上
- 机架感知策略需要通过脚本文件(Shell/Python)来指定

### 回收站机制

- HDFS中，回收站默认是不开启的，需要在配置文件中手动指定
- 配置回收站机制

```shell
vim core-site.xml
```

```xml
<property>
<!--指定文件在回收站中的存储时间-->
<!--默认为0，单位是min-->
<!--一个文件放在回收站中会存储一天的时间，如果超过一天没有还原，那么就会被清除-->
<name>fs.trash.interval</name> 
<value>1440</value>
</property>
```

### dfs目录

- dfs目录是由hadoop.tmp.dir属性来决定
dfs目录是在NameNode被格式化的时候产生
- dfs子目录

	- a. data：对应的DataNode的存储位置
b. name：NameNode的存储位置
c. namesecondary：SecondaryNameNode的存储位置

- name data下文件

	- in_use.lock用于标记当前服务器是否已经启动了对应的进程

- HDFS在第一次启动之后1min，edits文件会自动产生一次滚动
HDFS会将每一次的写操作看作是一个事务，分配一个全局递增的事务id，称之为txid
- edits文件转化为xml文件的命令：hdfs oev -i edits_xxx -o a.xml
- edits.xml文件结构

	- 每一个edits文件的开头都是OP_START_LOG_SEGMENT，每一个edits文件的结尾都是OP_END_LOG_SEGMENT
	- 文件上传

		- a. OP_ADD：在HDFS上创建一个文件名._COPYING_文件，例如a.txt._COPYING_
b. OP_ALLOCATE_BLOCK_ID：计算文件切块数量并且分配BlockID
c. OP_SET_GENSTAMP_V2：设置时间戳版本
d. OP_ADD_BLOCK：利用流向文件中添加数据
e. OP_CLOSE：关流
f. OP_RENAME_OLD：文件重命名

	- 文件一旦上传完成，那么文件内容不允许修改
fsimage.xxx.md5是对fsimage.xxx来进行校验

- VERSION

	- a. clusterID：集群编号，用于校验
	b. storageType：标记当前节点的类型
	c. blockpoolID：块池编号
	- 

### 读取流程

- 1. 客户端发起RPC请求到NameNode
2. NameNode收到请求之后会检查要读取的路径（文件）是否存在
3. 如果路径存在，则NameNode会给客户端返回一个信号表示可以读取
4. 客户端收到信号之后，会向NameNode发送请求要第一个Block的地址
5. NameNode会将第一个Block的存储地址放入一个队列中返回给客户端
6. 客户端收到地址之后，从这些地址中选取一个较近的节点来读取第一个Block。读完这个Block之后，会对这个Block进行校验，校验读取的Block和meta声明的信息是否一致
7. 如果校验失败，那么客户端会通知NameNode，然后重新选取一个地址重新读取；如果校验成功，则客户端会去向NameNode要第二个Block的地址，重复4.5.6三个过程
直到读取完最后一个Block，客户端就会给NameNode发送一个结束信号，NameNode关闭文件（实际上就是关流）

### 写入流程

- 1. 客户端发起RPC请求到NameNode
2. NameNode收到请求之后会进行校验：
	a. 校验要写入的路径是否有权限
	b. 校验路径下是否有同名文件
3. 如果校验成功，会先添加元数据，NameNode会给客户端返回一个信号表示可以写入
4. 客户端收到信号之后，向NameNode发送请求要第一个Block的存储地址
5. NameNode收到请求之后会给这个Block分配一个BlockID，然后等待DataNode的心跳，从中选取DataNode的地址（默认是3个）放入队列中返回给客户端
6. 客户端收到地址之后，从这些地址中选取一个相对较近（网络拓扑距离）的节点来写入第一个Block的第一个副本。第一个副本所在节点再备份到其他节点上，也就意味着副本之间的备份用集群的内部备份方法来完成的，节点之间通过pipeline（管道，本质上就是一个NIO中的Channel）来进行备份。第三个副本备份完成之后会给第二个副本所在的节点返回一个ack信号，第二个副本所在的节点会给第一个副本所在的节点返回一个ack，第一个副本所在的节点最后给客户端返回一个ack
7. 客户端再给NameNode发送请求要第二个Block的地址，重复4.5.6三个过程
8. 直到客户端写完所有的Block，那么客户端会给NameNode发送一个结束信号，NameNode会关闭这个文件（实际上就是关流），此时文件不能再修改

### 删除流程

- 1. 客户端发起RPC请求到NameNode
2. NameNode收到请求之后会查询元数据，然后校验当前用户是否删除权限
3. 如果有删除权限，则NameNode会从元数据中将这条数据删除并且给客户端返回一个成功信号，此时只是元数据被修改而数据依然存储在DataNode上
4. 当DataNode发送心跳信号的时候，NameNode会对心跳信号进行心跳响应，要求DataNode删除对应的Block，DataNode收到心跳响应之后才删除数据，此时数据才真正从HDFS上移除

## MapReduce

### 概述

- 1. MapReduce是Hadoop提供一套用于进行分布式计算的框架
2. MapReduce是根据Google的MapReduce来实现的
3. MapReduce将计算过程拆分为了Map阶段以及Reduce阶段
- 

### maven 打包指定主类配置

```xml
<plugin>
	<groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-jar-plugin</artifactId>
	<configuration>
		<archive>
			<manifest>
				<addClasspath>true</addClasspath>
				<mainClass>cn.App</mainClass>
			</manifest>
		</archive>
	</configuration>
</plugin>
```

### 配置windowns MapReduce运行环境

- 配置HADOOP_HOME
- 配置HADOOP_USER_NAME

	- root

- 配置HADOOP bin环境

### 数据本地化策略

-  当JobTracker收到请求之后会访问NameNode获取元数据，然后根据元数据信息来进行切片 - 切片是一个逻辑切分过程，此时数据并没有被真正切分，而是去划分每一个任务的任务量 - 切片数量决定了MapTask的数量
- 实际过程中，默认情况下，Split和Block大小是一致的
- 数据本地化

	- a. 为了减少不同集群之间的数据传输，考虑将TaskTracker和DataNode放在相同节点上
b. 为了减少节点之间的数据传输，JobTracker在分配任务的时候会尽量将任务分配给有对应数据的节点

- 切片过程

	- 	a. 如果文件为空，则整个文件作为一个切片处理
	b. 在MapReduce中，文件存在可切和不可切。如果文件不可切，则整个文件作为一个切片处理
	c. 如果需要调大切片，需要调节minSize；如果需要调小切片，需要调节maxSize。MapReduce中并没有提供直接调节切片的方法
	//默认 minSize 1byte maxSize 9223372036854775807L
	return Math.max(minSize, Math.min(maxSize, blockSize));
	d.在切片过程中，需要注意切片阈值：1.1，即当文件剩余的字节数量/切片大小>1.1的时候才会按照切片大小来进行切分；如果剩余的字节数量/切片大小`<=1.1`，则剩余的字节整个作为一个切片处理

### job提交流程

- 提交阶段

	- a. 检查输入输出路径
b. 计算切片
c. 如果有需要，可以设置分布式缓存存根账户
d. 将jar包和配置提交到HDFS上
e. 将任务提交给JobTracker并且可以选择是否监控运行状态

- 执行阶段

	- a. JobTracker收到任务之后会将任务拆分成MapTask和ReduceTask，其中MapTask的数量由切片数量决定，ReduceTask的数量由分区数量决定
b. JobTracker在拆分完成之后，等待TaskTracker的心跳，当TaskTracker心跳过来之后，JobTracker就会给TaskTracker来分配任务。分配任务的时候，MapTask的分配要尽量满足数据本地化策略，ReduceTask的分配要尽量放到相对空闲的节点上
c. TaskTracker通过心跳领取到了MapTask或者ReduceTask，然后请求对应的节点来下载jar包 - 体现了数据固定逻辑移动的思想
d. TaskTracker下载jar包之后，会在本节点上去开启一个JVM子进程去执行MapTask或者ReduceTask。默认一个JVM子进程只执行一个任务。在默认情况下，必然会产生JVM子进程大量的创建和销毁

### shuffle

- mapper端的shuffle

	- 1. map方法中context.write表示将数据写出，会将数据写出的MapTask自带的缓冲区中
2. 数据在缓冲区中会进行分区、排序。在缓冲区中的排序，是将完全杂乱的数据整理成有序的数据，采用了快速排序
3. 每一个MapTask自带一个缓冲区，缓冲区本质上是一个环形字节数组。环形的目的是为了避免重复寻址
4. 缓冲区是维系在内存中，默认容量是100M
5. 当缓冲区使用达到一定限度(溢写阈值默认是0.8，即当缓冲区使用达到80%，阈值的目的是为了避免阻塞)的时候，会将缓冲区中的数据溢写(spill)到本地磁盘上，产生一个溢写文件。单个溢写文件中的数据是分好区且排好序的
6. 溢写之后，后续产生的数据会继续写到缓冲区中
7. 如果产生了多次溢写，每一次溢写都会产生一个新的溢写文件。所有的溢写文件之间的数据是无序的，即单个有序整体无序，这种状态称之为局部有序
8. 原始数据的大小并不能决定溢写次数
9. 溢写文件的大小要考虑序列化因素的影响
10. 当map方法全部执行结束之后，这个MapTask产生的所有的溢写文件会进行一次合并(merge) - 即会将多个溢写文件合并成一个最后的结果文件final out。如果溢写之后缓冲区中依然有数据并且所有的数据都已经处理完，那么缓冲区中的数据会直接溢写到最后的final out中。如果没有产生溢写，缓冲区中的数据会直接溢写到final out中
11. 在merge过程中，数据会再次进行分区、排序，所以final out文件中的数据是整体分区且有序的。merge过程中的排序是将局部有序变成整体有序，采用了归并排序
12. 如果溢写文件个数>=3，并且指定了Combiner，那么在merge过程中还会自动进行combine过程
	- 

		- 

- reduce端的shuffle

	- 1. ReduceTask的启动阈值是0.05，即当5%的MapTask结束之后就启动ReduceTask
2. ReduceTask启动fetch线程(默认情况下是5个)去MapTask处抓取数据。fetch通过http请求方式来获取数据
3. fetch线程抓取数据的时候只抓取对应分区的数据，会将抓取来的每一段数据都存储在本地的磁盘上形成一个个的小文件
4. 在抓取完数据之后，ReduceTask会将这些小文件进行merge（merge因子默认为10，即每10个文件合并成一个文件，经过多次合并最后合并成1个文件）。在merge过程中会再次进行排序。这次排序也是将局部有序整理成整体有序，所以依然采用了归并排序
5. 在merge之后，会将相同的键对应的值放到一组，产生一个迭代器（这个迭代器并不是一个真正的迭代器而是一个伪迭代器，实际过程中，是产生一个流读取merge之后的文件，每次读取当前行和下一行，如果键一样，则返回当前行的值继续循环；如果键不一样，则返回当前行的值然后准备调用下一次reduce方法），这个过程称之为group(分组)

- shuffle优化

	- 1. 增大缓冲区，一般缓冲区的大小是250~400M - 一般是SplitSize的2-3倍
2. 调大溢写阈值，同时也增大了阻塞的风险
3. 尽量增加Combiner过程
4. 可以考虑增加压缩机制，这种方案可以减少对网络资源的消耗但是Reduce收到数据之后需要解压，所以这种方案实际上是对网络资源的取舍
5. 调节ReduceTask的启动阈值 - 如果集群庞大可以适当调小(尽早启动)，如果集群较小可以适当调大
6. 适当增加fetch线程的数量，考虑服务器的线程承载量
7. 增大ReduceTask merge因子（不建议）

### 数据倾斜

- Map端的数据倾斜的条件：多源输入文件不可切且文件大小不均 - 目前没有解决方案
- 实际过程中，绝大部分的倾斜是出现在Reduce端，导致Reduce端数据倾斜的直接原因是因为对数据的分类
- 针对Reduced端的数据倾斜，往往是会改变分类条件使数据趋向于均衡 - 二/两阶段聚合 - 将整个过程拆分为2个阶段，第一个阶段的目的是将数据打散之后分别聚合，第二个阶段则是整体聚合 - 在倾斜度越大的条件下，二阶段聚合的效率就会越高
- 
- 小文件处理

	- 	a. 存：大量的小文件会产生大量的元数据，导致内存被大量占用。内存被大量占用就会导致NameNode的效率变低
	b. 算：大量的小文件会产生大量的切片，导致产生大量的MapTask，MapTask本质上是一个线程，致使线程的调度变得格外频繁，并且线程数量过多还会导致服务器集群的卡顿甚至崩溃
	- 目前市面上对于小文件的处理手段有2种：合并和打包
	- Hadoop提供了一种原生的合并手段：Hadoop Archive - 官网上的说法是对文件进行打包，达成一个har包
	- 示例 hadoop archive -archiveName txt.har -p /result/ /

## hadoop架构

## yarn

### YARN（Yet Another Resource Negotiator - 至今另一个资源协调者），从Hadoop2.0出现，导致Hadoop2.0和Hadoop1.0是不兼容

### 产生原因

- 	a. 外因：随着计算框架的增多，越来越多的计算框架都基于Hadoop来进行，那么就导致不同计算框架之间的资源调度就变得比较重要。在Hadoop1.0的时候，资源调度是由各个计算框架自己完成，导致不同框架之间的资源冲突比较严重。在Hadoop2.0中，为了进行统一的资源调度，引入了YARN
	b. 内因：在Hadoop1.0中，JobTracker既需要对外接收任务，又需要对内监控子任务，导致JobTracker的压力变得比较大，从而致使JobTracker成为了整个Hadoop集群的瓶颈 - 在Hadoop1.0中，官方文档中给出的数据是一个JobTracker可以最多管理4000个TaskTracker

### 结构

- ResourceManager：主节点。负责资源管理 - 最多2个
- NodeManager：从节点。负责任务监控和任务计算

### job执行流程

- 1. 客户端将job提交给ResourceManager中ApplicationsManager，ApplicationsManager收到任务之后会将任务暂作存储，等待NodeManager的心跳
2. 当ResourceManager收到心跳之后，ResourceManager中的ApplicationsManager会进行心跳响应，将job分配给NodeManager，ApplicationsManager在心跳响应中会要求NodeManager开启一个进程 - ApplicationMaster - 在YARN中，一个job就对应了一个ApplicationMaster
3. NodeManager会在本节点内部开启一个ApplicationMaster进程，将job任务分配给这个进程
4. ApplicationMaster会将job任务进行切分，将这个job切分为MapTask和ReduceTask
5. ApplicationMaster在拆分完任务之后会向ResourceManager发请求要资源，在要资源的时候，会尽量的多要。例如一个job划分为5个MapTask和1个ReduceTask，那么要的资源数就是5*3+1=16份资源
6. ResourceManager中ApplicationsManager在收到请求之后，会将这个请求转发给ResourceSchedular，ResourceSchedular会将需要的资源（内存、CPU核，注意，一份资源默认是1G内存+1CPU核）封装成Container对象返回给ApplicationsManager，然后ApplicationsManager再将Container对象返回给ApplicationMaster。ResourceManager返回的资源份数是少于要的资源数 - 要的多，给的少
7. ApplicationMaster收到Container之后，会对资源进行二次划分，划分给每一个MapTask或者ReduceTask
8. 分配完成之后，ApplicationMaster就会将MapTask和ReduceTask分配到不同的NodeManager上，ApplicationMaster会监控每一个子任务的执行 - ResourceManager管理ApplicationMaster，ApplicationMaster再去管理具体的子任务
9. 如果某一个子任务执行失败，那么这个子任务会释放占用的资源并且通知ApplicationMaster，ApplicationMaster收到信息之后，会再次给ResourceManager发请求重新申请资源，然后会试图重启这个子任务
- 10. ResourceSchedular：资源调度器 - 为了适应不同的资源调度策略，YARN就将ResourceSchedular设计成了一个可插拔的组件 - 资源调度策略：
	a. FCFS(First come first serve) - 先到先得 - ResourceSchedular默认采用也是这种策略
	b. 优先级策略 - 优先级越高，优先分配资源
	c. 短任务优先 - 在任务时间差别特别明显的情况下，考虑让短任务先执行
	轮询 - 时间片是轮着的
- 执行流程图

	- 

### 推测执行机制

- 1. 所谓推测执行机制是MapReduce针对慢任务提供的一种优化方案
2. 如果出现了慢任务，MapReduce默认采取的方式是将这个慢任务复制到其他节点上，两个节点同时执行相同的任务，谁先执行完谁的结果就作为最终结果；还没有执行完的哪个任务就会被kill掉，这个过程就是推测执行机制
3. 慢任务出现的场景：
	a. 任务分配不均
	b. 节点的硬件配置不同
	c. 数据倾斜
4. 在大数据场景下，因为数据具有倾斜特性，所以数据倾斜场景会更常见，此时推测执行机制对于数据倾斜是无效的，而且还会导致资源的浪费，所以会关闭推测执行机制

### uber重用

- a. Resource Manager里的Applications Manager会为每一个application(比如一个用户提交的MapReduce Job)在NodeManager里面申请一个container
b. 在该container里面启动一个Application Master
c. container在Yarn中是分配资源的容器(内存、cpu核数等)，它启动时便会相应启动一个JVM
d. Application Master便陆续为application包含的每一个task(一个Map task或Reduce task)向Resource Manager申请一个container
e. 每得到一个container后，便要求该container所属的NodeManager将此container启动，然后就在这个container里面执行相应的task
f. 这个task执行完后，这个container便会被NodeManager收回，而container所拥有的JVM也相应地被退出
g.在这种情况下，可以看出每一个JVM仅会执行一Task， JVM并未被重用。
- 参数配置

	- mapreduce.job.ubertask.enable
false
是否启用user功能。如果启用了该功能，则会将一个“小的application”的所有子task在同一个JVM里面执行，达到JVM重用的目的。这个JVM便是负责该application的ApplicationMaster所用的JVM（运行在其container里）。那具体什么样的application算是“小的application"呢？下面几个参数便是用来定义何谓一个“小的application"

mapreduce.job.ubertask.maxmaps
9
map任务数的阀值，如果一个application包含的map数小于该值的定义，那么该application就会被认为是一个小的application

mapreduce.job.ubertask.maxreduces
1
reduce任务数的阀值，如果一个application包含的reduce数小于该值的定义，那么该application就会被认为是一个小的application。不过目前Yarn不支持该值大于1的情况“CURRENTLY THE CODE CANNOT SUPPORT MORE THAN ONE REDUCE”

mapreduce.job.ubertask.maxbytes
application的输入大小的阀值。默认为dfs.block.size的值。当实际的输入大小部小于该值的设定，便会认为该application为一个小的application。

