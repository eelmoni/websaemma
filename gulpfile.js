var gulp = require('gulp'),
	connect = require('gulp-connect-multi')(),
	bower = require('gulp-bower'),
	mainBowerFiles = require('main-bower-files'),
	gutil = require('gulp-util'),
  less = require('gulp-less'),
  path = require('path');

//Bower Dependencies
gulp.task('bower', ['bower-files']);
gulp.task('bower-install', function() { return bower(); });
gulp.task('bower-files', ['bower-install'], function(){
	return gulp.src(mainBowerFiles(), { base: 'bower_components' })
	.pipe(gulp.dest('app/dev/lib'));
});

//Local web server with livereload
gulp.task('connect', connect.server({
  root: ['app'],
  port: 1337,
  livereload: true,
  open: {
    browser: 'chromium-browser --disable-web-security'
  }
}));

gulp.task('html', function () {
  gulp.src('./app/dev/html/*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/dev/html/*.html'], ['html']);
  gulp.watch(['./app/dev/css/*.css'], ['html']);
  gulp.watch(['./app/dev/less/*.less'], ['less']);
});

//Less
gulp.task('less', function () {
  return gulp.src('./app/dev/less/global.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less') ]
    }))
    .pipe(gulp.dest('./app/dev/css'));
});

// Default task
gulp.task('default', [
  'less',
  'connect',
  'watch'
]);


 

