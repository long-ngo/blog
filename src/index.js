const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes/mainRoute');
const db = require('./config/db');

//connect to DB
db.connect();

//static file
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(
    express.urlencoded({
        extended: true,
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
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
