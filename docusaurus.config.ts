import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const siteUrl = process.env.SITE_URL ?? 'https://book.my.comind.space';
const baseUrl = process.env.BASE_URL ?? '/';

const config: Config = {
  title: 'Путь компании к AI-Native',
  tagline: 'Интерактивная книга о переходе к новой операционной модели',
  favicon: 'img/favicon.svg',

  url: siteUrl,
  baseUrl,

  organizationName: 'coMind-space',
  projectName: 'ai-native-book',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/coMind-space/ai-native-book/edit/main/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    navbar: {
      title: 'Путь компании к AI-Native',
      logo: {
        alt: 'coMind',
        src: 'img/logo-mark.svg',
      },
      items: [
        {
          href: 'https://github.com/coMind-space/ai-native-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Книга',
          items: [
            {label: 'Начать чтение', to: '/'},
            {label: 'Как обновлять книгу', to: '/community/update-process'},
            {label: 'GitHub', href: 'https://github.com/coMind-space/ai-native-book'},
          ],
        },
        {
          title: 'coMind',
          items: [
            {label: 'comind.space', href: 'https://comind.space'},
            {html: '<span class="footer__book-mark">Путь компании к AI-Native, 2026</span>'},
          ],
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
