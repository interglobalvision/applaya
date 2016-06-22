var gulp = require('gulp');
var eslint = require('gulp-eslint');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var cache = require('gulp-cached');

// Main linting task caches changes to only lint after alterations
gulp.task('lint', function () {
  return gulp.src(['app/**/*.js','app/**/*.jsx','!node_modules/**','!app/node_modules/**','!app/.meteor/**'])
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(cache('linting'))
    .pipe(eslint({config: 'eslint.config.json'}))
    .pipe(eslint.format())
    .pipe(notify('File Linted'));
});

// Lint All task to check entire project
gulp.task('lint-all', function () {
  return gulp.src(['app/**/*.js','app/**/*.jsx','!node_modules/**','!app/node_modules/**','!app/.meteor/**'])
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(eslint({config: 'eslint.config.json'}))
    .pipe(eslint.format())
});

gulp.task('watch', function () {
  gulp.watch([
    'app/**/*.js',
    'app/**/*.jsx',
    '!app/.meteor/**/*.js',
    '!app/node_modules/**/*.js',
    '!node_modules/**/*.js',
  ], ['lint']);
});

gulp.task('default', ['watch']);