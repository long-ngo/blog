const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const route = require('./routes/main');
const db = require('./config/db');
const sortTable = require('./app/middleware/sortMiddlleware');

//connect to DB
db.connect();

//static file
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(express.json());

//http logger
app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
        helpers: require('./helpers/handlebars')
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// override with POST having ?_method=PUT
app.use(methodOverride('_method'));

//middleware
app.use(sortTable);

//routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
