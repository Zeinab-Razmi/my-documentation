import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Documentation',
  tagline: 'Image processing is cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Zeinab-Razmi', // Usually your GitHub org/user name.
  projectName: 'my-documentation', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@cmfcmf/docusaurus-search-local', '@docusaurus/theme-mermaid'],
  // In order for Mermaid code blocks in Markdown to work,
  // you also need to enable the Remark plugin with this option
  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'My Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
          {
            type: "dropdown",
            label: "Advanced concepts",
            position: "left",
            items: [
                {type: "doc", docId: "advanced-concept-1/introduction", label: "Advanced concept 1"},
                {type: "doc", docId: "advanced-concept-2/introduction", label: "Advanced concept 2"},
            ]
          },
          {
            type: "dropdown",
            label: "Basic concepts",
            position: "left",
            items: [
                {type: "doc", docId: "basic-concept-1/introduction", label: "Basic concept 1"},
                {type: "doc", docId: "basic-concept-2/introduction", label: "Basic concept 2"},
            ]
          },
          {
            type: "dropdown",
            label: "Projects",
            position: "left",
            items: [
                {type: "doc", docId: "project-1/introduction", label: "Project 1"},
                {type: "doc", docId: "project-2/introduction", label: "Project 2"},
            ]
          },
          {
            type: "dropdown",
            label: "Technologies",
            position: "left",
            items: [
                {type: "doc", docId: "technology-1/introduction", label: "Technology 1"},
                {type: "doc", docId: "technology-2/introduction", label: "Technology 2"},
            ]
          },
          {
            type: "search",
            position: "right"
          },
          {
          href: 'https://github.com/Zeinab-Razmi/my-documentation',
          label: 'GitHub',
          position: 'right',
          },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
