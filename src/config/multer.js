import multer from "multer";
import path from 'node:path'

const __dirname = import.meta.dirname

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        
        const dir = path.join(__dirname,'../uploads')
        cb(null,dir)
    },
    filename: (req,file,cb) =>{
        const {name} = req.body
        
        cb(null, (name ? name : Date.now()) + path.extname(file.originalname))
    }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(new Error('only PNG, JPEG and JPG are allowed.'), false);
  }
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fieldSize: 10 * 1024 * 1024
    }
})

export default upload;