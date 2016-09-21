'use strict';
const path = require('path');
const mcss = require('foxman-mcss');
const autoprefix = require('gulp-autoprefixer');
const routers = require('./route');
let r = path.resolve;

let alias = {
    r: r(__dirname, 'src', 'main', 'webapp')
};
module.exports = {
    nei: {
        key: '4af51152079f243c6dc28ce87908919e'
    },
    preCompilers: [{
        test: [r(alias.r, 'src/mcss/**/*.mcss')],
        handler: (dest) => [
            mcss({
                "include": [],
                "exclude": "(\\\\|\\/)_",
                "format": 1
            }),
            autoprefix({
                browsers: ['Android >= 2.3'],
                cascade: false
            }),
            dest(r(alias.r, 'src/css'))
        ]
    }],
    watch: {
        root: alias.r
    },
    server: {
        routers,
        port: 8080,
        proxy: {
            host: 'm.kaola.com',
            service: {
                /**
                 * 代理url转换器
                 * @param url
                 * @returns {string}
                 */
                test(url){
                    let devMark = 'isDev=1000';
                    let result = (-1 === url.indexOf('?') ? `?${devMark}` : `&${devMark}`);
                    return 'http://m.kaola.com/' + url.replace(/^\//, '') + result;
                }
            }
        },
        viewRoot: r(alias.r, 'WEB-INF'),
        syncData: r(__dirname, 'mock/fakeData'),
        asyncData: r(__dirname, 'mock/json'),
        static: [r(alias.r, 'src')]
    }
};
