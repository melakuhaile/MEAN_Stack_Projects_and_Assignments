var mongoose = require('mongoose');
var Rabbit = mongoose.model('Rabbit');

module.exports = {
showAll: function(req, res) {
    Rabbit.find({}, function(err, rabbits){
      if(err){
        console.log("Something went wrong");
      }
      else{
        console.log("found rabbits successfully");
        console.log(rabbits);
        res.render('index', {rabbits:rabbits});
      }
    });
  }

Create: function(req, res){
    var rabbit = new Rabbit({name: req.body.name, age: req.body.age});
    console.log(rabbit);
    rabbit.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
      } 
      else {
        res.redirect('/');
      }
    });
  }
Edit: function(req, res){
  Rabbit.findOne({_id:req.params.id}, function(err, rabbit){
        if(err){
          console.log("rabbit/:id/edit error ", err);
        }
        else{
          res.render('edit',{rabbit:rabbit});
        }
    });
  }
  

Update:function(req,){
  Rabbit.findOne({_id:req.params.id}, function(err, rabbit){
      rabbit.name = req.body.name;
      rabbit.age = req.body.age;
      console.log(rabbit.name, " is the new name");
      console.log(rabbit.age, " is the new age");
      rabbit.save(function(err) {
        if(err) {
          console.log('something went wrong');
        }
        else { // else console.log that we did well and then redirect to the root route
          console.log(rabbit);
          res.redirect('/');
        }
      });
    }
    

Destroy: function(req,res){
  Rabbit.remove({_id:req.params.id}, function(err, rabbit){
    if(err){
      console.log("rabbits/:id/destroy error ", err);
    }
    else{
      console.log("RABBIT DELETED OMG ", req.params.id);
      res.redirect('/');
    }
  });
}


Find a rabbit by Id:function(req, res){
  Rabbit.findOne({_id:req.params.id}, function(err, rabbit){
    if(err){
      console.log("rabbit/:id error ", err);
    }
    else{
      res.render('show',{rabbit:rabbit});
    }
  })
}
}