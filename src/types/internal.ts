export type Languages = 'en' | 'es' | 'pt';

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


export type JoinOptions = {
    separator?: {
        inline: string;
        final: string;
    },
    verbose?: boolean
}