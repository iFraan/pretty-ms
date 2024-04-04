<div align="center">
    <h1>pretty-ms</h1>
    <a href="https://www.codefactor.io/repository/github/ifraan/pretty-ms"><img src="https://www.codefactor.io/repository/github/ifraan/pretty-ms/badge" alt="CodeFactor" /></a>
    <a href="https://www.npmjs.com/package/@ifraan_/pretty-ms"><img src="https://badgen.net/npm/v/@ifraan_/pretty-ms?color=blue" alt="NPM-Version"/></a>
    <a href="https://www.npmjs.com/package/@ifraan_/pretty-ms"><img src="https://badgen.net/npm/dt/@ifraan_/pretty-ms?color=blue" alt="NPM-Downloads"/></a>
    <a href="https://github.com/iFraan/pretty-ms"><img src="https://badgen.net/github/stars/iFraan/pretty-ms?color=yellow" alt="Github Stars"/></a>
    <a href="https://github.com/iFraan/pretty-ms/issues"><img src="https://badgen.net/github/open-issues/iFraan/pretty-ms?color=green" alt="Issues"/></a>
    <h2>A simple milliseconds to reading-time function</h2>
    <h3>There are no dependencies nor API key required.</h3>
</div>

## To install use:
```shell
npm i @ifraan_/pretty-ms
```
## Examples:

### Default
```js
const value = (1003 * 90 * 5 * 10 * 305) - 36000; // random ms
prettyMs(value)
// '15d 22h 23m 1s'
prettyMs(value, { verbose: true })
// '15 days, 22 hours, 23 minutes and 1 second'
```

### Compact
```js
const value = (1003 * 90 * 5 * 10 * 305) - 36000; // random ms
prettyMs(value, { compact: true })
// '15d'
prettyMs(value, { compact: true, verbose: true })
// '15 days'
prettyMs(value, { compact: true, colonNotation: true })
// '15:22:23:01'
```

### Sub Milliseconds
```js
const value = (1000 * 60) + 1500.660005; // random ms
prettyMs(value, { formatSubMilliseconds: true })
// '1m 1s 500ms 660µs 5ns'
prettyMs(value, { formatSubMilliseconds: true, verbose: true })
// '1 minute, 1 second, 500 milliseconds, 660 microseconds and 5 nanoseconds'
```

### Multiple languages
```js
prettyMs(value, { verbose: true, lang: 'en' }); // english
// 15 days, 22 hours, 23 minutes and 1 second
prettyMs(value, { verbose: true, lang: 'es' }); // spanish
// 15 días, 22 horas, 23 minutos y 1 segundo
```
