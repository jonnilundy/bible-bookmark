var express = require('express')

app = express()

port = process.env.PORT || 3000

mongoose = require('mongoose')

Message = require('./models/msgModel');

bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/msgdb')

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json())

var routes = require('./routes/msgRoutes')

routes(app);

app.listen(port)

app.get('/', (req, res) => {
    console.log(req)
    res.json({hello: 'world'})
})

console.log('Message RESTful API server started on: '+port)