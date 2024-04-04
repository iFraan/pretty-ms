import { PrettyMsOptions } from "./types/internal";
import { customJoin, floorDecimals, parseMilliseconds, pluralize } from "./utils";
import { getLanguage } from "./utils/lang";

export const prettyMs = (ms: number, options: PrettyMsOptions = {}) => {
    if (!Number.isFinite(ms)) {
        throw new TypeError('Expected a finite number');
    }

    const lang = getLanguage(options.lang);

    if (options.colonNotation) {
        options.compact = false;
        options.formatSubMilliseconds = false;
        options.separateMilliseconds = false;
        options.verbose = false;
    }

    if (options.compact) {
        options.secondsDecimalDigits = 0;
        options.millisecondsDecimalDigits = 0;
    }

    const result = [];

    const add = (value: number, long: string, short: string, valueString?: string) => {
        if ((result.length === 0 || !options.colonNotation) && value === 0 && !(options.colonNotation && short === 'm')) {
            return;
        }

        valueString = (valueString ?? value ?? '0').toString();
        let prefix: string;
        let suffix: string;
        if (options.colonNotation) {
            prefix = result.length > 0 ? ':' : '';
            suffix = '';
            const wholeDigits = valueString.includes('.') ? valueString.split('.')[0].length : valueString.length;
            const minLength = result.length > 0 ? 2 : 1;
            valueString = '0'.repeat(Math.max(0, minLength - wholeDigits)) + valueString;
        } else {
            prefix = '';
            suffix = options.verbose ? ' ' + pluralize(long, value) : short;
        }

        result.push(prefix + valueString + suffix);
    };

    const parsed = parseMilliseconds(ms);

    add(Math.trunc(parsed.days / 365), lang.year, 'y');
    add(parsed.days % 365, lang.day, 'd');
    add(parsed.hours, lang.hour, 'h');
    add(parsed.minutes, lang.minute, 'm');

    if (options.separateMilliseconds || options.formatSubMilliseconds || (!options.colonNotation && ms < 1000)) {
        add(parsed.seconds, lang.second, 's');
        if (options.formatSubMilliseconds) {
            add(parsed.milliseconds, lang.millisecond, 'ms');
            add(parsed.microseconds, lang.microsecond, 'µs');
            add(parsed.nanoseconds, lang.nanosecond, 'ns');
        } else {
            const millisecondsAndBelow
                = parsed.milliseconds
                + (parsed.microseconds / 1000)
                + (parsed.nanoseconds / 1e6);

            const millisecondsDecimalDigits = typeof options.millisecondsDecimalDigits === 'number'
                ? options.millisecondsDecimalDigits
                : 0;

            const roundedMiliseconds = millisecondsAndBelow >= 1
                ? Math.round(millisecondsAndBelow)
                : Math.ceil(millisecondsAndBelow);

            const millisecondsString = millisecondsDecimalDigits
                ? millisecondsAndBelow.toFixed(millisecondsDecimalDigits)
                : roundedMiliseconds.toString();

            add(Number.parseFloat(millisecondsString), lang.millisecond, 'ms', millisecondsString);
        }
    } else {
        const seconds = (ms / 1000) % 60;
        const secondsDecimalDigits = typeof options.secondsDecimalDigits === 'number'
            ? options.secondsDecimalDigits
            : 0;
        const secondsFixed = floorDecimals(seconds, secondsDecimalDigits);
        const secondsString = options.keepDecimalsOnWholeSeconds
            ? secondsFixed
            : secondsFixed.replace(/\.0+$/, '');

        add(Number.parseFloat(secondsString), lang.second, 's', secondsString);
    }

    if (result.length === 0) {
        return '0' + (options.verbose ? ' ' + lang.millisecond : 'ms');
    }

    if (options.compact) {
        return result[0];
    }

    if (typeof options.unitCount === 'number') {
        return customJoin(result.slice(0, Math.max(options.unitCount, 1)), { verbose: options.verbose, separator: { inline: ', ', final: lang.and } });
    }

    return options.colonNotation ? customJoin(result) : customJoin(result, { verbose: options.verbose, separator: { inline: ', ', final: lang.and } });
}

export default prettyMs;