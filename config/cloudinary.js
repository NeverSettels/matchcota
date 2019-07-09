//configure couldinary
const cloudinary = require('cloudinary')
const couldinaryStorage = require('multer-storage-cloudinary')
const multer = require('multer')
/********put in .env and erase */
/* 
CLOUDINARY_NAME=neversettels
CLOUDINARY_KEY=169631485383581
CLOUDINARY_SECRET=3jR38HcUfFwUGS1WiDLg7SazDT0
 */

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
