const express = require('express');
const app = express();
const userRoutes = require('./routes/user-routes');
const cookieparser = require('cookie-parser');
const bodyParser = require('body-parser');
const connectedDB =  require('./config/db');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT;

app.use(cors({ origin: 'https://squid-frontend.onrender.com',credentials: true}));



app.use(express.json());
app.use(cookieparser());
app.use(bodyParser.urlencoded({extended:true}))



app.use("/api/v1",userRoutes);

app.listen(port,function(){
    console.log(`server is listening at ${port}`);
})