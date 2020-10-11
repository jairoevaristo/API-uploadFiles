const File = require('../models/File');

async function Created(req ,res) {
    try {
        const { originalname: name, size, filename: key } = req.file;
        const file = await File.create({
            name,
            size,
            key,
            url: '',
        });

        return res.status(201).json({ file });

    } catch(err) {
        return res.status(400).json({ error: err });
    }
};

async function List(req, res) {
    try {
        const file = await File.find({});
        return res.status(200).json({ data: file });
    } catch(err) {
        return res.status(400).json({ error: err });
    }
};

async function Delete(req, res) {
    try {
        const { id } = req.params;
        const file = await File.findById(id);

        file.remove();
        return res.send();

    } catch(err) {
        return res.status(400).json({ error: err });
    }
}

module.exports = {
    Created,
    List,
    Delete,
};