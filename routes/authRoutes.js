const router = require('express').Router()
const passport = require('passport')
const { getSingUp, postSignUp, getLogin, postLogin, getProfile, getlogOut } = require('../controllers/authControllers')
const uploadCloud = require('../config/cloudinary')
const {
  getAdopterCreate,
  postAdopterCreate,
  getAdopterProfile,
  postAdopterProfile
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
router.post('/adopter-profile', postAdopterProfile)
module.exports = router
