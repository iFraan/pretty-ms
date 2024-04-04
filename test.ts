import { prettyMs } from './src/index';

const test = async () => {
    const value = 1001 * 65 * 5 * 10 * 305;
    console.log(prettyMs(value, { verbose: false }))
    console.log(prettyMs(value, { verbose: false, compact: true }))
    console.log(prettyMs(value, { verbose: true, compact: true }))
    console.log(prettyMs(value, { verbose: true }))
    console.log(prettyMs(value, { verbose: true, formatSubMilliseconds: true }))
};

test();
