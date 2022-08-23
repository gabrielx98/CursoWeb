const gulp = require('gulp')
const watch = require('gulp-watch')
const webService = require('gulp-webserver')

monitorarArquivos = (cb) => {
    watch('src/**/*.html', ()=> gulp.series('appHTML')())
    watch('src/**/*.scss', ()=> gulp.series('appCSS')())
    watch('src/**/*.js', ()=> gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', ()=> gulp.series('appIMG')())
    
    return cb
}

servidor = () => {
    return gulp.src('build')
    .pipe(webService({
        port: 8080,
        open: true,
        livereload: true
    })) 
}

module.exports = {
    monitorarArquivos,
    servidor
}