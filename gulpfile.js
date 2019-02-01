var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
 
sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
    return gulp.src([
        './src/all.scss',
        './main.scss',
    ])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('./main.css'))
        .pipe(gulp.dest('./'));
});

gulp.task('scss:watch', function () {
    gulp.watch(['./src/*.scss', './main.scss'], [ 'scss'] );
});

gulp.task('default', [ 'scss', 'scss:watch' ]);
gulp.task('production', [ 'scss' ]);
