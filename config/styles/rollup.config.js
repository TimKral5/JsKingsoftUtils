import css from 'rollup-plugin-css-only';
import * as fs from 'fs';

export default {
    input: 'src/styles/index.js',
    plugins: [
        css({
            output: function (styles, styleNodes) {
                fs.writeFileSync('build/bundle.css', styles);
            },
        })
    ]
}