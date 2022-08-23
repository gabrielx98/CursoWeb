const gulp = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const uglifycss = require('gulp-uglifycss')
const uglify = require('gulp-uglify')

appHTML = () => { 
    return gulp.src('src/**/*.html')
    .pipe(htmlMin({collapseWhitespace: true}))
    .pipe(gulp.dest("build")) 
}

appCSS = () => { 
    return gulp.src('src/assets/sass/index.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('build/assets/css')) 
    }

appJS = () => { 
    return gulp.src('src/assets/js/**/*.js')
    .pipe(babel({presets:['ENV']}))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('build/assets/js'))
    }

appIMG = () => { 
    return gulp.src('src/assets/imgs/**/*.*') 
    .pipe(gulp.dest('build/assets/imgs'))
    }

    gulp.task('appHTML', appHTML)
    gulp.task('appCSS', appCSS)
    gulp.task('appJS', appJS)
    gulp.task('appIMG',appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}