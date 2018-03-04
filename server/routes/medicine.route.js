var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Medicine=require('../models/medicine.model');

router.get('/', function(req, res, next) {
    Medicine.find(function (err, products) { 
      if (err) return next(err);
      res.json(products);
    }); 
  });

router.post('/', function(req, res, next) {
    Medicine.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    }); 
  });

router.get('/:id', function(req, res, next) {
    Medicine.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

router.put('/:id', function(req, res, next) {
    Medicine.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

router.delete('/:id', function(req, res, next) {
    Medicine.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
module.exports = router;  