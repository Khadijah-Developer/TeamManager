const PlayerController = require('../controllers/player.controller');

module.exports = app => {
  app.get("/api/players/", PlayerController.findAllPlayers);
  app.get("/api/player/:id", PlayerController.findOneSinglePlayer);
  app.put("/api/player/update/:id", PlayerController.updateExistingPlayer);
  app.post("/api/player/new", PlayerController.createNewPlayer);
  app.delete("/api/player/delete/:id", PlayerController.deleteAnExistingPlayers);
};