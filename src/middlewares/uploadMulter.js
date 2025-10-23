import upload from "../config/multer.js";

export default function uploadMulter(req,res,next) {

    upload.single('file')(req,res,err =>{
        if (err) return res.status(400).json({message:err.message})

        next()
    });
    
}


