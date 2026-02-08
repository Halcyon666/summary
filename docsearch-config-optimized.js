new Crawler({
  appId: "L275Z6TKIP",
  apiKey: "dbe5716306e7c43c8f0715ff42a16a4d",
  
  // 爬取设置
  rateLimit: 8,
  maxDepth: 10,
  maxUrls: 10000,
  startUrls: ["https://halcyon666.top/"],
  sitemaps: ["https://halcyon666.top/sitemap.xml"],
  renderJavaScript: false,
  ignoreCanonicalTo: true,
  
  // URL 模式
  discoveryPatterns: ["https://halcyon666.top/**"],
  exclusionPatterns: [
    // 排除旧域名
    "https://halcyon666.github.io/**",
    // 排除常见的非文档页面（根据需要调整）
    "https://halcyon666.top/404.html",
    "https://halcyon666.top/search.html",
  ],
  
  // 定时任务
  schedule: "every 1 day at 3:00 am",
  
  // 索引操作
  actions: [
    {
      // 主索引 - 使用简洁的名称
      indexName: "halcyon666",
      pathsToMatch: ["https://halcyon666.top/**"],
      recordExtractor: ({ url, $, helpers }) => {
        // 提取当前激活的导航项作为 lvl0
        const lvl0 =
          $(
            ".menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active",
          )
            .last()
            .text() || "Documentation";

        return helpers.docsearch({
          recordProps: {
            lvl0: {
              selectors: "",
              defaultValue: lvl0,
            },
            lvl1: ["header h1", "article h1", "main h1"],
            lvl2: "article h2, main h2",
            lvl3: "article h3, main h3",
            lvl4: "article h4, main h4",
            lvl5: "article h5, main h5",
            lvl6: "article h6, main h6",
            content: "article p, article li, main p, main li, article td:last-child",
          },
          aggregateContent: true,
          recordVersion: "v3",
        });
      },
    },
  ],
  
  // 安全检查
  safetyChecks: { 
    beforeIndexPublishing: { 
      maxLostRecordsPercentage: 30 
    } 
  },
  
  // 索引设置
  initialIndexSettings: {
    halcyon666: {
      // 用于筛选的属性
      attributesForFaceting: [
        "type",
        "lang",
        "language",
        "version",
        "docusaurus_tag",
      ],
      
      // 返回的属性
      attributesToRetrieve: [
        "hierarchy",
        "content",
        "anchor",
        "url",
        "url_without_anchor",
        "type",
      ],
      
      // 高亮和摘要
      attributesToHighlight: ["hierarchy", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "content"],
      
      // 可搜索属性（按优先级排序）
      searchableAttributes: [
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      
      // 去重设置
      distinct: true,
      attributeForDistinct: "url",
      
      // 自定义排序
      customRanking: [
        "desc(weight.pageRank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      
      // 排序策略
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      
      // 高亮标签
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      
      // 拼写容错
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      
      // 其他搜索设置
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
    },
  },
  
  // 保存备份
  saveBackup: true,
});
