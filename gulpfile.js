const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const { write } = require('fs');

function images() {
    return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outStyle: 'compressed'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'));
}

exports.default = gulp.parallel(styles, scripts, images);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.parallel(scripts));
    gulp.watch('./src/images/*', {ignoreInitial: false}, gulp.parallel(images));
}