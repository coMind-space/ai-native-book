import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'Путь компании к AI-Native',
  tagline: 'Интерактивная книга о переходе к новой операционной модели',
  favicon: 'img/favicon.svg',

  url: 'https://comind-space.github.io',
  baseUrl: '/ai-native-book/',

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
      title: 'AI-Native Book',
      logo: {
        alt: 'coMind',
        src: 'img/favicon.svg',
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
          ],
        },
        {
          title: 'coMind',
          items: [
            {label: 'GitHub', href: 'https://github.com/coMind-space/ai-native-book'},
          ],
        },
      ],
      copyright: `coMind, ${new Date().getFullYear()}`,
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
