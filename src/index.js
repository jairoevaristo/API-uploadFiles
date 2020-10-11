const express = require('express');
const router = require('./routes');
const path = require('path');

require('./utils/database');

const app = express();

app.use(express.json());
app.use(router);
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'files')));

app.listen(3333, () => console.log('Server is running at http://localhost:3333'));