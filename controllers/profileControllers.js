const passport = require('../config/passport')
const User = require('../models/User')
const Adoptee = require('../models/Adoptee')
const Adopter = require('../models/Adopter')

//diplays view of  Form for adopter create
exports.getAdopterCreate = (req, res, next) => {
  res.render('profile/adopter-create')
}

exports.postAdopterCreate = async (req, res, next) => {
  //console.log(req.user)
  //get user id for User model
  const { _id } = req.user
  const userID = _id
  // get info from From to the right variables in adopter model
  const {
    typeHome,
    propertyType,
    yard,
    peopleAtHome,
    childAge,
    employmentType,
    freeHoursPerWeek,
    firstPet,
    otherPets,
    numPets
  } = req.body
  //take URL's for files upleades and set to varibale in adopter model
  const photos = req.files.map(photo => photo.url)

  //crates new adopter linked to profile
  await Adopter.create({
    userID,
    typeHome,
    propertyType,
    yard,
    peopleAtHome,
    childAge,
    employmentType,
    freeHoursPerWeek,
    firstPet,
    otherPets,
    numPets,
    photos
  })

  res.redirect('/adopter-profile')
}

/** Add adoptee profiles here (make sure adoptee model is being exported ) */

exports.getAdopterProfile = (req, res, next) => {
  const { _id } = req.user
  const userID = _id

  adopter = Adopter.findOne({ userID })
    .then(adopter => {
      //console.log(adopter)
      res.render('profile/adopter-profile', adopter)
    })
    .catch(err => res.render('profile/adopter-profile', err))
}

exports.postAdopterProfile = (req, res, next) => {
  console.log('body', req.body, 'user', req.user)
  const { _id } = req.user
  const userID = _id
  adopter = Adopter.findOneAndUpdate({ userID }, { ...req.body }, { new: true })
    .then(adopter => {
      console.log('adopter', adopter)
      res.render('profile/adopter-profile', adopter)
    })
    .catch(err => res.redirect('/login'))
}
