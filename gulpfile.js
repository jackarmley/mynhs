var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    connect = require('gulp-connect'),
    jade = require('gulp-jade');


var assets = {
    styles : './public/css/',
    templates : './public/templates/'
};

var locals = {
    title : 'My NHS'
};

gulp.task('less', function () {
  return gulp.src(assets.styles + 'less/styles.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest(assets.styles));
});

gulp.task('templates', function() {

  gulp.src(assets.templates + 'jade/*.jade')
    .pipe(jade({
      locals: locals
    }))
    .pipe(gulp.dest('public'))
});

gulp.task('server', function(){
  connect.server({
    port: 3000,
    root: 'public'
  });
});

gulp.task('watch',function(){
  gulp.watch(assets.styles + 'less/**/*.less',['less']);
  gulp.watch(assets.templates + 'jade/**/*.jade',['templates']);
});

gulp.task('default', [
    'server',
    'less',
    'templates',
    'watch'
]);


