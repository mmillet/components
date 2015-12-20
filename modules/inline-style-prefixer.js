'use strict';

module.exports = (function() {
    return [
        {
            repos: 'https://github.com/rofrischmann/inline-style-prefixer.git',
            version: '0.5.3',
            name: 'inline-style-prefixer',
            main: 'lib/Prefixer.js',
            build: 'rm package.json && npm install --prefix . inline-style-prefixer@0.5.3',
            dependencies: [
                "bowser@^1.0.0"
            ],
            mapping: [
                 {
                    reg: /\bmin\b/i,
                    release: false
                },

                {
                    reg: /^\/node_modules\/inline-style-prefixer\/lib\/(.*)$/,
                    release: 'lib/$1'
                },

                {
                    reg: /^\/README\.md$/i,
                    release: '$&'
                },
                {
                    reg: '*',
                    release: false
                }
            ]
        }
    ]
})();
