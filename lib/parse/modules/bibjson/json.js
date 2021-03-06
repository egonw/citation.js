'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = exports.types = exports.scope = undefined;

var _date = require('../../date');

var _date2 = _interopRequireDefault(_date);

var _name = require('../../name');

var _name2 = _interopRequireDefault(_name);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseContentMine = function parseContentMine(data) {
  var res = {
    type: 'article-journal'
  };

  Object.keys(data).forEach(function (prop) {
    res[prop] = data[prop].value[0];
  });

  if (res.hasOwnProperty('authors')) {
    res.author = data.authors.value.map(_name2.default);
  }
  if (res.hasOwnProperty('firstpage')) {
    res.page = res['page-first'] = res.firstpage;
  }
  if (res.hasOwnProperty('date')) {
    res.issued = (0, _date2.default)(res.date);
  }
  if (res.hasOwnProperty('journal')) {
    res['container-title'] = res.journal;
  }
  if (res.hasOwnProperty('doi')) {
    res.id = res.DOI = res.doi;
  }

  return res;
};

var scope = exports.scope = '@bibjson';
var types = exports.types = '@bibjson/object';
exports.parse = parseContentMine;