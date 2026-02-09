const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// 需要翻译的文件列表
const filesToTranslate = [
  'background/Algorithm/Base-Sort.mdx',
  'background/Algorithm/Binary-Insert.mdx',
  'background/Algorithm/KMP.mdx',
  'background/Algorithm/bubble-sort.mdx',
  'background/Algorithm/head-sort.mdx',
  'background/Algorithm/insert-sort.mdx',
  'background/Algorithm/leet-code-4-power.mdx',
  'background/Algorithm/leet-code-return-twomedian-of-two-positive-intergers.mdx',
  'background/Algorithm/leet-code-two-link-table-add.mdx',
  'background/Algorithm/merge-sort.mdx',
  'background/Algorithm/quick-sort.mdx',
  'background/Algorithm/select-sort.mdx',
  'background/Algorithm/shell-sort.mdx',
  'background/Database/Java-Case-Distribution.mdx',
  'background/Database/mybatis-Plus-quick-start.mdx',
  'background/Database/mybatis-plus-code-generate.mdx',
  'background/Database/mysql-procedure.mdx',
  'background/Database/oracle-procedure.mdx',
  'background/Database/transaction-process.mdx',
  'background/Java/Concurrent-JVM/volatile-memory-domain.mdx',
  'background/Middleware/Camunda.mdx',
  'background/Middleware/Kafka.mdx',
  'background/Middleware/RabbitMQ.mdx',
  'background/Middleware/Redis.mdx',
  'background/Python/python-problems.mdx',
  'background/Python/python-replacement-script.mdx',
];

// 中英文翻译映射
const translations = {
  '基数排序': 'Radix Sort',
  '二分插入': 'Binary Insertion',
  'KMP算法': 'KMP Algorithm',
  '冒泡排序': 'Bubble Sort',
  '堆排序': 'Heap Sort',
  '插入排序': 'Insertion Sort',
  '求4的幂': 'Power of 4',
  '返回两个正序数组中位数': 'Median of Two Sorted Arrays',
  '两个单链表相加': 'Add Two Linked Lists',
  '归并排序': 'Merge Sort',
  '快速排序': 'Quick Sort',
  '选择排序': 'Selection Sort',
  '希尔排序': 'Shell Sort',
  '分布式问题': 'Distributed System Issues',
  'Mybatis Plus快速开始': 'MyBatis Plus Quick Start',
  'Mybatis Plus代码生成': 'MyBatis Plus Code Generation',
  'mysql存储过程': 'MySQL Stored Procedures',
  'Oracle 相关': 'Oracle Related',
  '事务处理': 'Transaction Processing',
  'volatile域内存知识': 'Volatile Memory Domain',
  'final域内存知识': 'Final Memory Domain',
  'JAVA虚拟机': 'Java Virtual Machine',
  'JMM相关内容': 'JMM Related Content',
  'Java 并发编程': 'Java Concurrent Programming',
  '处理器内存模型': 'Processor Memory Model',
  '锁': 'Locks',
  'Camunda Workflow Engine': 'Camunda Workflow Engine',
  'Kafka': 'Kafka',
  'RabbitMQ': 'RabbitMQ',
  'Redis': 'Redis',
  'Python 使用问题': 'Python Usage Issues',
  '在多个文件中替换多个相应的内容': 'Replace Multiple Contents in Multiple Files',
};

const docsDir = path.join(__dirname, '..', 'docs');
const i18nDir = path.join(__dirname, '..', 'i18n', 'en', 'docusaurus-plugin-content-docs', 'current');

console.log('Generating i18n MDX translation files...\n');

filesToTranslate.forEach(filePath => {
  const sourceFile = path.join(docsDir, filePath);
  const targetFile = path.join(i18nDir, filePath);
  
  try {
    // 读取源文件
    const content = fs.readFileSync(sourceFile, 'utf8');
    const { data, content: body } = matter(content);
    
    // 翻译 frontmatter
    const translatedData = { ...data };
    
    if (data.title && translations[data.title]) {
      translatedData.title = translations[data.title];
    }
    
    if (data.sidebar_label && translations[data.sidebar_label]) {
      translatedData.sidebar_label = translations[data.sidebar_label];
    }
    
    // 生成新的 MDX 文件
    const newContent = matter.stringify(body, translatedData);
    
    // 创建目标目录
    const targetDir = path.dirname(targetFile);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // 写入翻译文件
    fs.writeFileSync(targetFile, newContent, 'utf8');
    console.log(`✓ Created: ${targetFile}`);
    
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
});

console.log('\nDone!');
