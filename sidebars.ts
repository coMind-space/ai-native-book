import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  bookSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Введение',
      items: ['introduction/about', 'introduction/why-now'],
    },
    {
      type: 'category',
      label: 'Часть I. Почему первые попытки не дают эффекта',
      items: [
        'part-1/overview',
        'part-1/chapter-01',
        'part-1/chapter-02',
        'part-1/chapter-03',
      ],
    },
    {
      type: 'category',
      label: 'Часть II. Что такое AI-Native компания',
      items: [
        'part-2/overview',
        'part-2/chapter-04',
        'part-2/chapter-05',
        'part-2/chapter-06',
        'part-2/chapter-07',
      ],
    },
    {
      type: 'category',
      label: 'Часть III. Как устроить безопасный контур',
      items: [
        'part-3/overview',
        'part-3/chapter-08',
        'part-3/chapter-09',
        'part-3/chapter-10',
        'part-3/chapter-11',
      ],
    },
    {
      type: 'category',
      label: 'Часть IV. Как пройти путь внедрения',
      items: [
        'part-4/overview',
        'part-4/chapter-12',
        'part-4/chapter-13',
        'part-4/chapter-14',
        'part-4/chapter-15',
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
      items: ['community/update-process', 'community/editorial-rules'],
    },
  ],
};

export default sidebars;
