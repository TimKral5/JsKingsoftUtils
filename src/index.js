import * as _hquery from './hquery/main';
import * as _jquery from './jquery/main';

(() => {
    _hquery.setup();
})();

export const hquery = _hquery;
export * as jquery from './jquery/main';
export * as math from './math/main';