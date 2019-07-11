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
  postAdopteeCreate
} = require('../controllers/profileControllers')
const { catchErrors, checkRole } = require('../middlewares/handlers')
const { isLoggedIn } = require('../middlewares/auth')

router.get('/signup', getSingUp)
router.post('/signup', catchErrors(postSignUp))
router.get('/login', getLogin)
router.post('/login', postLogin)
router.get('/logout', getlogOut)
router.get('/profile', isLoggedIn, getProfile)
router.get('/adopter-create', isLoggedIn, checkRole('adopter'), getAdopterCreate)
router.post('/adopter-create', uploadCloud.array('photo'), catchErrors(postAdopterCreate))
router.get('/adopter-profile', isLoggedIn, checkRole('adopter'), getAdopterProfile)
router.get('/adopter-profile/edit/:id', isLoggedIn, getAdopterEdit)
router.post('/adopter-profile/edit/:id', uploadCloud.array('photo'), postAdopterEdit)
//router.get('/delete-adopter/:id')
router.get('/pet-create', isLoggedIn, checkRole('adoptee'), getAdopteeCreate)
router.post('/pet-create', uploadCloud.array('photo'), catchErrors(postAdopteeCreate))

module.exports = router
