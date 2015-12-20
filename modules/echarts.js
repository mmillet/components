'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/ecomfe/echarts.git',
        version: '2.1.10',
        name: 'echarts',
        main: 'echarts.js',
        dependencies: [
            "zrender"
        ],
        mapping: [
            {
                reg: /\.min\.(js|css)$/,
                release: false
            },
            {
                reg: /\/util\/mapData\/rawData\/.*$/i,
                release: false
            },
            {
                reg: /^\/src\/(.*)$/,
                release: '$1'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ]
    }, {
        version: '2.2.7',
        extend: '2.1.10'
    }]
})();
