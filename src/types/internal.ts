export type Languages = 'en' | 'es';

export type PrettyMsOptions = {
    lang?: Languages;
    verbose?: boolean;
    unitCount?: number;
    colonNotation?: boolean;
    compact?: boolean;
    formatSubMilliseconds?: boolean;
    separateMilliseconds?: boolean;
    secondsDecimalDigits?: number;
    millisecondsDecimalDigits?: number;
    keepDecimalsOnWholeSeconds?: boolean;
}
