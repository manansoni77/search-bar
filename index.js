const express = require('express');
const mongoose = require('mongoose');
const { PORT, mongouri } = require('./config')
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require('./routes/api/user')
const path = require('path')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const static_path = path.join(__dirname, "client");;
console.log(static_path)
app.use(express.static(static_path));
app.use('/api/user', userRoutes)

mongoose.connect(mongouri, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
})
    .then(() => console.log('MongoDB database connected...'))
    .catch((err) => console.log(err))



app.listen(PORT, () => {
    console.log('Now listening on port ' + PORT);
})

// app.get('/', function (req, res) {
//     res.send('GET REQUEST');
// })

// require('./routes/api/user')(app);


// const db = require("./models")

// db.mongoose
//     .connect(db.url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log("Connected to the database!");
//         // databasesList = await client.db().admin().listDatabases();
//     })
//     .catch(err => {
//         console.log("Cannot connect to the database!", err);
//         process.exit();
//     });
