import express from 'express';
import { createGame, getAllGames, findGameById, deleteGame, markGameCompleted } from '../model/game.model.js';

const router = express.Router();

router.get('/', async function(req, res) {
    const games = await getAllGames();
    res.json(games);
});

router.post('/', async function(req, res) {
    const game = await createGame(req.body);
    res.json(game);
});

router.get('/:gameId', async function(req, res) {
    const game = await findGameById(req.params.gameId);
    res.json(game);
});

router.delete('/:gameId', async function(req, res) {
    await deleteGame(req.params.gameId);
    res.json({ success: true });
});

router.put('/:gameId', async function(req, res) {
    const { username } = req.body;
    const game = await markGameCompleted(req.params.gameId, username);
    res.json(game);
});

export default router;