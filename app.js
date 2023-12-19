// const express = require("express");
// const bodyParser = require('body-parser');
// const studentRouter = require("./router/studentRouter");

// const app = express();

// // Middleware for parsing JSON
// app.use(bodyParser.json());

// app.use("/students", studentRouter);

// app.listen(3000, () => {
//     console.log('Server is started on 3000...');
// });

const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors'); 
const studentRouter = require("./router/studentRouter");

const app = express();

// Middleware for enabling CORS
app.use(cors());

// Middleware for parsing JSON
app.use(bodyParser.json());

app.use("/students", studentRouter);

app.listen(3001, () => {
    console.log('Server is started on 3001...');
});