const express = require('express');

app = express();
require('colors')
require('dotenv').config();
require('./db/config');
const cors = require("cors");
const errorHandler = require('./middlewares/errorhandler');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/api/auth', require('./routes/authroute'));
app.use('/api/forget-password', require('./routes/forgetpasswordroute'))
app.use('/api/admin', require('./routes/adminroute'));
app.use('/api/superadmin', require('./routes/superadminroutes'));
app.use('/api/shops' , require("./routes/shop/shopRoutes"))

//error Handler middleware
app.use(errorHandler)

app.listen(process.env.PORT, () => {
 console.log(`server is running on port ${process.env.PORT}`.bgGreen.black.bold);
})