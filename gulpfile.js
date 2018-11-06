const gulp         = require('gulp')
const concat       = require('gulp-concat')
const watch        = require('gulp-watch')
const plumber      = require('gulp-plumber')
const stylus       = require('gulp-stylus')
const cleanCSS     = require('gulp-clean-css')
const gcmq         = require('gulp-group-css-media-queries')
const autoprefixer = require('gulp-autoprefixer')
const glob         = require('glob');
const path         = require('path');
const browserify   = require('browserify')
const vueify       = require('vueify')
const source       = require('vinyl-source-stream')

const css = entry => {
  return () => {
    gulp.src(entry)
      .pipe(plumber())
      .pipe(stylus({ errLogToConsole: true }))
      .pipe(gcmq())
      .pipe(gulp.dest('./www/css'))
      .pipe(gcmq())
      .pipe(cleanCSS({ compatibility: 'ie8' }))
      .pipe(gulp.dest('./www/css/min'))
  }
}

const js = entry => {
  return () => {
    browserify(entry)
      .transform(vueify)
      .bundle()
      .pipe(source('site.js'))
      .pipe(gulp.dest('./www/js'))
  }
}

gulp
  .task('default', [ 'build', 'watch' ])
  .task('build', [ 'build.css' ])
  .task('build.css', [ 'build.css.site' ])
  .task('build.css.site', css('src/css/site.styl'))
  .task('build.js', [ 'build.js.site' ])
  .task('build.js.site', js('src/js/site.js'))
  .task('watch', () => {
      watch('src/js/**/*',       e => gulp.start('build.js.site'))
      watch('src/css/**/*.styl', e => gulp.start('build.css.site'))
  })

require('fs').chmod = (a, b, cb) => { cb(0) }