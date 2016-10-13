/// <binding AfterBuild='clearLibsDestinationFolder, clearAppDestinationFolder, moveToLibs' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var clean = require('gulp-clean');

var libsDestPath = './wwwroot/libs/';
var appDestPath = './wwwroot/app/';

//clear destination folders
gulp.task('clearLibsDestinationFolder',
    function() {
        return gulp.src(libsDestPath)
            .pipe(clean());
    });

gulp.task('clearAppDestinationFolder',
    function () {
        return gulp.src(appDestPath)
            .pipe(clean());
    });

gulp.task('moveToLibs', function (done) {
    gulp.src([
      'node_modules/systemjs/dist/system-polyfils.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/jquery/dist/jquery.*js',
      'node_modules/bootstrap/dist/js/bootstrap*.js',
      'node_modules/core-js/client/shim.min.js'
    ]).pipe(gulp.dest('./wwwroot/libs/'));

    //gulp.src(['node_modules/@angular/**/*'], { base: 'node_modules/@angular' })
    //    .pipe(gulp.dest('./wwwroot/libs/@angular'));
    //gulp.src(['node_modules/angular2-in-memory-web-api/**/*'], { base: 'node_modules/angular2-in-memory-web-api' })
    //    .pipe(gulp.dest('./wwwroot/libs/angular2-in-memory-web-api'));
    //gulp.src(['node_modules/rxjs/**/*'], { base: 'node_modules/rxjs' })
    //    .pipe(gulp.dest('./wwwroot/libs/rxjs'));
    //gulp.src(['node_modules/angular2-jwt/**/*'], { base: 'node_modules/angular2-jwt' })
    //    .pipe(gulp.dest('./wwwroot/libs/angular2-jwt'));
    gulp.src(['node_modules/**/*.js'], { base: '.'})
        .pipe(gulp.dest('./wwwroot/libs'));

    gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.css'
    ]).pipe(gulp.dest('./wwwroot/libs/css'));

    //copy typescript files for debugging purposes
    gulp.src(['app/**/*']).pipe(gulp.dest('./wwwroot/app'));
});