import { fileTypeFromBuffer } from "file-type";
import fs from "fs";


 const fileValidation = async (req, res, next) => {
  try {

    const filePath = req.file.path;
    const buffer = fs.readFileSync(filePath);
    const type = await fileTypeFromBuffer(buffer);
    const allowedTypes = ["image/jpeg", "image/png","image/jpg"];

    if (!type || !allowedTypes.includes(type.mime)){
      fs.unlinkSync(filePath)
      return next(res.status(400).json({message:"invalid format"}));
    }


    return next();

  } catch (error) {
    if(filePath){
      fs.unlinkSync(filePath)
    } 
     return res.status(500).json({message:"error internal"})
  }
};

export default fileValidation
