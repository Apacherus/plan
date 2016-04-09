/**
 * Created by ozver on 09.04.2016.
 */
module.exports = {
    js: {
        dest: "www/js/",
        src: "src/js/app.js",
        watch: "src/js/**/*.js"
    },
    scss: {
        dest: "www/css/",
        src: "src/scss/**/*.scss",
        watch: "src/scss/**/*.scss"
    },
    html: {
        dest: "www/",
        src: "src/**/*.html",
        watch: "src/**/*.html"
    },
    images: {
        dest: "www/img/",
        src: "src/img/**/*.*",
        watch: "src/img/**/*.*"
    },
    libs: {
        dest: "www/libs/",
        src: "src/libs/**/*.*"
    }
};