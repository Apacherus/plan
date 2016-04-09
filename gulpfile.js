/**
 * Created by ozver on 09.04.2016.
 */
const gulp = require("gulp"),
    gutil = require("gulp-util"),
    plumber = require("gulp-plumber"),
    csscomb = require("gulp-csscomb"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    paths = require("./gulp/paths.js"),
    sourcemaps = require('gulp-sourcemaps'),
    shell = require('gulp-shell');


gulp.task("build:css", () => {
    return gulp.src(paths.scss.src)
        .pipe(plumber())
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer({
            browsers: ["last 15 versions"],
            cascade: false
        }))
        .pipe(csscomb())
        .pipe(gulp.dest(paths.scss.dest))
        .pipe(reload({stream: true}));
});

gulp.task("build:html", () => {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest))
        .pipe(reload({stream: true}));
});

gulp.task("build:img", () => {
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest));
});

gulp.task("build:libs", () => {
    return gulp.src(paths.libs.src)
        .pipe(gulp.dest(paths.libs.dest));
});

gulp.task("watch", () => {
    gulp.watch(paths.scss.watch, ["build:css"]);
    gulp.watch(paths.html.watch, ["build:html"]);
    gulp.watch(paths.images.watch, ["build:img"]);
});

gulp.task('run-webpack', shell.task([
    'webpack --progress --colors --watch'
]));

gulp.task("default", [
    "run-webpack",
    "build:libs",
    "build:img",
    "build:html",
    "build:css",
    "watch"
]);