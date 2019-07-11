const router = require('express').Router()
const passport = require('passport')
const { getSingUp, postSignUp, getLogin, postLogin, getProfile, getlogOut } = require('../controllers/authControllers')
const uploadCloud = require('../config/cloudinary')
const {
  getAdopterCreate,
  postAdopterCreate,
  getAdopterProfile,
  postAdopterEdit,
  getAdopterEdit,
  getAdopteeCreate,
  postAdopteeCreate,
  getAdopterPicDelete,
  getAdopterDelete,
  getPetProfile,
  getPetEdit,
  postPetEdit,
  getPetPicDelete,
  getPetDelete
} = require('../controllers/profileControllers')
const { catchErrors, checkRole } = require('../middlewares/handlers')
const { isLoggedIn } = require('../middlewares/auth')

router.get('/signup', getSingUp)
router.post('/signup', catchErrors(postSignUp))
router.get('/login', getLogin)
router.post('/login', postLogin)
router.get('/logout', getlogOut)
router.get('/profile', isLoggedIn, getProfile)
//adopter routes
router.get('/adopter-create', isLoggedIn, checkRole('adopter'), getAdopterCreate)
router.post('/adopter-create', uploadCloud.array('photo'), catchErrors(postAdopterCreate))
router.get('/adopter-profile', isLoggedIn, checkRole('adopter'), getAdopterProfile)
router.get('/adopter-profile/edit/:id', isLoggedIn, getAdopterEdit)
router.post('/adopter-profile/edit/:id', uploadCloud.array('photo'), postAdopterEdit)
router.get('/deleteAdopterPic/:id/:index', getAdopterPicDelete)
router.get('/adopter-profile/edit/:id/delete', getAdopterDelete)
//pet routes
router.get('/pet-create', isLoggedIn, checkRole('adoptee'), getAdopteeCreate)
router.post('/pet-create', uploadCloud.array('photo'), catchErrors(postAdopteeCreate))
router.get('/pet-profile', isLoggedIn, checkRole('adoptee'), getPetProfile)
router.get('/pet-profile/edit/:id', isLoggedIn, getPetEdit)
router.post('/pet-profile/edit/:id', uploadCloud.array('photo'), postPetEdit)
router.get('/deletePetPic/:id/:index', getPetPicDelete)
router.get('/pet-profile/edit/:id/delete', getPetDelete)

module.exports = router
