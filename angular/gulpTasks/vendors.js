const gulp = require('gulp')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('vendors', ['vendors.css', 'vendors.js'])

gulp.task('vendors.css', () => {
    return gulp.src([
        'node_modules/angular-toastr/dist/angular-toastr.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
    ])
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concat('vendors.min.css'))
    .pipe(gulp.dest('public/assets/css'))
})

gulp.task('vendors.js', () => {
    return gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-resource/angular-resource.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/bootstrap.min.js',
        'node_modules/popper/dist/popper.min.js',
    ])
    .pipe(uglify())
    .pipe(concat('vendors.min.js'))
    .pipe(gulp.dest('public/assets/js'))
})