const {series, parallel} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifyCss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function TransformacaoSass(cb){
    return gulp.src('src/sass/index.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(uglifyCss({"uglyComments":true}))
    .pipe(concat('estilo.min.css'))
    .pipe(gulp.dest('build/css'))
}

function moverHtml(cb){
    return gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
}

exports.default = parallel(TransformacaoSass,moverHtml)