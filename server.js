var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
var port = '27018';
mongoose.connect('mongodb://localhost:' + port + '/myApp');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we are connected');
});

var usersSchema = mongoose.Schema({
    id: Number,
    name: String,
    username: String,
    email: String,
    address: Object,
    phone: String,
    website: String,
    company: Object
});

var users = mongoose.model('users', usersSchema);

// usersSchema.index({ name: 'text' });

users.find(function(err, users) {
    if (err) return console.log(err);
});

app.get('/users', function(req, res) {
    var obj = req.query;
    console.log(Object.keys(obj).length);

    if (Object.keys(obj).length !== 0) {
        var sortObject = {};
        var sortBy = obj.sortBy;
        var order = obj.order;
        sortObject[sortBy] = order;
        console.log(sortBy, order, sortObject);
        users.find({}, null, { sort: sortObject }, function(err, docs) {
            if (err) return console.error(err);
            res.send(docs);
            return;
        });
    } else {
        users.find({}, function(err, docs) {
            if (err) return console.error(err);
            console.log(docs);
            res.send(docs);
        });

    }


    //    var searchColoumn = "name";
    //    var DataToSearch = "Ervin Howell";
    //    users.find({
    //            "name": {  "$regex": DataToBeSearched
    // },
    //            function(err, docs) {
    //                if (err) return console.error(err);
    //                res.send(docs);
    //                return;
    //            });


    // var sortBy = '';
    // var sortOrder = 1;
    // if (asc) {}
    //     if (desc) {}
    //         if (sortBy) {}
    //             .search({search: sortOrder})
});


app.post('/user', function(req, res) {
    user = new users(req.body);

    user.save(function(err, user) {
        if (err) {
            return console.error(err);
        }
        res.send(user);
    });
});

app.get('/user/:id', function(req, res) {
    users.findOne({
        id: req.params.id
    }, function(err, docs) {
        res.send(docs);
    });
});


app.put('/user/:id', function(req, res) {
    var user = req.body;
    users.where({ 'user.id': req.params.id }).update(user, function(err, docs) {
        if (err) {
            res.send(err);
        } else {
            res.send(docs);
        }
    });
});

app.patch('/user/:id', function(req, res) {
    var user = req.body;

    users.where({ id: req.params.id }).update({ $set: user }, function(err, op) {
        if (err) {
            res.send(err);
        } else {
            res.send(op);
        }
    });
});

app.delete('/user/:id', function(req, res) {
    users.remove({ id: req.params.id }, function(err, user) {
        if (err) {
            res.send('err');
        } else {
            res.send(user);
        }

    });

});





app.listen(8000, function() {
    console.log('Node.js listening on port 8000');
});
