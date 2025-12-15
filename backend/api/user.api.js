import express from 'express';
const router = express.Router();

router.post('/register', async function(req, res) {
    const { username, password } = req.body;
    const user = await createNewUser({ username, password });
    res.cookie('username', username);
    res.json({success: true, user});

})

router.post('/login', async function(req, res) {
const { username, password } = req.body;
const user = await findUserByUsername(username);                
if(user && user.password === password) {
    res.cookie('username', username);
    res.json({success: true, user});
} else {
    res.json({success: false, message: 'Invalid credentials'}); 
})

router.get('/isLoggedIn', async function(req, res) {
    const username = req.cookies.username;
    res.json({ loggedIn: !!username, username });
})

router.delete('/logout', async function(req, res) {
    res.clearCookie('username');
    res.json({ success: true });
})



export default router;