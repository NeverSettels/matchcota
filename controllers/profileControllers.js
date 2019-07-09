const passport = require('../config/passport')
const User = require('../models/User')
const Adoptee = require('../models/Adoptee')
const Adopter = require('../models/Adopter')

exports.getAdopterCreate = (req, res, next) => {
  res.render('profile/adopter-create')
}

exports.postAdopterCreate = async (req, res, next) => {
<<<<<<< HEAD
  //console.log(req.user)
  //get user id for User model
=======
  console.log(req.user)

>>>>>>> humberto
  const { _id } = req.user
  const userID = _id

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

  const photos = req.files.map(photo => photo.url)

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
exports.getAdopteeCreate = (req, res, next) => {
  res.render('profile/pet-create')
}

exports.postAdopteeCreate = async (req, res, next) => {
  console.log(req.user)

  const { _id } = req.user
  const userID = _id

  const { petType, otherPetType, petSize, gender, sterilized, character, medicalNeeds, ifMedicalNeeds, age } = req.body

  const photos = req.files.map(photo => photo.url)

  await Adoptee.create({
    userID,
    petType,
    otherPetType,
    petSize,
    gender,
    sterilized,
    character,
    medicalNeeds,
    ifMedicalNeeds,
    age,
    photos
  })

  res.redirect('/pet-profile')
}

// delete commands TO DO

exports.deletePet = (req, res, next) => {
  Place.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/'))
    .catch(err => next(err))
}

exports.deleteUser = (req, res, next) => {
  Place.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/'))
    .catch(err => next(err))
}
