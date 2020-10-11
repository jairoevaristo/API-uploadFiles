const multer = require('multer');
const crypto = require('crypto');
const path = require('path'); 

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'uploads', 'files'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'uploads', 'files'));
        },

        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) {
                    cb(err);
                }
                    const fileName = `${hash.toString('hex')}-${file.originalname}`;

                    cb(null, fileName);
            })
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    filefilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/jpg',
            'image/pjpeg',
            'image/png',
            'image/gif',
        ];

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('invalid file type.'))
        }
    },
};  