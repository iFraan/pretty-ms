import { prettyMs } from './src/index';

const test = async () => {
    const value = (1003 * 90 * 5 * 10 * 305) - 36000; // random ms
    const test_data = {
        default: prettyMs(value),
        compact: {
            non_verbose: prettyMs(value, { verbose: false, compact: true }),
            verbose: prettyMs(value, { verbose: true, compact: true }),
        },
        verbose: {
            default: prettyMs(value, { verbose: true }),
            with_ms: prettyMs(value, { verbose: true, formatSubMilliseconds: true }),
        },
        another_lang: prettyMs(value, { verbose: true, formatSubMilliseconds: true, lang: 'es' })
    }
    console.log(test_data)
};

test();
