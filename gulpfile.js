const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

gulp.task('sass', function (done) {
    return gulp
        .src('./**/*.scss')
        .pipe(sass().on('error', function (err) {
            console.error(err.message);
            this.emit('end');
            done();
        }))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./build/css'))
        .on('end', done);
});

gulp.task('watch', function () {
    gulp.watch('./**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));