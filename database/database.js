var mongoUrl = 'mongodb://localhost:27017/testdb';
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true });

mongoose.connect(mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => {
    console.log('DB Connected!')
})
.catch(err => {
    console.log("Error");
});