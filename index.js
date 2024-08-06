const  express = require('express');
const app = express();

const loggMiddleware = require('./middlerwares/logMiddleware')
app.use(loggMiddleware);

app.use(require('./middlerwares/errorMiddleware'));
require('dotenv').config();
const port = process.env.PORT || 3000;

const  {dbConnection} = require('./config/dbconnection');
dbConnection();

const morgan = require('morgan');

require ('express-async-errors')
app.use(express.json());
app.use(morgan('dev'));



app.get('/', (_, res) => {
    res.send('Hello World!');
    })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 

});

