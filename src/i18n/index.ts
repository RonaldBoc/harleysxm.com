import { en } from './en';
export const languages = { en };
export type Lang = keyof typeof languages;
export function useTranslations(lang: Lang) {
  return languages[lang];
}
