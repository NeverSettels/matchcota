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

exports.getAdopterProfile = (req, res, next) => {
  const { _id } = req.user
  const userID = _id

  adopters = Adopter.find({ userID })
    .then(adopters => {
      console.log(adopters)
      res.render('profile/adopter-profile', { adopters })
    })
    .catch(err => res.render('profile/adopter-profile', err))
}
exports.getAdopterEdit = (req, res, next) => {
  const { id } = req.params
  Adopter.findById(id)
    .then(adopter => res.render('profile/adopter-edit', adopter))
    .catch(err => res.render('adopter-edit', err))
}

exports.postAdopterEdit = (req, res, next) => {
  const { id } = req.params
  Adopter.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
    .then(adopter => res.render('profile/adopter-edit', adopter))
    .catch(err => res.render('adopter-edit', err))
}
exports.deleteAdopter = (req, res, next) => {
  const { _id } = req.user
  const userID = _id
  Adopter.findByIdAndRemove(id)
    .then(celeb => res.redirect('/adopter-create'))
    .catch(err => res.send(err))
}
