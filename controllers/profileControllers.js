const passport = require('../config/passport')
const User = require('../models/User')
const Adoptee = require('../models/Adoptee')
const Adopter = require('../models/Adopter')

exports.getAdopterCreate = (req, res, next) => {
  res.render('profile/adopter-create')
}

exports.postAdopterCreate = async (req, res, next) => {
  console.log(req.user)

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
