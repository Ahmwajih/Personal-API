const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;


require ('express-async-errors')
app.use(express.json());





app.get('/', (req, res) => {
    res.send('Hello World!');
    })

app.listen(port, () => {

    console.log(`Server is running on port ${port}`);
});

