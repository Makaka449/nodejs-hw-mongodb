// src/routers/auth.js
const { loginUser } = require('../controllers/auth');
const { validateLogin } = require('../middlewares/validate');

router.post('/login', validateLogin, loginUser);
