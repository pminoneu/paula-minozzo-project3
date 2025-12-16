import express from 'express';
import { createNewUser, findUserByUsername } from '../model/user.model.js';


const router = express.Router();

router.post('/register', async function(req, res) {
    const { username, password } = req.body;
    const user = await createNewUser({ username, password });
    res.cookie('username', username);
    res.json({ success: true, username });
});

router.post('/login', async function(req, res) {
    const { username, password } = req.body;
    const user = await findUserByUsername(username);
    if (user && user.password === password) {
        res.cookie('username', username);
        res.json({ success: true, username });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

router.get('/isLoggedIn', async function(req, res) {
    const username = req.cookies.username;
    res.json({ loggedIn: !!username, username });
});

router.delete('/logout', async function(req, res) {
    res.clearCookie('username');
    res.json({ success: true });
});

export default router;