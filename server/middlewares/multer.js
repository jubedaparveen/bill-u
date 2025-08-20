const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
     destination: (req, file, cb) => {
          cb(null,  path.join(__dirname, '..' ,'uploadfiles'));
     },
     
     filename: (req, file, cb) => {
          cb(null, Date.now() + Math.floor(Math.random() * 1000) + path.extname(file.originalname));
     }
});


const multerupload = multer({storage}).fields([
     { name: 'thumbnail', maxCount: 1 },
     { name: 'gallery', maxCount: 10},
     { name: 'video', maxCount: 1 },
     { name: 'audio', maxCount: 1 },
     { name: 'document', maxCount: 1 },
     { name: 'other', maxCount: 1 },
]);

module.exports = multerupload;