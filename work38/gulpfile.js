'use strict';
const gulp = require('gulp');
// css
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');
//js 
const jsmin = require('gulp-jsmin');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
//img
const imagemin = require('gulp-imagemin');
// del
const del = require('del');
const isEmpty = require('gulp-file-empty');
// // inject 
// const inject = require('gulp-inject');
//sync
const browserSync = require('browser-sync').create();
const htmlImport = require('gulp-html-import');

//gulp.task('clear', function() {
//    return del('./remote/medcentr/*.html');
//});

//gulp.task('import', function () {
//    return gulp.src('./remote/medcentr/components/page/*.html')
//        .pipe(htmlImport('./remote/medcentr/components/part/'))
//        .pipe(gulp.dest('./remote/medcentr/')); 
//})

//gulp.task('isempt', function () {
//   return gulp.src('./remote/medcentr/9_template.html')
//        .pipe(isEmpty());
//});
gulp.task('serve', function() {
  browserSync.init(
  // {
  //   proxy:'w33/remote/medcentr/',
  //   port:8080
  // }
  {
    server: "./"
  }
  
  );

//gulp.series('import');
    // gulp.watch("public/css/scss/*.scss", ['sass']);
  gulp.watch("./css/*.css").on('change', gulp.series(browserSync.reload));                
  gulp.watch("./js/*.js").on('change', gulp.series(browserSync.reload));              
  gulp.watch("./*.html").on('change', gulp.series(browserSync.reload));              
//  gulp.watch("./components/**/*.html").on('change', gulp.series('clear','import','isempt',browserSync.reload));
});




// var browserSync = require('browser-sync');
// // var config = require('../config');

// gulp.task('server', function() {
//   browserSync({
//     proxy: 'http://alsi-ft.ru/',
//     files: ['remote/alsi/*.css'],
//      serveStatic: ['remote/alsi'], 
//     rewriteRules: [
//     {
//       match: new RegExp('</head>'),
//       fn: function() {
//         return '<link href="/style.css" type="text/css" rel="stylesheet">'
//       }
//     }],
//     port:8080
//       })
// });