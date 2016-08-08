var gulp = require('gulp')
var livereload = require('gulp-livereload')
var sass = require('gulp-sass')
var express = require('express')
gulp.task('default', ['serve', 'sass'], function () {
  livereload.listen()
  gulp.watch('./css/*.scss', ['sass'])
})
gulp.task('sass', function() {
  gulp.src('./css/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('./css'))
  .pipe(livereload())
})
gulp.task('serve', function() {
  var app = express();
  app.use(express.static('.'))
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
})
