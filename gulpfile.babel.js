'use strict';
import gulp       from 'gulp';
import plumber    from 'gulp-plumber';
import notify     from 'gulp-notify';
import sourcemaps from 'gulp-sourcemaps';
import rename     from 'gulp-rename';
import del        from 'del';

// import CSS dependencies
import minifyCSS   from 'gulp-minify-css';
import prefixer    from 'gulp-autoprefixer';
import compass     from 'gulp-compass';

const paths = {
    allscss: './app/scss/**/*.scss',
    html: './public/index.html',
    basescss: './app/scss/main.scss',
    assets: './public/assets'
};

gulp.task('clean', function() {
    del(['./public/assets/main.css', './public/assets/style.min.css'], function(err) {
        if (err) { console.log(`Error while deleting: ${err}`); }
    });
});

gulp.task('css', function() {
    gulp.src(paths.basescss)
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(sourcemaps.init())
        .pipe(compass({
            sass: 'app/scss',
            css: paths.assets
        }))
        .pipe(prefixer(['last 2 versions']))
        .pipe(gulp.dest(paths.assets))
        .pipe(minifyCSS())
        .pipe(rename({
            basename: 'style',
            suffix: '.min',
            extname: '.css'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(notify({message: 'Generated file: <%= file.relative %>'}))
        .pipe(gulp.dest(paths.assets));
});

gulp.task('watch', function() {
    gulp.watch(paths.allscss, ['css']);
});

gulp.task('default', ['clean','css', 'watch']);
