const gulp = require("gulp");
const rename = require("gulp-rename");
const svgstore = require("gulp-svgstore");

// gulp.task("sprite", () => {
//   return gulp.src("src/assets/img/icons/{icon-*}.svg")
//     .pipe(svgstore({inlineSvg: true}))
//     .pipe(rename("sprite.svg"))
//     .pipe(gulp.dest("src/assets/img/sprite"));  
// });


const sprite = () => {
  return gulp.src("src/img/icon/**/*.svg")
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("src/img/sprite"));
}

module.exports.sprite = sprite;