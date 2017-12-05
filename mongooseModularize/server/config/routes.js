//
var rabbits = require('../controllers/Rabbit.js');
module.exports = function(app){
app.get('/', function(req, res) {
    res.render('index');
    });
//GET route 3 for NEW rabbit form, new.ejs
app.get('/rabbit/new', function(req, res){
  res.render('new');
});

//POST route 4 to add a new rabbit.
app.post('/rabbits', function(req, res) {
      res.redirect('/');
  });
//GET route 5 for rabbit by id, show.ejs
app.get('/rabbit/:id/edit', function(req, res){
      res.render('edit',{rabbit:rabbit});
  });

//POST route 6 to add a new rabbit.
app.post('/rabbits/:id/update', function(req, res) {
        res.redirect('/');
    });

//POST route 7 to delete rabbit by ID
app.post('/rabbits/:id/destroy', function(req, res){
      res.redirect('/');
  })

app.get('/rabbit/:id', function(req, res){
      res.render('show',{rabbit:rabbit});
});
};