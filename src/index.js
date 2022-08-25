
import * as config from './config';
import * as _hquery from './hquery/main';
import * as _jquery from './jquery/main';

var _jq = null;

(() => {
    if (config.hquery) _hquery.setup();
    if (config.jquery) _jq = _jquery.jq;
})();

export const hquery = _hquery;
export const jquery = _jquery;
export * as math from './math/main';