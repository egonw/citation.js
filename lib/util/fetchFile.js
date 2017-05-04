'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _syncRequest = require('sync-request');

var _syncRequest2 = _interopRequireDefault(_syncRequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Fetch file
 * 
 * @access private
 * @method fetchFile
 * 
 * @param {String} url - The input url
 * 
 * @return {String} The fetched string
 */
var fetchFile = function fetchFile(url) {
  var result;

  try {
    result = (0, _syncRequest2.default)('GET', url, { uri: url }).getBody('utf8');
  } catch (e) {
    console.error('[set]', 'File could not be fetched');
  }

  return result;
};

exports.default = fetchFile;