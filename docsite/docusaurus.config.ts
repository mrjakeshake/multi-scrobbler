import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import * as themes from 'prism-react-renderer';
//import sidebars from './sidebars';

const config: Config = {
  title: 'Multi-Scrobbler',
  tagline: 'Scrobble all the things',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://foxxmd.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.DOCS_BASE !== undefined && process.env.DOCS_BASE !== '' ? process.env.DOCS_BASE : '/docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'foxxmd', // Usually your GitHub org/user name.
  projectName: 'multi-scrobbler', // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  scripts: [
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
      "docusaurus-json-schema-plugin",
    [
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexBlog: false,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
    'docusaurus-theme-github-codeblock'
  ],
  plugins: [
  ],
  themeConfig:
    {
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Multi-Scrobbler',
        logo: {
          alt: 'Logo',
          src: 'img/icon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'playground',
            position: 'left',
            label: 'Config Playground',
          },
          {
            href: 'https://github.com/foxxmd/multi-scrobbler',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://foxxmd.github.io/multi-scrobbler/',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/',
              },
              {
                label: 'Installation',
                to: 'docs/installation',
              },
              {
                label: 'Configuration',
                to: 'docs/configuration',
              },
              {
                label: 'Development',
                to: 'docs/development/dev-common',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/foxxmd/multi-scrobbler',
              },
              {
                label: 'Website',
                href: 'https://foxxmd.github.io/multi-scrobbler/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Multi-Scrobbler. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.themes.github,
        darkTheme: themes.themes.dracula,
        additionalLanguages: ['json','json5','typescript', 'docker', 'bash', 'ini']
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      codeblock: {
        showGithubLink: true,
        githubLinkLabel: 'View on GitHub',
        showRunmeLink: false,
        runmeLinkLabel: 'Checkout via Runme'
      }
    } satisfies Preset.ThemeConfig,
};

if (process.env.ANALYTICS !== undefined && process.env.ANALYTICS !== '') {
  const script = {
    src: process.env.ANALYTICS,
  }
  if (process.env.ANALYTICS_DOMAIN !== undefined && process.env.ANALYTICS_DOMAIN !== '') {
    script['data-domain'] = process.env.ANALYTICS_DOMAIN;
  }
  config.scripts.push(script)
}

export default config;
