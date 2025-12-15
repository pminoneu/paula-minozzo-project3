import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import path from 'path';

// Import API routes
import userApi from './backend/api/user.api.js';
import gameApi from './backend/api/game.api.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const MONGODB_URL = 'mongodb://localhost:27017/sudoku-game';
mongoose.connect(MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));
db.once('open', () => console.log('✅ Connected to MongoDB'));

app.use('/api/user', userApi);
app.use('/api/sudoku', gameApi);

const frontend_dir = path.join(path.resolve(), 'dist');
app.use(express.static(frontend_dir));
app.get('*', function (req, res) {
    res.sendFile(path.join(frontend_dir, "index.html"));
});

// Start server
app.listen(8000, function() {
    console.log("🚀 Server running on http://localhost:8000");
});