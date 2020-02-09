const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const router = express.Router();

//Routes
let users = require('./routes/user.route');

//Models
let User = require('./models/user.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://root:root@127.0.0.1:27017/Tamoios_qualidade?authSource=admin', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use('/users', users);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
