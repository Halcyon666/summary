# HBASE

## 概述

### HBase是Apache提供的一套基于Hadoop的、分布式的、可扩展的、非关系型数据库 - 不支持SQL


## 特点

### 	HBase适合于存储稀疏数据 - HBase可以存储结构化数据和半结构化数据
	HBase中，如果需要删除一张表，那么首先需要先禁用这张表
	在创建表的时候，如果不指定名称空间，那么默认在default下
	HBase是基于Hadoop存储的，即本质上是基于HDFS来存储的。HDFS的特点是一次写入多次读取，不允许修改；HBase提供了完整的增删改查的能力，其中的"改"怎么实现的？ - HBase的"改"并不是修改之前的数据而是在文件尾部追加，在添加每一条数据的时候都会添加一个时间戳，在读取数据的时候只需要返回最新的数据就能实现改的效果 - 时间戳称之为是数据的版本号 - VERSION
	在不指定的情况下，默认只返回最后一个版本的数据；如果需要获取多个版本的数据，那么需要在建表的时候就指定保留版本

### 	行健 - Rowkey
		a. 等价于关系型数据库中的主键
		b. 行健在建表的时候不需要指定，而是在添加数据的时候动态指定
		c. 行健默认是按照字典序排序


### 	列族/列簇 - Column Family：
		a. 在HBase中，不关注列，关注的是列族 - 在建表的时候需要指定列族但是不需要指定列，列是可以动态增删的
		b. 一个列族中可以包含0到多个列
		c. 一个列族就等价于关系型数据库中的一张表
		d. 每一张表中至少包含1个列族
create 'person','basic','expand' // person 行键 basic expand 列簇

### 	名称空间 - namespace
		a. 等价于关系型数据库中的database
		b. 如果不指定，默认情况下表放在default
create 'hbasedemo:person','basic','expand' //在hbasedemo命名空间中的person表

### 单元格 - Cell
		a. 行健+列族+列+时间戳/版本唯一锁定一个cell
		b. 每一个cell中包含一个时间戳


### hbase.txt

## 机制

### 	1. 将表从行健方向上来进行切分，切分出来的每一部分是一个HRegion。一个表中至少存在1个HRegion
	2. 每一个HRegion会分配某一个HRegionServer来进行管理
	3. 因为行键是有序的，所以每一个HRegion之间的数据范围是不交叉的，也因此不同的行健可以到不同的HRegionServer上来进行处理
	4. HRegion不存储数据，数据最终是落地到HDFS上，HRegion是管理数据
	5. 当HRegion的大小（HRegion管理的数据的大小）达到一定限度（默认是10G）的时候，HRegion就会分裂为均等两个HRegion，分裂出来的其中一个HRegion会转移给另一个HRegionServer来管理。注意：这个过程中数据不会产生转移
	6. HRegionServer管理HRegion，HRegion管理数据
	7. HRegion是HBase进行分布式存储和负载均衡的最小单位，但是不是数据存储的最小单位
	8. HRegion的结构：
		a. 每一个HRegion包含1个到多个HStore，HStore的数量由列族数量决定
		b. 每一个HStore中包含了1个memStore（写缓存）以及0到多个StoreFile/HFile
		c. HBase中的数据最终是存储到HFile中，HFile最终会落地到HDFS上


### 

### 	1. 当HBase启动的时候，会在Zookeeper上来注册一个/hbase节点
	2. 当Active HMaster启动的时候，会在Zookeeper的/hbase节点下来注册一个临时子节点/hbase/master - Active HMaster会通过心跳去维持在Zookeeper上注册的这个临时节点，也就意味着一旦HMaster宕机，对应的心跳没了，那这个临时节点也就消失，Zookeeper就知道需要从Backup HMasters重新找一个切换为Active
	3. 当Backup HMaster启动的时候，会在Zookeeper的/hbase/backup-masters节点下注册临时的子节点
	4.当HRegionServer启动的时候，也会在Zookeeper的/hbase/rs节点下来注册子节点

### HMaster

- 	1. 在HBase中，HMaster的个数不受限制，可以启动任意多个HMaster，可以通过命令：sh hbase-daemon.sh start master
	2. 谁先启动谁就是Active HMaster
	3. Active HMaster会监控Zookeeper上的节点/hbase/backup-masters，监控这个节点下的子节点个数是否发生变化
	4. Active HMaster每次同步消息的时候都会监控/hbase/backup-masters
	5. 实际过程中，HMaster的节点个数一般不超过3个：1A2B
	6. HMaster的作用/职责：
		a. 管理HRegionServer
		b. 负责HBase中表的ddl（对表结构的操作）操作，如果是dml（对表中数据的操作）操作不经过HMaster


### HBase第一次读写如何确定Hregion位置

- 
- 

	- 	a. 客户端在获取到.meta.文件的位置之后会缓存这个位置
	b. 客户端在读取.meta.之后，会缓存.meta.文件中的内容
	c. 如果客户端宕机或者产生HRegion的转移，此时缓存就会失效，需要从新建立

### HregionServer

- 	1. HRegionServer的作用是用于管理HRegion，官方文档中给定：每一个HRegionServer能够管理1000个HRegion，每一个HRegion最多可以管理10G数据
	2.HRegionServer包含了1个WAL，1个BlockCache以及0到多个HRegion
	3. WAL - Write Ahead Log -> HLog - 写日志
		a. WAL是落地在HDFS上
		b. 当HRegionServer在收到写请求之后，会现将请求记录到WAL中，记录成功之后再将数据更新到memStore中，这样做的目的是为了防止数据丢失
		c. WAL达到一定限度之后，会产生一个新的WAL，同时原来的WAL会变成oldWAL，会被定时清理掉
		d. 在HBase0.94之前，WAL是只运行串行写；从HBase0.94开始，引入了NIO的通道机制，允许WAL的并行写
	4. BlockCache - 块缓存
		a. BlockCache本质上是一个读缓存，维系在内存中
		b. BlockCache在缓存的时候遵循"局部性"原理 - 猜：
			i. 时间局部性：如果一条数据被读取过，可以认为这条数据被第二次读取的概率会高于其他数据，HBase就将这条数据放入读缓存中
			ii. 空间局部性：如果一条数据被读取过，那么可以认为与这条数据相邻的数据被读取的概率要高于其他数据，那么就将这条数据相邻的数据也放入缓存中
		c. BlockCache的默认大小是128M
		d. BlockCache采取了LRU策略
在实际过程中，如果scan操作偏多，那么这个时候就会关闭这个BlockCache；如果get操作偏多，可以考虑使用BlockCache
- 

### Compaction机制

- 	1. HBase提供了2种合并机制：
		a. minor compact：将一个HRegion相邻的几个小的HFile合并成一个大的HFile，合并完成之后依然会存在好几个HFile
		b. major compact：将一个HRegion所有的HFile合并成一个HFile，合并完成之后只有1个HFile
	2. minor compact的效率相对较高，所以HBase中默认也是minor compact
HFile在合并过程中，会舍弃掉被标记为删除的数据以及过时的数据（可以保留数据的多个版本）

### 写流程

- 	1. 当HBase接收到写请求(put/delete/deleteall)的时候，首先需要确定将数据写到哪一个HRegion中
	2. 找到对应的HRegionServer，将这个写请求记录到WAL中，然后将数据更新到memStore中
	3. 数据在更新到memStore中之后，会进行排序：行健字典序 -> 列族名字典序 -> 列名字典序 -> 时间戳倒序
	4. memStore维系在内存中，memStore的大小是128M
	5. memStore达到一定条件之后就会冲刷产生一个新的StoreFile/HFile - 单个HFile是有序的；如果产生过多次冲刷，那么所有的HFile之间是局部有序
	6. memStore的冲刷条件：
		a. memStore用满之后会自动冲刷
		b. 默认当WAL达到1G的时候，memStore也会冲刷，并且产生一个新的WAL
		c. 当一个HRegionServer上的所有的memStore所占用的内存之和达到了物理内存的35%的时候，就会冲刷最大的memStore
	7. HFile最终会落地到HDFS上
	8. HFile的第一个版本的格式：
		a. DataBlock：存储数据
			i. DataBlock是HBase中的最小存储单元
			ii. DataBlock默认情况下是64KB。小的DataBlock更利于查询（get）；大的DataBlock更利于遍历（scan）
			iii. 读缓存的空间局部性是以DataBlock为单位缓存
			iv. 每一个DataBlock由一个Magic和多个KeyValue组成
				1) Magic：魔数。本质上是一个随机数，作用是用于校验
				2) KeyValue：键值对。用于真正存储数据
		b. MetaBlock：存储元数据。只会出现在.meta.文件中
		c. FileInfo：文件信息。对当前HFile的描述
		d. DataIndex：记录每一个DataBlock在文件中起始字节
		e. MetaIndex：记录每一个MetaBlock在文件中起始字节
		f. Trailer：在文件末尾，固定4个字节，前2个字节记录DataIndex的位置，后2个字节记录MetaIndex的位置
	9. HFile的第二个版本中，新添了一个布隆过滤器：


### 读取流程

- 	1. 当HBase收到读取请求的时候，会先锁定唯一的HRegion，HRegion会由某一个HRegionServer管理，所以相当于锁定了唯一的HRegionServer
	2. 先试图从BlockCache中读取数据；如果读不到，那么试图读取memStore；如果memStore也没有读到， 那么就得读取HFile
	3. 在读取HFile的时候，会先根据行健范围筛选掉不符合范围的HFile；根据范围筛选完成之后，会再利用布隆过滤器来进行二次筛选

- 

