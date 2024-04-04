import { Languages } from '../types/internal';
import en from '../lang/en.json';
import es from '../lang/es.json';

export const getLanguage = (code: Languages) => {
    switch (code) {
        case 'es':
            return es;
        case 'en':
            return en;
        default:
            return en;
    }
}