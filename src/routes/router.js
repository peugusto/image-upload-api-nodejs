import express from 'express'
import controller from '../controllers/controller.js'
import fileValidation from '../middlewares/fileValidation.js'
import checkFile from '../middlewares/isExistAFile.js'
import uploadMulter from '../middlewares/uploadMulter.js'


const router = express.Router()


router.post('/image',uploadMulter,checkFile,fileValidation,controller.create)

export default router