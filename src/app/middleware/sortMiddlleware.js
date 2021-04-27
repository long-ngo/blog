module.exports = function (req, res, next) {
    res.locals._sort = {
        type: 'default'
    }
    
    if (req.query.hasOwnProperty('_sort')) {
        Object.assign(res.locals._sort, {
            collumn: req.query.collumn,
            type: req.query.type
        })
    }
    
    next();
}