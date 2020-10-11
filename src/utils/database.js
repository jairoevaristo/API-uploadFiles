const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/uploads-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,

});

mongoose.Promise = global.Promise;