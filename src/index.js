const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

const route = require('./routes/main');
const db = require('./config/db');
const sortTable = require('./middleware/sortTable');
const { SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG } = require('constants');

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
        helpers: {
            sum: (a, b) => a + b,
            sortTable: (col, sort) => {
                const types = {
                    default: 'desc',
                    desc: 'asc',
                    asc: 'desc'
                }

                const icons = {
                    default: 'fa-sort',
                    asc: 'fa-sort-amount-up',
                    desc: 'fa-sort-amount-down'
                }

                let type = (col === sort.collumn) ? sort.type : 'default';

                return `<a href="?_sort&collumn=${col}&type=${types[type]}">
                    <i class="fas ${icons[type]}"></i>
                    </a>`;
            }
        }
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
