const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
//IMPORT MONGODB 
const config = require('./DB');
//IMPORT SERVER ROUTER
const ServerPorterRouter = require('./routes/ServerPortRouter');

//CONNECT NODE JS APP TO USE DB
mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('can not connect to the database' + err)
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/serverport', ServerPorterRouter);

app.listen(PORT, function() {
    console.log('Server is listening on port: ', PORT);
})