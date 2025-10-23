import express from 'express'
import router from './src/routes/router.js'
import db from './src/config/db.js'
import path from 'node:path'

const app = express()
const __dirname = import.meta.dirname

db();
app.use('/uploads', express.static(path.join(__dirname, "src","uploads")));
app.use('/api',router)

app.listen(3000,() => console.log('server on.'))