const router = require('express').Router()
const passport = require('passport')
const { catchErrors, checkRole, checkMatch } = require('../middlewares/handlers')
const { isLoggedIn } = require('../middlewares/auth')
const {
  getPets,
  postAcceptPet,
  getHomes,
  postAcceptHome,
  getAdopterMatches,
  getAdopteeMatches,
  getMatch
} = require('../controllers/matchControllers')

router.get('/pets', isLoggedIn, checkRole('adopter'), getPets)
router.get('/acceptPet/:userId/:petId', isLoggedIn, checkMatch(), postAcceptPet)
router.get('/pet-matches', isLoggedIn, checkRole('adoptee'), getAdopteeMatches)

router.get('/homes', isLoggedIn, checkRole('adoptee'), getHomes)
router.get('/acceptHome/:userId/:homeId', isLoggedIn, checkMatch(), postAcceptHome)
router.get('/adopter-matches', isLoggedIn, checkRole('adopter'), getAdopterMatches)

router.get('/matchmake/match/:id', isLoggedIn, getMatch)
module.exports = router
