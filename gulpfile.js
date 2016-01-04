const 	gulp = require('gulp')
	,	stylus = require('gulp-stylus')
	,	concat = require('gulp-concat')
	// ,	uglify = require('gulp-uglify')
	,	uglifyCss = require('gulp-uglifycss')
	,	ngAnnotate = require('gulp-ng-annotate')
	,	watcher = gulp.watch(['./main/client/**/*.js', './main/client/styles/*.styl', './main/client/**/*.html', './main/server/**/**/*.js'], ['default'])
	,	babel = require('gulp-babel')
	,	htmlmin = require('gulp-htmlmin');

watcher.on('change', function( event ) {
	console.log('File ' + event.path + ' was ' + event.type + ' at ' + new Date() + ' , running tasks...');
});

gulp.task('stylus', function() {
	gulp.src('./main/client/styles/*.styl')
		.pipe(stylus())
		.pipe(uglifyCss())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('./public/styles/'))
});

gulp.task('javascriptClient', function() {
	gulp.src('./main/client/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(ngAnnotate())
		.pipe(concat('client.min.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('./public/scripts/'))
});

gulp.task('html', function() {
	gulp.src('./main/client/features/**/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./public/html/'))
});

gulp.task('javascriptServer', function() {
	gulp.src('./main/server/**/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('./server/'))
});

gulp.task('default', ['stylus', 'javascriptClient', 'javascriptServer', 'html']);