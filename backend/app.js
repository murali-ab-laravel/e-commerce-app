const express = require('express');
const app = express();

const path = require('path');

const rootDir = require('./util/path');
// const mongoConnect = require('./util/database').mongoConnect;

const mongoose = require('mongoose');

const CONNECTION_URL = "mongodb+srv://app_v1_ecommerce:DJETVE4YPsJhjJKo@srls.4ux6v.mongodb.net/app_v1_ecommerce?retryWrites=true&w=majority";


const port = 3000;

const bodyParse = require('body-parser');
const cors = require('cors');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

const OrgRoutes = require('./routes/organizations/organizationRoutes');

app.use(OrgRoutes);

// app.use('/', (req, res, next) => {
//     res.send("<h1>Hi, This is my first backend APP</h1>");
// });


// mongoConnect(() => {
//     app.listen(port);
// })

mongoose.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true }).then(
    (result) => {
        app.listen(port);
        console.log(`Connected!`);
    }
).catch(err => console.log(err));