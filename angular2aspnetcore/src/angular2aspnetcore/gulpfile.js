/// <binding AfterBuild='clearDestinationFolder, moveToLibs' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var clean = require('gulp-clean');

var destPath = './wwwroot/libs/';

//clear destination folder
gulp.task('clearDestinationFolder',
    function() {
        return gulp.src(destPath)
            .pipe(clean());
    });

gulp.task('moveToLibs', function (done) {
    gulp.src([
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/systemjs/dist/system-polyfils.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/jquery/dist/jquery.*js',
      'node_modules/bootstrap/dist/js/bootstrap*.js',
      
      'node_modules/core-js/client/shim.min.js'
      
      //'node_modules/systemjs/dist/*.*',
    ]).pipe(gulp.dest('./wwwroot/libs/'));

    gulp.src(['node_modules/@angular/**/*'], { base: 'node_modules/@angular' })
        .pipe(gulp.dest('./wwwroot/libs/@angular'));
    gulp.src(['node_modules/angular2-in-memory-web-api/**/*'], { base: 'node_modules/angular2-in-memory-web-api' })
        .pipe(gulp.dest('./wwwroot/libs/angular2-in-memory-web-api'));
    gulp.src(['node_modules/rxjs/**/*'], { base: 'node_modules/rxjs' })
        .pipe(gulp.dest('./wwwroot/libs/rxjs'));

    gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.css'
    ]).pipe(gulp.dest('./wwwroot/libs/css'));
});