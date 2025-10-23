import mongoose, { mongo } from "mongoose";

const imageSchema =  mongoose.Schema({
    name:{type:String,require:true},
    src: {type: String,require:true}
})

const Images = mongoose.model('Image',imageSchema);

export default Images;