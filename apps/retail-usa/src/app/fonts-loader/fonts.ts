export interface LoadableFont {
  family: string;
  size?: string;
}

export const fontsToLoad: LoadableFont[] = [
  { family: 'Material Icons Outlined' },
  { family: 'Material Icons' },
  { family: 'IcoMoon' },
];
