const passport = require('../config/passport')
const User = require('../models/User')
const Adoptee = require('../models/Adoptee')
const Adopter = require('../models/Adopter')

exports.getSingUp = (req, res, next) => {
  res.render('auth/signup')
}
exports.postSignUp = async (req, res, next) => {
  console.log(req.body)
  const user = await User.register({ ...req.body }, req.body.password)
  res.redirect('/login')
}

exports.getLogin = (req, res, next) => {
  res.render('auth/login')
}

exports.postLogin = passport.authenticate('local', {
  faliureRedirect: '/login',
  successRedirect: '/profile'
})

exports.getlogOut = (req, res, next) => {
  req.logOut()
  res.redirect('/login')
}
exports.getProfile = (req, res, next) => {
  const user = req.user
  console.log(req.user)
  if (user.role === 'adoptee') {
    res.redirect('/pet-create')
  } else if (user.role === 'adopter') {
    res.redirect('/adopter-create')
  } else {
    console.log(user)
    res.send('q pedo')
  }
}

exports.getPet = (req, res, next) => {
  res.render('profile/pet-create')
}
exports.getAdopter = (req, res, next) => {
  res.render('profile/adopter-create')
}
