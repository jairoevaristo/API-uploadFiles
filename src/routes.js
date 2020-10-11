const { Router } = require('express');
const multer = require('multer');

const router = Router();

const multerConfig = require('./config/multerConfig');
const fileController = require('./controllers/fileController');

router.get('/file', fileController.List);

router.post('/file', multer(multerConfig).single('file'), fileController.Created);

router.delete('/file/:id', fileController.Delete);

module.exports = router;
