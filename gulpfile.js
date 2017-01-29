'use strict';

var gulp        = require('gulp'),
    open        = require('gulp-open'),
    livereload  = require('gulp-livereload'),
    notify      = require('gulp-notify'),
    nodemon     = require('gulp-nodemon');

var config = {
    port: 3000,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
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

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(config.paths.html, ['html'])
});

gulp.task('serve', ['html', 'open', 'watch'], function() {
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
