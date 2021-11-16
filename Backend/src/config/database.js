const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin:admin@cluster0.4rurk.mongodb.net/todo?retryWrites=true&w=majority';
//const uri = 'mongodb+srv://admin:admin@cluster0.4rurk.mongodb.net/Cluster0?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

mongoose.connection.on('error', (error) => {
    console.log("Erro: ", error.message);
});

mongoose.connection.on('connected', (err, res) => {
    console.log("Mongoose is connected");
});

module.exports = mongoose;