'use strict';
const gulp = require('gulp');
//css
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
//js 
const jsmin = require('gulp-jsmin');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
//img
var tinypng = require('gulp-tinypng-compress');
// del
const del = require('del');

gulp.task('cssmin',function() {
    return gulp.src('dev/css/*.css')
        .pipe(concatCss("page_2.css",{
        rebaseUrls: false
        }))
        .pipe(autoprefixer({
            browsers: ['> 5%'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('pro/'));
});

gulp.task('jsmin', function () {
   return gulp.src('dev/js/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('pro/'));
});

gulp.task('imgmin', function () {
    return gulp.src('dev/images/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'C-_7khbQpCv5VIVvqxrC_Mg_waRpdj0K',
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('pro/images/'));
});

gulp.task('clean', function() {
    return del('pro/*.*');
});

gulp.task('build', gulp.series('clean', gulp.parallel('cssmin','jsmin')));

//gulp.task('whatching', function() {
//          gulp.watch('project/dev/css/*.css', gulp.series('css'));
//});


