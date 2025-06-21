# HBASE

## Overview

### HBase is a distributed, scalable, non-relational database based on Hadoop provided by Apache - does not support SQL


## Features

### 	HBase is suitable for storing sparse data - HBase can store structured and semi-structured data
	In HBase, if you need to delete a table, you must first disable the table
	When creating a table, if no namespace is specified, it defaults to the default namespace
	HBase is based on Hadoop storage, essentially based on HDFS storage. HDFS features write-once, read-many, no modifications allowed; HBase provides complete CRUD capabilities. How is "update" implemented? - HBase's "update" does not modify previous data but appends to the end of the file. When adding each piece of data, a timestamp is added. When reading data, only the latest data needs to be returned to achieve the update effect - the timestamp is called the data version number - VERSION
	By default, only the last version of data is returned; if you need to get multiple versions of data, you need to specify version retention when creating the table

### 	Row Key - Rowkey
		a. Equivalent to primary key in relational databases
		b. Row key does not need to be specified when creating table, but is dynamically specified when adding data
		c. Row key is sorted in dictionary order by default


### 	Column Family - Column Family:
		a. In HBase, we don't focus on columns but on column families - when creating tables, you need to specify column families but not columns; columns can be dynamically added and deleted
		b. A column family can contain 0 to multiple columns
		c. A column family is equivalent to a table in relational databases
		d. Each table contains at least 1 column family
create 'person','basic','expand' // person row key, basic expand column families

### 	Namespace - namespace
		a. Equivalent to database in relational databases
		b. If not specified, tables are placed in default by default
create 'hbasedemo:person','basic','expand' //person table in hbasedemo namespace

### Cell - Cell
		a. Row key + column family + column + timestamp/version uniquely locks a cell
		b. Each cell contains a timestamp


### hbase.txt

## Mechanism

### 	1. Tables are split from the row key direction, each split part is an HRegion. A table contains at least 1 HRegion
	2. Each HRegion is assigned to an HRegionServer for management
	3. Because row keys are ordered, the data ranges between HRegions do not overlap, so different row keys can be processed on different HRegionServers
	4. HRegion does not store data; data ultimately lands on HDFS. HRegion manages data
	5. When the size of HRegion (size of data managed by HRegion) reaches a certain limit (default 10G), HRegion splits into two equal HRegions, and one of the split HRegions is transferred to another HRegionServer for management. Note: No data transfer occurs during this process
	6. HRegionServer manages HRegion, HRegion manages data
	7. HRegion is the smallest unit for distributed storage and load balancing in HBase, but not the smallest unit for data storage
	8. HRegion structure:
		a. Each HRegion contains 1 to multiple HStores, the number of HStores is determined by the number of column families
		b. Each HStore contains 1 memStore (write cache) and 0 to multiple StoreFiles/HFiles
		c. Data in HBase is ultimately stored in HFiles, which eventually land on HDFS


### 

### 	1. When HBase starts, it registers a /hbase node on Zookeeper
	2. When Active HMaster starts, it registers a temporary child node /hbase/master under Zookeeper's /hbase node - Active HMaster maintains this temporary node registered on Zookeeper through heartbeat, meaning once HMaster crashes and heartbeat is lost, this temporary node disappears, and Zookeeper knows it needs to find another from Backup HMasters to switch to Active
	3. When Backup HMaster starts, it registers temporary child nodes under Zookeeper's /hbase/backup-masters node
	4. When HRegionServer starts, it also registers child nodes under Zookeeper's /hbase/rs node

### HMaster

- 	1. In HBase, the number of HMasters is unlimited; you can start any number of HMasters using command: sh hbase-daemon.sh start master
	2. Whoever starts first becomes Active HMaster
	3. Active HMaster monitors the node /hbase/backup-masters on Zookeeper, monitoring whether the number of child nodes under this node changes
	4. Active HMaster monitors /hbase/backup-masters every time it synchronizes messages
	5. In actual processes, the number of HMaster nodes generally does not exceed 3: 1A2B
	6. HMaster's role/responsibilities:
		a. Manage HRegionServer
		b. Responsible for DDL (table structure operations) operations in HBase tables; DML (table data operations) operations do not go through HMaster


### How HBase determines HRegion location on first read/write

- 
- 

	- 	a. After the client gets the location of the .meta. file, it caches this location
	b. After the client reads .meta., it caches the content of the .meta. file
	c. If the client crashes or HRegion transfer occurs, the cache becomes invalid and needs to be rebuilt

### HRegionServer

- 	1. HRegionServer's role is to manage HRegions. Official documentation states: each HRegionServer can manage 1000 HRegions, each HRegion can manage up to 10G of data
	2. HRegionServer contains 1 WAL, 1 BlockCache, and 0 to multiple HRegions
	3. WAL - Write Ahead Log -> HLog - write log
		a. WAL lands on HDFS
		b. When HRegionServer receives a write request, it first records the request in WAL, and after successful recording, updates data to memStore. This is done to prevent data loss
		c. When WAL reaches a certain limit, a new WAL is generated, and the original WAL becomes oldWAL, which is cleaned up regularly
		d. Before HBase 0.94, WAL only allowed serial writes; starting from HBase 0.94, NIO channel mechanism was introduced, allowing parallel writes to WAL
	4. BlockCache - block cache
		a. BlockCache is essentially a read cache maintained in memory
		b. BlockCache follows "locality" principle when caching - guess:
			i. Temporal locality: If a piece of data has been read, it can be considered that this data has a higher probability of being read a second time than other data, so HBase puts this data in read cache
			ii. Spatial locality: If a piece of data has been read, then data adjacent to this data can be considered to have a higher probability of being read than other data, so adjacent data is also put in cache
		c. Default size of BlockCache is 128M
		d. BlockCache adopts LRU strategy
In actual processes, if scan operations are frequent, BlockCache would be disabled; if get operations are frequent, consider using BlockCache
- 

### Compaction Mechanism

- 	1. HBase provides 2 merge mechanisms:
		a. minor compact: merges several small adjacent HFiles in an HRegion into one large HFile; after merging, several HFiles still exist
		b. major compact: merges all HFiles in an HRegion into one HFile; after merging, only 1 HFile exists
	2. minor compact has relatively high efficiency, so HBase defaults to minor compact
HFiles during merging will discard data marked for deletion and outdated data (can retain multiple versions of data)

### Write Process

- 	1. When HBase receives a write request (put/delete/deleteall), it first needs to determine which HRegion to write data to
	2. Find the corresponding HRegionServer, record this write request in WAL, then update data to memStore
	3. After data is updated to memStore, it is sorted: row key dictionary order -> column family name dictionary order -> column name dictionary order -> timestamp reverse order
	4. memStore is maintained in memory, memStore size is 128M
	5. When memStore reaches certain conditions, it flushes to generate a new StoreFile/HFile - single HFile is ordered; if multiple flushes occur, all HFiles are locally ordered
	6. memStore flush conditions:
		a. memStore automatically flushes when full
		b. By default, when WAL reaches 1G, memStore also flushes and generates a new WAL
		c. When the sum of memory occupied by all memStores on an HRegionServer reaches 35% of physical memory, the largest memStore is flushed
	7. HFile ultimately lands on HDFS
	8. First version HFile format:
		a. DataBlock: stores data
			i. DataBlock is the smallest storage unit in HBase
			ii. DataBlock is 64KB by default. Small DataBlocks are better for queries (get); large DataBlocks are better for traversal (scan)
			iii. Read cache spatial locality caches by DataBlock units
			iv. Each DataBlock consists of one Magic and multiple KeyValues
				1) Magic: magic number. Essentially a random number used for verification
				2) KeyValue: key-value pair. Used for actual data storage
		b. MetaBlock: stores metadata. Only appears in .meta. files
		c. FileInfo: file information. Description of current HFile
		d. DataIndex: records starting byte of each DataBlock in file
		e. MetaIndex: records starting byte of each MetaBlock in file
		f. Trailer: at end of file, fixed 4 bytes, first 2 bytes record DataIndex position, last 2 bytes record MetaIndex position
	9. Second version HFile added a Bloom filter:


### Read Process

- 	1. When HBase receives a read request, it first locks the unique HRegion. HRegion is managed by a certain HRegionServer, so it's equivalent to locking the unique HRegionServer
	2. First try to read data from BlockCache; if not found, try to read memStore; if memStore also doesn't have it, then read HFile
	3. When reading HFile, first filter out HFiles that don't match the range based on row key range; after range filtering, use Bloom filter for secondary filtering

- 
