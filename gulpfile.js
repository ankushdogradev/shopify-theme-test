const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
    return gulp.src('scss/global.scss')
        .pipe(sass())
        .pipe(gulp.dest('theme/assets'))
});