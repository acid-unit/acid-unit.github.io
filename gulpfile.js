const gulp = require('gulp'),
    handlebars = require('gulp-compile-handlebars'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    webserver = require('gulp-webserver');

gulp.task('html', function () {
    return gulp.src('src/templates/pages/**/*.hbs')
        .pipe(handlebars({}, {
            ignorePartials: true, // ignore unknown partials
            partials : {
                homepage: 'https://acid.7prism.com',
                email: 'hello@acid.7prism.com'
            },
            batch: ['src/templates/partials']
        }))
        .pipe(rename(function (filename) {
            filename.extname = '.html'
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('css', function () {
    return gulp.src('src/css/style.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/css'));
});

gulp.task('js', function () {
    return gulp.src('src/js/script.js')
        .pipe(uglify())
        .pipe(rename(function (filename) {
            filename.extname = '.min.js'
        }))
        .pipe(gulp.dest('src/js'));
});

gulp.task('watch', function () {
    gulp.watch(['src/templates/**/*.hbs'], gulp.series('html'));
    gulp.watch(['src/css/style.less'], gulp.series('css'));
    gulp.watch(['src/js/script.js'], gulp.series('js'));
});

gulp.task('server', function () {
    gulp.src('.').pipe(webserver({}));
});

gulp.task('default', gulp.series('html', 'css', 'js', gulp.parallel('watch', 'server')));
