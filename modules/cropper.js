'use strict';

module.exports = (function() {
    return [{
        repos: 'https://github.com/fengyuanchen/cropper',
        version: 'v2.2.1',
        description: 'A simple jQuery image cropping plugin. http://fengyuanchen.github.io/cropper',
        name: 'cropper',
        main: 'cropper.js',
        dependencies: [
            "jquery@>=1.7.0"
        ],
        mapping: [
            {
                reg: '/dist/cropper.js',
                release: 'cropper.js'
            },
            {
                reg: '/dist/cropper.css',
                release: 'cropper.css'
            },
            {
                reg: /^\/README\.md$/,
                release: '$&'
            },
            {
                reg: '*',
                release: false
            }
        ],
        shim: {
            'cropper.js': {
                deps: ["jquery"],
                vars: ["jQuery"]
            }
        }
    }]
})();
