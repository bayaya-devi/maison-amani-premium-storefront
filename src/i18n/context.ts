import {createContext} from 'react';import type {Locale,Localized} from '../types';import type {TranslationKey} from './copy'
export type I18nValue={locale:Locale;setLocale:(locale:Locale)=>void;t:(key:TranslationKey)=>string;pick:(value:Localized)=>string};export const I18nContext=createContext<I18nValue|null>(null)
