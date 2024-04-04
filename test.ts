import { prettyMs } from './src/index';

const test = async () => {
    const value = 1000 * 65 * 5 * 10;
    console.log(prettyMs(value, { verbose: false }))
    console.log(prettyMs(value, { verbose: true }))
};

test();
