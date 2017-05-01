'use strict';

// Globals
const gulp 			= require('gulp');
const plumber		= require('gulp-plumber');
const imagemin 		= require('gulp-imagemin');
const autoprefixer 	= require('gulp-autoprefixer');
const changed 		= require('gulp-changed');
const concat 		= require('gulp-concat');
const rename 		= require('gulp-rename');
const sass 			= require('gulp-sass');
const uglify		= require('gulp-uglify');
const watch			= require('gulp-watch');

// Globs
var globs = {};

globs.sassPaths = [
	'assets/scss/**/*.scss'
];
globs.jsPaths = [
	'assets/js/modules/**/*.js',
	'assets/js/app.js'
];
globs.imgPaths = [
	'assets/images/**/*'
];
globs.includeSassPaths = [
	'bower_components/foundation-sites/scss'
];

// Destinations / Endpoints
const CSSDEST = 'assets/css'; // Going to theme root as style.css
const JSDEST = 'assets/js/build';
const IMGDEST = 'assets/img';

/**
 * Run: gulp sass
 * Compiles SCSS files in CSS
 */
gulp.task('sass', () => {
	gulp.src(globs.sassPaths)
		.pipe(plumber())
		.pipe(concat('site.scss'))
		.pipe(sass({
			//includePaths: globs.includeSassPaths,
			//outputStyle: 'compressed'
		}))
		.pipe(autoprefixer({
			browsers: ['last 3 versions', 'ie >= 9']
		}))
		.pipe(gulp.dest(CSSDEST));
});

/**
 * Run: gulp scripts
 * Concatenates and Minifies JavaScript files
 */
gulp.task('scripts', () => {
	gulp.src(globs.jsPaths)
	.pipe(plumber())
	.pipe(concat('app.js'))
	.pipe(gulp.dest(JSDEST))
	.pipe(uglify())
	.pipe(rename({ extname: '.min.js' }))
	.pipe(gulp.dest(JSDEST));
});

/**
 * Run: gulp images
 * Optimize Images
 */
gulp.task('images', () => {
	gulp.src(globs.imgPaths, {cwd: '.'})
	.pipe(changed('assets/img'))
	.pipe(plumber())
	.pipe(imagemin({
		progressive: true,
		interlaced: true,
		svgoPlugins: [{removeViewBox: false}]
	}))
	.pipe(gulp.dest(IMGDEST));
});

/**
 * Run: gulp
 * Default Tasks & Watchers
 */
gulp.task('default', ['sass', 'scripts'], () => {
	gulp.watch(globs.sassPaths, ['sass']);
	gulp.watch(globs.jsPaths, ['scripts']);
});

gulp.watch(globs.imgPaths, () => {
	gulp.start('images');
});