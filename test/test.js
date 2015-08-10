var assert = require('power-assert');
var fs = require('fs');
var path = require('path');
var concat = require('concat-stream');
var endebuggify = require('../');


describe('endebuggify', function() {
  var filePath = path.join(__dirname, 'fixtures', 'hello-world.js');
  var patterns = [
    undefined,
    '*',
    'test/fixtures/nomatch/**/*',
    'test/fixtures/**',
  ];
  patterns.forEach(function(pattern, i) {
    it('should match expected: ' + pattern, function(done) {
      fs.createReadStream(filePath)
        .pipe(endebuggify(filePath, { target: pattern }))
        .pipe(concat({ encoding: 'string' }, function (endebugged) {
          fs.readFile(path.join(__dirname, 'expected', 'hello-world-'+(i+1)+'.js'), 'utf8', function (err, expectation) {
            if (err) { return done(err); }
            assert(endebugged === expectation);
            done();
          });
        }));
    });
  });
});
