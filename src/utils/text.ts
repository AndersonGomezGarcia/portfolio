import data from '../data/projects.json';

const project = data.projects[0];

type DescriptionItem =
  | { type: 'text'; value: string }
  | { type: 'img'; value: string }
  | { type: 'list'; value: string[] };

export function processDescription(item: DescriptionItem): string {
  switch (item.type) {
    case 'text':
      return `${item.value}`;
    case 'img':
      return `<img src="${item.value}" alt="Imagen del proyecto">`;
    case 'list':
      return `<ul>${item.value.map(li => `<li>${li}</li>`).join('')}</ul>`;
    default:
      return '';
  }
}
