import { i18nClient } from './i18nClient';

export const l10n = (key, args) => {
  return i18nClient.l10nService.getMessage(key, args);
};
