var express = require('express')
app = express();
port = process.env.PORT || 3000;
mongoose = require('mongoose');
Messages = require('./models/msgModel');
bodyParser = require('body-parser');
var routes = require('./routes/msgRoutes')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/msgdb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(port);

app.get('/', (req, res) => {
    console.log(req);
    res.json({hello: 'world'});
})

console.log('Message RESTful API server started on: '+port);