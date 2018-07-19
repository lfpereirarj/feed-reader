const Feed = require('./feed.js')
const _ = require('lodash')

Feed.methods(['get','post', 'put', 'delete'])
Feed.updateOptions({new: true, runValidators: true})

Feed.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next){
    const bundle = res.locals.bundle;

    if(bundle.errors){
        var errors = parseErrors(bundle.errors);
        res.status(500).json({errors})
    } else {
        next()
    }
}

function parseErrors(nodeRestFulErrors){
    const errors = [];

    _.forIn(nodeRestFulErrors, error => errors.push(error.message))

    return errors;
}

Feed.route('count', function(req, res, next){
    Feed.count(function(error, value){
        if(error){
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = Feed