const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage);
    },
    filename: function(req, file, cb){
        //TODO: mi-cv.pdf mi-foto.png mi-video.mp4
        
        const ext = file.originalname.split(".").pop() //TODO ["name", "png"] pop agarra el último valor del array
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename);
    },
});

//Middleware entre router y el controller

const uploadMiddleware = multer({storage});

module.exports = uploadMiddleware;