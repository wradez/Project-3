const db = require("../models")

module.exports = {

    all: function(req,res){
        db.//database name
        .find(req.query)
        .sort({})
        .then(db//database name => res.json(db//datbase name))
        .catch(err => res.status(422).json)
    },
        
    create: function(req,res){
        db.//the database name goes here
        .create(req.body)
        .then(db//database name)
        .catcher(err => res.status(422).json(err));
    },

    update: function(req,res){
        db.//the database name goes here
        .findOneAndUpdate({_id:req.params.id}, req.body)
        .then(db//database name => res.json(db//database name goes here))
        .catcher(err => res.status(422).json(err));
    },

    remove: function(req,res){
        db.//database name goes here
        .findById({_id: req.params.id})
        .then(db//database name => db//database name.remove())
        .then(db//database name => res.json(db//database name))
        .catch(err => res.status(422).json)
    }
};