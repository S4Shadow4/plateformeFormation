const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'files');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extensionsArray = file.mimetype.split('/');
    const extension = extensionsArray[extensionsArray.length - 1];
    const myfileName = name + Date.now() + '_' + extension;
    callback(null, myfileName);
  },
});

module.exports = multer({ storage }).single('file');
