'use strict';

var gulp        = require('gulp'),
    open        = require('gulp-open'),
    livereload  = require('gulp-livereload'),
    notify      = require('gulp-notify'),
    nodemon     = require('gulp-nodemon'),
    browserify  = require('browserify'),
    reactify    = require('reactify'),
    source      = require('vinyl-source-stream');

var config = {
    port: 3000,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        mainJs: './src/main.js',
        dist: './dist'
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

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
});

gulp.task('serve', ['html', 'js', 'open', 'watch'], function() {
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
