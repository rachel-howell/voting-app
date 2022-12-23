const express = require('express');
const cors = require('cors')
const PORT = 8000
require('dotenv').config()
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors({
    origin: 'http://localhost:3000', credentials:true
}));
// middleware sends post data by adding it in

app.use(express.json());                           /*  allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* allows JSON Objects with strings and arrays*/

// middleware that adds cookies to the request
app.use(cookieParser())

require('./config/mongoose.config');    /* This is new */
require('./routes/polling.route')(app);   

app.listen(PORT, () => {
    console.log("Listening at Port 8000")
})



