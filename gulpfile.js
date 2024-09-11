const path = require('path')
const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css');
const cssWrap = require('gulp-css-wrap');

const customThemeName='.linsy-theme'

gulp.task('css-wrap', function() {
  return gulp.src( path.resolve('./theme/index.css'))
    .pipe(cssWrap({selector:customThemeName}))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});

gulp.task('move-font', function() {
  return gulp.src(['./theme/fonts/**']).pipe(gulp.dest('dist/fonts'));
});


// gulp.task('default',['css-wrap','move-font']);
// 4.0以上需要这样写
gulp.task('default', gulp.series(gulp.parallel('css-wrap', 'move-font')));
