/**
 * refer: https://confluence.eng.vmware.com/display/GQ/React
 */

import { i18nClient as vipClient, getBrowserCultureLang } from '@vip/vip-core-sdk';

import { ENGLISH } from './source.l10n';

const initI18nClient = () => {
  const currentLanguage = getBrowserCultureLang();
  vipClient.init({
    productID: 'appName',
    version: '1.0.0',
    component: 'ui',
    host: 'http://g11n-vip-dev-1.eng.vmware:8090',
    language: currentLanguage,
    sourceBundles: [ENGLISH],
    isPseudo: true,
  });

  return vipClient;
};

export const i18nClient = initI18nClient();
