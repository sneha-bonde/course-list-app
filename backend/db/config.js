const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/course-list');

mongoose.connect('mongodb://127.0.0.1:27017/course-list',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});