'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var path = {
    scss:   './scss/**/*.scss',
    css:    './css',
    html:   './*.html'
};



// Compile sass into CSS (with a source map) & auto-inject into browsers
gulp.task('sass', function(){
    return gulp.src(path.scss)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.css))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function(){
    browserSync.init({
        server: ".",
        browser: 'chrome',
        port: 4000,
        notify: false,
        // reloadOnRestart: true
    });
    gulp.watch(path.scss, ['sass']);
    gulp.watch(path.html).on('change', reload);
});

gulp.task('default', ['serve']);