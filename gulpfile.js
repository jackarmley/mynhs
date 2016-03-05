var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path');

var assets = {
    styles : './node_modules/bootstrap/less/'
}

gulp.task('less', function () {
  return gulp.src('./node_modules/bootstrap/less/bootstrap.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch',function(){
  gulp.watch(assets.styles + '**/*.less',['less']);
});

gulp.task('default', [
    'less',
    'watch'
]);


