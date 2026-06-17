import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import fs from 'node:fs';
import path from 'node:path';
import GithubSlugger from 'github-slugger';

const docsRoot = path.join(process.cwd(), 'docs');

function parseHeading(heading: string): {label: string; anchor?: string} {
  const match = heading.match(/^(?<label>.+?)\s+\{#(?<anchor>[^}]+)\}$/u);
  if (match?.groups?.label) {
    return {
      label: match.groups.label.trim(),
      anchor: match.groups.anchor,
    };
  }

  return {label: heading.trim()};
}

function sectionLinks(docId: string) {
  const sourcePath = path.join(docsRoot, `${docId}.md`);
  if (!fs.existsSync(sourcePath)) {
    return [];
  }

  const slugger = new GithubSlugger();
  const markdown = fs.readFileSync(sourcePath, 'utf8');
  return markdown
    .split(/\r?\n/u)
    .map((line) => line.match(/^## (.+)$/u)?.[1])
    .filter((heading): heading is string => Boolean(heading))
    .map(parseHeading)
    .filter((heading) => heading.label && heading.label !== 'Указатель')
    .map((heading) => {
      const anchor = encodeURIComponent(
        heading.anchor ?? slugger.slug(heading.label),
      );
      return {
        type: 'link' as const,
        label: heading.label,
        href: `/${docId}#${anchor}`,
      };
    });
}

function chapter(id: string, label: string) {
  const items = sectionLinks(id);
  if (items.length === 0) {
    return id;
  }

  return {
    type: 'category' as const,
    label,
    link: {
      type: 'doc' as const,
      id,
    },
    items,
  };
}

const sidebars: SidebarsConfig = {
  bookSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Введение',
      link: {
        type: 'doc',
        id: 'introduction/about',
      },
      items: ['introduction/about', 'introduction/why-now'],
    },
    {
      type: 'category',
      label: 'Часть I. Почему первые попытки не дают эффекта',
      link: {
        type: 'doc',
        id: 'part-1/overview',
      },
      items: [
        'part-1/overview',
        chapter('part-1/chapter-01', 'Глава 1'),
        chapter('part-1/chapter-02', 'Глава 2'),
        chapter('part-1/chapter-03', 'Глава 3'),
      ],
    },
    {
      type: 'category',
      label: 'Часть II. Что такое AI-Native компания',
      link: {
        type: 'doc',
        id: 'part-2/overview',
      },
      items: [
        'part-2/overview',
        chapter('part-2/chapter-04', 'Глава 4'),
        chapter('part-2/chapter-05', 'Глава 5'),
        chapter('part-2/chapter-06', 'Глава 6'),
        chapter('part-2/chapter-07', 'Глава 7'),
      ],
    },
    {
      type: 'category',
      label: 'Часть III. Как устроить безопасный контур',
      link: {
        type: 'doc',
        id: 'part-3/overview',
      },
      items: [
        'part-3/overview',
        chapter('part-3/chapter-08', 'Глава 8'),
        chapter('part-3/chapter-09', 'Глава 9'),
        chapter('part-3/chapter-10', 'Глава 10'),
        chapter('part-3/chapter-11', 'Глава 11'),
      ],
    },
    {
      type: 'category',
      label: 'Часть IV. Как пройти путь внедрения',
      link: {
        type: 'doc',
        id: 'part-4/overview',
      },
      items: [
        'part-4/overview',
        chapter('part-4/chapter-12', 'Глава 12'),
        chapter('part-4/chapter-13', 'Глава 13'),
        chapter('part-4/chapter-14', 'Глава 14'),
        chapter('part-4/chapter-15', 'Глава 15'),
      ],
    },
    {
      type: 'doc',
      id: 'appendices/h-glossary',
      label: 'Словарь терминов',
    },
    {
      type: 'category',
      label: 'Приложения',
      link: {
        type: 'doc',
        id: 'appendices/a-readiness-checklist',
      },
      items: [
        'appendices/a-readiness-checklist',
        'appendices/b-first-wave-template',
        'appendices/c-source-of-truth-template',
        'appendices/d-enhanced-role-card',
        'appendices/e-skill-card',
        'appendices/f-document-skills',
        'appendices/g-first-30-days',
        'appendices/i-ai-native-checklist',
        'appendices/j-skills-in-git',
      ],
    },
    {
      type: 'category',
      label: 'Обновление книги',
      link: {
        type: 'doc',
        id: 'community/update-process',
      },
      items: ['community/update-process', 'community/editorial-rules'],
    },
  ],
};

export default sidebars;
