const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/vendors')
require('./gulpTasks/server')

gulp.task('default', () => {
    if(util.env.production){
        sequence('vendors', 'app')
    } else {
        sequence('vendors', 'app', 'server')
    }
})