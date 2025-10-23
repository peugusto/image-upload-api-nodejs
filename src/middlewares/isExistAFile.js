const checkFile = async(req,res,next) =>{

  if (!req.file) {
    return res.status(400).json({ message: 'You need to attach a file.' });
  }
  next();
}

export default checkFile