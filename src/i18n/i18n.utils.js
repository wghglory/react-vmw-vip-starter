import { i18nClient } from './i18nClient';

export const l10n = (key, args) => {
  return i18nClient.l10nService.getMessage(key, args);
};

export function formatDate(date, pattern) {
  try {
    return i18nClient.i18nService.formatDate(date, pattern);
  } catch (paramError) {
    return 'Invalid date';
  }
}
