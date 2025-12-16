import mongoose from "mongoose";
import GameSchema from "../schema/game.schema.js";

const GameModel = mongoose.model("Game", GameSchema);

export function createGame(game) {
    return GameModel.create(game);
}

export function getAllGames() {
    return GameModel.find().exec();
}

export function findGameById(id) {
    return GameModel.findById(id).exec();
}

export function deleteGame(id) {
    return GameModel.findByIdAndDelete(id).exec();
}

export function markGameCompleted(gameId, username) {
    return GameModel.findByIdAndUpdate(
        gameId,
        { $addToSet: { completedBy: username } },
        { new: true }
    ).exec();
}

export default GameModel;