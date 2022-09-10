const Player = require("../models/player.model") // Player model

// return all Players
module.exports.findAllPlayers = (req, res) => {
  //sort descending
  // var mySort = { name: -1 };
   //sort ascending
  var mySort = { name: 1 };
  //.collation({locale: "en" }) dealing with 'A' and 'a' as same language and order
Player.find({}).collation({locale: "en" }).sort(mySort)
    .then(allPlayers => res.json({ players: allPlayers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// return one Player
module.exports.findOneSinglePlayer = (req, res) => {
	Player.findOne({ _id: req.params.id })
		.then(oneSinglePlayer => res.json({ player: oneSinglePlayer }))
		.catch(err => res.status(400).json( err));
};

//create a new Player
module.exports.createNewPlayer = (req, res) => {
  Player.create(req.body)
    .then(newlyCreatedPlayer => res.json({ player: newlyCreatedPlayer }))
    .catch(err => res.status(400).json( err ));
};

//update exists Player
module.exports.updateExistingPlayer = (req, res) => {
  Player.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators:true  })
    .then(updatedPlayer => res.json({ player: updatedPlayer }))
    .catch(err => res.status(400).json( err ));
};

//delete a Player
module.exports.deleteAnExistingPlayers = (req, res) => {
  Player.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};