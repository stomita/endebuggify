var path = require('path');
var through2 = require('through2');
var stripify = require('stripify');
var minimatch = require('minimatch');

module.exports = function endebuggify(file, opts) {
  var pattern = opts.target;
  var filePath = path.relative(process.cwd(), file);
  if (pattern && (pattern === '*' || minimatch(filePath, pattern))) {
    return through2();
  } else {
    return stripify(file, opts);
  }
};
