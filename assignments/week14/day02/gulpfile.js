let gulp = require("gulp");
let htmlmin = require("gulp-htmlmin");

gulp.task("minify", function () {
    return gulp
        .src("src/**/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("build"));
});

gulp.task("default", gulp.series("minify"));