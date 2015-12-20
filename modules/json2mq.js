'use strict';

module.exports = (function() {
    return [
{
  "name": "json2mq",
  "description": "Generate media query string from JSON or javascript object",
  "repos": "https://github.com/akiran/json2mq",
  "main": "index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "string-convert@^0.2.0"
  ],
  "version": "0.1.0",
  "build": "rm package.json && npm install --prefix . json2mq@0.1.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/json2mq\/(.*\.js)$/i,
      "release": "$1"
    },
    {
      "reg": /^\/README\.md$/i,
      "release": "$&"
    },
    {
      "reg": "*",
      "release": false
    }
  ]
},

{
  "name": "json2mq",
  "description": "Generate media query string from JSON or javascript object",
  "repos": "https://github.com/akiran/json2mq",
  "main": "index.js",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "string-convert@^0.2.0"
  ],
  "version": "0.2.0",
  "build": "rm package.json && npm install --prefix . json2mq@0.2.0",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/json2mq\/(.*\.js)$/i,
      "release": "$1"
    },
    {
      "reg": /^\/README\.md$/i,
      "release": "$&"
    },
    {
      "reg": "*",
      "release": false
    }
  ]
}
    ]
})();