import {useContext} from 'react';import {I18nContext} from './context'
export const useI18n=()=>{const value=useContext(I18nContext);if(!value)throw new Error('I18nProvider missing');return value}
