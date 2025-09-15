import express from 'express';
import { uploadexcelfile } from '../controllers/uploadcontroller.js';
import multer from 'multer';

const uploadRouter=express.Router()

const storage=multer.memoryStorage()

const upload=multer({storage:storage})

uploadRouter.post('/file',upload.single('file'),uploadexcelfile)


export default uploadRouter;