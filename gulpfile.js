var gulp = require('gulp');
var gutil = require('gulp-util');

// LESS
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');

gulp.task('default', ['hello', 'build-html', 'build-less', 'watch']);

gulp.task('hello', function() {
	return gutil.log('🙈🙈🙈  Gulp is running! 🙈🙈🙈')
});

gulp.task('build-html', function() {
	gulp.src('source/*.html').pipe(gulp.dest('docs'));
});

gulp.task('build-less', function() {
	return gulp.src('./source/less/style.less')
		.pipe(less({
			plugins: [require('less-plugin-glob')]
		}))
		.pipe(autoprefixer({
			browsers: ['last 4 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./docs/assets/css/'));
});

gulp.task('watch', function() {
	gulp.watch('source/less/**/*.less', ['build-less']);
	gulp.watch('source/*.html', ['build-html']);

});
