import { Schema } from 'mongoose';

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gamesWon: { type: Number, default: 0 },


},{ collection: "user_data" }

);

export default UserSchema;