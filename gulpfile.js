var gulp = require("gulp");
var amdOptimize = require("amd-optimize");
var concatFile  = require('gulp-concat');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var clean = require('gulp-clean');
var revReplaceRequireConfig = require('rev-replace-require-config');
var revCollector = require('gulp-rev-collector');
var hash = require('gulp-hash');

var srcJsPath = "./public/javascripts";
var distJsPath = "./dist/public/javascripts";

// 合并 公共库文件 并将合并后的文件 压缩放到dist相应的文件夹下
gulp.task('bundle', function () {
  return gulp.src([srcJsPath+'/**/*.js'])
    .pipe(amdOptimize('lib', {
      configFile: srcJsPath + '/require-config.js',
      findNestedDependencies: true,
      include: false
    }))
    .pipe(concatFile('lib.js'))
    .pipe(uglify())
    .pipe(gulp.dest(distJsPath));
});

// 压缩requireJS
gulp.task('uglifyRequireJs', function(){
  return gulp.src(srcJsPath + '/require.js')
    .pipe(uglify())
    .pipe(gulp.dest(distJsPath + '/'));
})


// 将改动的JS文件 添加md5 并生成一个映射表
gulp.task('bulidCtrl', ['bundle','cleanBulidCtrl'], function(){
  return gulp.src([
    srcJsPath + '/**/*.js', 
    '!'+srcJsPath+'/vendor', 
    '!'+srcJsPath+'/vendor/**/*', 
    '!'+srcJsPath+'/require.js', 
    '!'+srcJsPath+'/bootstrap.js', 
    '!'+srcJsPath+'/lib.js'])
    .pipe(rev())
    .pipe(uglify())
    .pipe(gulp.dest(distJsPath+'/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./mainfest/'))
});


// 替换 require-config 中的文件
gulp.task('replaceRequireConfig', ['bulidCtrl', 'bundle', 'uglifyRequireJs'], function(){
  return gulp.src(['./mainfest/*.json', distJsPath+'/require-config*.js'])
    .pipe(revCollector([]))
    .pipe(gulp.dest(distJsPath))
});

// build controller 之前先清除之前的
gulp.task('cleanBulidCtrl', function(){
  return gulp.src(['./dist/','./mainfest/'])
    .pipe(clean())
});

// 替换模版中的 js 路径
gulp.task('useref', ['replaceRequireConfig'], function(){
  var mainfest = gulp.src('./mainfest/rev-manifest.json');
  return gulp.src(['./views/**/*'])
    .pipe(revReplace({manifest: mainfest}))
    .pipe(gulp.dest('./dist/views/'));
})
