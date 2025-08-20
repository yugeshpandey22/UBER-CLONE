const mongoose = require('mongoose');

function connectTodb() {
    mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true })
        .then(() => console.log('Connected to DB'))
        .catch(err => console.log(err));
}

module.exports = connectTodb;
