(function() {
  'use strict';

  const gulp = require('gulp');
  const pkg = require('../package.json');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  require('next-nice-comments');

  const niceComments = nx.niceComments(
    [
      'name: <%= pkg.name %>',
      'url: <%= pkg.homepage %>',
      'version: <%= pkg.version %>',
      'license: <%= pkg.license %>'
    ],
    'js'
  );

  gulp.task('scripts', function() {
    return gulp
      .src('src/*.js')
      .pipe($.uglify())
      .pipe($.header(niceComments, { pkg: pkg }))
      .pipe(gulp.dest('dist'))
      .pipe($.size({ title: '[ size ]:' }));
  });
})();
