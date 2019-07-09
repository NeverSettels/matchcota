const cloudinary = require('cloudinary')
const couldinaryStorage = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
})
//todo diferent folders
const storage = couldinaryStorage({
  cloudinary,
  folder: 'Matchcota',
  allowedFormats: ['jpg', 'png'],
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})

const uploadCloud = multer({ storage })

module.exports = uploadCloud
