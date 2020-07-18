const mongoose = require('mongoose');
module.exports = () => {
    function connect() {
        mongoose.connect('localhost:27017', function(err){
            if(err){
                console.error('Mongo connect error', err);
            }
            console.log('mongodb connected');
        });
    }
    connect();
    mongoose.connection.on('disconnected',connect);
}