'use strict';

module.exports = (function() {
    return [
{
  "name": "antd",
  "description": "一个 UI 设计语言",
  "repos": "https://github.com/ant-design/ant-design.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@~2.2.0",
    "css-animation@1.1.x",
    "gregorian-calendar@~4.0.1",
    "gregorian-calendar-format@~4.0.4",
    "object-assign@~4.0.1",
    "rc-animate@~2.0.2",
    "rc-calendar@~4.0.0",
    "rc-checkbox@~1.1.1",
    "rc-collapse@~1.4.3",
    "rc-dialog@~5.2.2",
    "rc-dropdown@~1.4.3",
    "rc-form-validation@~2.5.0",
    "rc-input-number@~2.4.1",
    "rc-menu@~4.8.1",
    "rc-notification@~1.3.0",
    "rc-pagination@~1.3.5",
    "rc-progress@~1.0.4",
    "rc-queue-anim@~0.11.2",
    "rc-radio@~2.0.0",
    "rc-select@~5.1.2",
    "rc-slider@~3.1.2",
    "rc-steps@~1.4.1",
    "rc-switch@~1.3.1",
    "rc-table@~3.6.2",
    "rc-tabs@~5.5.0",
    "rc-time-picker@~0.7.1",
    "rc-tooltip@~3.2.0",
    "rc-tree@~0.19.0",
    "rc-trigger@~1.0.6",
    "rc-upload@~1.7.0",
    "rc-util@~3.0.1",
    "react-slick@~0.9.1",
    "reqwest@~2.0.5",
    "semver@~5.0.3",
    "util-deprecate@~1.0.1",
    "velocity-animate@~1.2.2",
    "warning@~2.1.0"
  ],
  "version": "0.10.3",
  "build": "rm package.json && npm install --prefix . antd@0.10.3",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/antd\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/antd\/style\/(.*)$/i,
      "release": "style/$1"
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
  "name": "antd",
  "description": "一个 UI 设计语言",
  "repos": "https://github.com/ant-design/ant-design.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@~2.2.0",
    "css-animation@1.1.x",
    "gregorian-calendar@~4.0.1",
    "gregorian-calendar-format@~4.0.4",
    "object-assign@~4.0.1",
    "rc-animate@~2.0.2",
    "rc-calendar@~4.0.0",
    "rc-checkbox@~1.1.1",
    "rc-collapse@~1.4.3",
    "rc-dialog@~5.2.2",
    "rc-dropdown@~1.4.3",
    "rc-form-validation@~2.5.0",
    "rc-input-number@~2.4.1",
    "rc-menu@~4.8.1",
    "rc-notification@~1.3.0",
    "rc-pagination@~1.3.5",
    "rc-progress@~1.0.4",
    "rc-queue-anim@~0.11.2",
    "rc-radio@~2.0.0",
    "rc-select@~5.1.2",
    "rc-slider@~3.1.2",
    "rc-steps@~1.4.1",
    "rc-switch@~1.3.1",
    "rc-table@~3.6.2",
    "rc-tabs@~5.5.0",
    "rc-time-picker@~0.7.1",
    "rc-tooltip@~3.2.0",
    "rc-tree@~0.19.0",
    "rc-trigger@~1.0.6",
    "rc-upload@~1.7.0",
    "rc-util@~3.0.1",
    "react-slick@~0.9.1",
    "reqwest@~2.0.5",
    "semver@~5.0.3",
    "util-deprecate@~1.0.1",
    "velocity-animate@~1.2.2",
    "warning@~2.1.0"
  ],
  "version": "0.10.4",
  "build": "rm package.json && npm install --prefix . antd@0.10.4",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/antd\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/antd\/style\/(.*)$/i,
      "release": "style/$1"
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
  "name": "antd",
  "description": "一个 UI 设计语言",
  "repos": "https://github.com/ant-design/ant-design.git",
  "main": "lib/index",
  "tag": "master",
  "reposType": "npm",
  "dependencies": [
    "classnames@~2.2.0",
    "css-animation@1.1.x",
    "gregorian-calendar@~4.0.1",
    "gregorian-calendar-format@~4.0.4",
    "object-assign@~4.0.1",
    "rc-animate@~2.0.2",
    "rc-calendar@~4.0.0",
    "rc-checkbox@~1.1.1",
    "rc-collapse@~1.4.3",
    "rc-dialog@~5.2.2",
    "rc-dropdown@~1.4.3",
    "rc-form-validation@~2.5.0",
    "rc-input-number@~2.4.1",
    "rc-menu@~4.8.1",
    "rc-notification@~1.3.0",
    "rc-pagination@~1.3.5",
    "rc-progress@~1.0.4",
    "rc-queue-anim@~0.11.2",
    "rc-radio@~2.0.0",
    "rc-select@~5.1.2",
    "rc-slider@~3.1.2",
    "rc-steps@~1.4.1",
    "rc-switch@~1.3.1",
    "rc-table@~3.6.2",
    "rc-tabs@~5.5.0",
    "rc-time-picker@~0.7.1",
    "rc-tooltip@~3.2.0",
    "rc-tree@~0.19.0",
    "rc-trigger@~1.0.6",
    "rc-upload@~1.7.0",
    "rc-util@~3.0.1",
    "react-slick@~0.9.1",
    "reqwest@~2.0.5",
    "semver@~5.0.3",
    "util-deprecate@~1.0.1",
    "velocity-animate@~1.2.2",
    "warning@~2.1.0"
  ],
  "version": "0.11.0-beta1",
  "build": "rm package.json && npm install --prefix . antd@0.11.0-beta1",
  "mapping": [
    {
      "reg": /\bmin\b|__tests__|gulpfile\.js|webpack\.config\.js|gruntfile\.js|test\.js/i,
      "release": false
    },
    {
      "reg": /^\/node_modules\/antd\/lib\/(.*)$/i,
      "release": "lib/$1"
    },
    {
      "reg": /^\/node_modules\/antd\/style\/(.*)$/i,
      "release": "style/$1"
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