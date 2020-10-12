const express = require('express');
const router = require('./routes');
const path = require('path');

require('./utils/database');

const app = express();

app.use(express.json());
app.use(router);
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'files')));

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));