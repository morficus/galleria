var gulp = require('gulp'),
    jscs = require('gulp-jscs');

gulp.task('validate', function () {
    return gulp.src('**/*.js')
        .pipe(jscs());
});
