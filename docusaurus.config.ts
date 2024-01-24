import { themes as prismThemes } from "prism-react-renderer";
import "@docusaurus/theme-search-algolia";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const DefaultLocale = 'zh';
const baseGithubUrl = 'https://github.com/Halcyon666/summary/edit/main';

// @ts-ignore
const config: Config = {
  title: "halcyon666",
  tagline: "Enjoy writing, Happy a nice day!",
  favicon: "img/favicon.png",

  // custom domain config
  url: "https://halcyon666.top/",
  baseUrl: "/",

  // github domain
  // Set the production url of your site here
  // url: "https://halcyon666.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: "/summary/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "halcyon666", // Usually your GitHub org/user name.
  projectName: "summary", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh",
    locales: ["zh", "en"],
  },

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  presets: [
    [
      "classic",
      {
        sitemap: {
          // @ts-ignore
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        docs: {
          // put the docs to the rott directory
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({locale, docPath}) => {
            // Link to Crowdin for French docs
            if (locale !== DefaultLocale) {
              return `${baseGithubUrl}/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`;
            }
            // Link to GitHub for English docs
            return `${baseGithubUrl}/docs/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
     // Declare some <meta> tags
     metadata: [
      {name: 'google-site-verification', content: 'vagj8ng2T0VN92-bvbq6xTnbbGF0_ZJXDvV0E_Yu3jY'},
      {name: 'google-adsense-account', content: 'ca-pub-4872091594975928'},
    ],
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "halcyon666",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "blog",
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/Halcyon666/",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "left",
        },
      ],
    },
    algolia: {
      // docSearch for  https://halcyon666.github.io/summary/
      // The application ID provided by Algolia
 /*      appId: "T5OO103S1G",
      // Public API key: it is safe to commit it
      apiKey: "8980e7549b3164ed7f36a8394542f0eb",
      indexName: "halcyon666", */
      // docSearch for  https://halcyon666.top/
      appId: "L275Z6TKIP",
      apiKey: "b97f0b3e89803595b362d3f85f35b7a0",
      indexName: "halcyon666top",

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: "/docs/", // or as RegExp: /\/docs\//
        to: "/",
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",

      //... other Algolia params
    },
    footer: {
      style: "dark",
      /*      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ], */
      copyright: `Copyright © ${new Date().getFullYear()} Halcyon666 Blog. Built with Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
