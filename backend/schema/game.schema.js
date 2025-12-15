import { Schema } from "mongoose";
const GameSchema = new Schema(
  {
    name: { type: String, required: true },
    difficulty : { type: String, required: true },
    board: {type: Array, required: true },
    solution: {type: Array, required: true },
    timeTaken: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "UserModel", required: true },
  },
  { collection: "game_data" }
);

export default GameSchema;