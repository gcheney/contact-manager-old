'use strict';

var gulp        = require('gulp'),
    open        = require('gulp-open'),
    livereload  = require('gulp-livereload'),
    notify      = require('gulp-notify'),
    nodemon     = require('gulp-nodemon'),
    browserify  = require('browserify'),
    reactify    = require('reactify'),
    source      = require('vinyl-source-stream'),
    concat      = require('gulp-concat'),
    imagemin    = require('gulp-imagemin'),
    eslint      = require('gulp-eslint');    

var config = {
    port: 3000,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css : [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        images: './src/images/*',
        favicon: './src/favicon.ico',
        dist: './dist',
        mainJs: './src/main.js'
    }
}

gulp.task('open', function() {
    gulp.src('dist/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(livereload());
});

gulp.task('js', function() {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(livereload());
});

gulp.task('css', function() {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/styles'));
});

gulp.task('images', function() {
    gulp.src(config.paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(livereload());

    //serve favcion
    gulp.src(config.paths.favicon)
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('eslint', function(){
   return gulp.src(config.paths.js)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'eslint']);
});

gulp.task('serve', ['html', 'js', 'css', 'images', 'eslint', 'open', 'watch'], function() {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: config.port
        },
        ignore: ['./node_modules/**']
    })
    .on('start', function () {
        notify('Starting server...');
    })
    .on('restart', function() {
        notify('Restarting server...');
    });
});

gulp.task('default', ['serve']);
