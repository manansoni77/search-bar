const express = require('express');
const mongoose = require('mongoose');
const { PORT, mongouri } = require('./config')
const bodyParser = require("body-parser");
const userRoutes = require('./routes/api/user')
const path = require('path')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const static_path = path.join(__dirname, "client");
app.use(express.static(static_path));
app.use('/api/user', userRoutes)

mongoose.connect(mongouri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB database connected...'))
    .catch((err) => console.log(err))



app.listen(PORT, () => {
    console.log('Now listening on port ' + PORT);
})

