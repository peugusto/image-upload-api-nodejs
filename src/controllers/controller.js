
import Images from '../models/Picture.js'


const controller = {
    create: async (req,res) =>{
        try {
        const {name} = req.body
        const file = req.file
        const publicPath = `/uploads/${file.filename}`

        const image = new Images({name,src:publicPath})
        await image.save()
        
        res.status(200).json({image,message:'image saved'})
            
        } catch (error) {
            return res.status(500).json({message: "error"})
        }
    }
}

export default controller;