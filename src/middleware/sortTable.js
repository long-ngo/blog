module.exports = function (req, res, next) {
    res.locals._sort = {
        type: 'default'
    }
    
    if (req.query.hasOwnProperty('_sort')) {
        res.locals._sort.collumn = req.query.collumn
        res.locals._sort.type = req.query.type
    }

    next();
}