const mongoose = require('mongoose');

//rD1hRoFM9b18CZSH

const password = 'rD1hRoFM9b18CZSH';
const dbname = 'digiventures';
const url = `mongodb+srv://test:${ password }@cluster0.vwgjk.mongodb.net/${dbname}?retryWrites=true&w=majority`



module.exports = ()=> mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });

