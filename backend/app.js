// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello Worl!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

// // ENV
// require('dotenv').config();
// // DEPENDENCIES
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const port = process.env.PORT || 4500;

// // Static File Service
// app.use(express.static('public'));
// // Body-parser
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Node.js의 native Promise 사용
// mongoose.Promise = global.Promise;

// // CONNECT TO MONGODB SERVER
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('Successfully connected to mongodb'))
//   .catch(e => console.error(e));

// app.listen(port, () => console.log(`Server listening on port ${port}`));

// ENV
require('dotenv').config();
// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4500;

// Static File Service
app.use(express.static('public'));
// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Node의 native Promise 사용
mongoose.Promise = global.Promise;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

// ROUTERS
app.use('/todos', require('./routes/todos'));

app.listen(port, () => console.log(`Server listening on port ${port}`));