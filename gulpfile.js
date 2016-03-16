var gulp = require("gulp");
var amdOptimize = require("amd-optimize");
var concatFile  = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('bundle', function () {
  return gulp.src('./public/javascripts/**/*.js')
    .pipe(amdOptimize('main', {
      configFile: './public/javascripts/require-config.js',
      findNestedDependencies: true,
      include: false
    }))
    .pipe(concatFile('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/javascripts/jsbuild'));
});

// 检测controller 文件改动
