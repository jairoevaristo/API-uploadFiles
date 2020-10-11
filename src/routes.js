const { Router } = require('express');
const multer = require('multer');

const multerConfig = require('./config/multerConfig');

const router = Router();

router.post('/file', multer(multerConfig).single('file'), (req, res) => {
    console.log(req.file);
    res.send('Hello Multer');
})

module.exports = router;
