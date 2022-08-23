const gulp = require('gulp')
const concat = require('gulp-concat')
const uglifyCss = require('gulp-uglifycss')

depsCSS = cb => {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
    .pipe(uglifyCss({"uglyComments": false}))
    .pipe(concat('deps.min.css'))
    .pipe(gulp.dest('build/assets/css'))
}

depsFonts = cb => { 
    return gulp.src('node_modules/font-awesome/fonts/*.*') 
    .pipe(gulp.dest('build/assets/fonts'))

}

module.exports = {
    depsCSS,
    depsFonts
}