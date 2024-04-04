import { SECOND_ROUNDING_EPSILON } from "./constants";

export const parseMilliseconds = (ms: number) => {
    if (typeof ms !== 'number') {
        throw new TypeError('Expected a number');
    }

    const round = ms > 0 ? Math.floor : Math.ceil;

    return {
        days: round(ms / 86400000),
        hours: round(ms / 3600000) % 24,
        minutes: round(ms / 60000) % 60,
        seconds: round(ms / 1000) % 60,
        milliseconds: round(ms) % 1000,
        microseconds: round(ms * 1000) % 1000,
        nanoseconds: round(ms * 1e6) % 1000
    };
}

export const pluralize = (word: string, count: number) => count === 1 ? word : `${word}s`;

export const floorDecimals = (value: number, decimalDigits: number) => {
    const flooredInterimValue = Math.floor((value * (10 ** decimalDigits)) + SECOND_ROUNDING_EPSILON);
    const flooredValue = Math.round(flooredInterimValue) / (10 ** decimalDigits);
    return flooredValue.toFixed(decimalDigits);
};