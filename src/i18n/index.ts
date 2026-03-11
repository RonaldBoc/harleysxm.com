import { en } from './en';
import { fr } from './fr';
import { es } from './es';
export const languages = { en, fr, es };
export type Lang = keyof typeof languages;
export function useTranslations(lang: Lang) {
  return languages[lang];
}
