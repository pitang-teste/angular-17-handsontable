import { ApplicationConfig } from '@angular/core';

import {
  ptBR as ptBrHandsontable,
  registerLanguageDictionary,
} from 'handsontable/i18n';
import { registerAllModules } from 'handsontable/registry';
import numbro from 'numbro';
import { registerLocaleData } from '@angular/common';
import ptBrAngular from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
// @ts-ignore: Missing TypeScript declaration file for "numbro" languages files
import ptBR from 'numbro/languages/pt-BR';

registerAllModules();
registerLocaleData(ptBrAngular);
registerLanguageDictionary(ptBrHandsontable);
numbro.registerLanguage(ptBR);
numbro.setLanguage('pt-BR');

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ]
};
