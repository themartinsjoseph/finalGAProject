//Routes & Vars
var express = require('express');
var tracks = require('../models/track');
var router = express.Router();

//Routes
router.route('/')
  //shows track
  .get(function(req, res){
    tracks.find(function(err, tracks){
      if (err) return res.status(500).send(err);
      return res.send(tracks);
    });
  })
  //create a new track
  .post(function(req, res){
    console.log('this post route is being reached');
    tracks.create(req.body, function(err, tracks){
      if (err) return res.status(500).send(err);
      return res.send(tracks);
    });
  });

router.route('/:id')
   //display a specific track
   .get(function(req, res){
      console.log('the id page is working');
      tracks.findById(req.params.id, function(err, tracks){
        if (err)return res.status(500).send(err);
        console.log('oh hello there!')
        return res.send(tracks);
      });
    });

//Listener
module.exports = router;