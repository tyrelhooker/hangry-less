//Controller for querying the User collection in MongoDB
const db = require("../models");

module.exports = {
  //gets every document in the collection (every user)
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //gets only one user by their associated firebaseId
  findById: function(req, res) {
    db.User
      .findOne({firebaseId: req.params.id})
      .then(dbModel => {
        return res.json(dbModel)}
      )
      .catch(err => res.status(422).json(err));
  },
  //adds a new user to the collection
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //updates/changes a users associated recipes
  update: function(req, res) {
    db.User
      .findOneAndUpdate({firebaseId: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};