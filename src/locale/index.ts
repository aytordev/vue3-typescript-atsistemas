import en from '@/locale/lang/en-US/settings';
import es from '@/locale/lang/es-ES/settings';
import { createI18n } from 'vue-i18n';

export const LOCALE_OPTIONS = [
  { label: 'Español', value: 'es-ES' },
  { label: 'English', value: 'en-US' },
];

const defaultLocale = 'en-US';

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'en-US',
  allowComposition: true,
  messages: {
    'en-US': en,
    'es-ES': es,
  },
});

export default i18n;
