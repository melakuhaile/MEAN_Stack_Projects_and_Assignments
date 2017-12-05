const express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
path = require('path'),
app = express();

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/quoting_dojo');

const quoteSchema = new mongoose.Schema({
name: {type:String, required: true, minlength: 4},
quote: {type:String, required: true, maxlength: 100, minlength:10}},
{timestamps: true}
);


const Quote = mongoose.model('quotes', quoteSchema);

// Point server to views
app.set('views', path.join(__dirname, 'views'));
// We're using ejs as our view engine
app.set('view engine', 'ejs');

// Here are our routes!
app.get('/', function(req, res) {
res.render('welcome');
});

app.get('/quotes', function(req, res) {
// Logic to grab all quotes and pass into the rendered view

Quote.find({}, function(err, quotes) {
if (err) { console.log(err); }
res.render('quotes', { quotes: quotes });
});
});

app.post('/quotes', function(req, res) {
var quote = new Quote(req.body);
quote.save(function(err){
    if(err){
        res.render('welcome',{errors: quote.errors})
    }
    else{
        res.redirect('/quotes')
    }
});

});
// END OF ROUTING...

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});