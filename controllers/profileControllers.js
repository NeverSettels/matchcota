const passport = require('../config/passport')
const User = require('../models/User')
const Adoptee = require('../models/Adoptee')
const Adopter = require('../models/Adopter')

exports.getAdopterCreate = (req, res, next) => {
  res.render('profile/adopter-create')
}

exports.postAdopterCreate = async (req, res, next) => {
  //get user id for User model
  const { _id } = req.user
  const userID = _id

  const {
    typeHome,
    location,
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
    location,
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

  Adopter.find({ userID })
    .then(adopters => {
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
    .then(adopter => {
      if (req.files) {
        adopter.photos.push(req.files[0].url)
        adopter.save()
      }
      res.render('profile/adopter-edit', adopter)
    })
    .catch(err => res.render('profile/adopter-edit', err))
}

exports.getAdopterPicDelete = (req, res, next) => {
  const { id, index } = req.params
  Adopter.findById(id)
    .then(adopter => {
      adopter.photos.splice(index, 1)
      adopter.save()
      res.redirect(`/adopter-profile/edit/${id}`)
    })
    .catch(err => res.render('profile/adopter-edit', err))
}
exports.getAdopterDelete = (req, res, next) => {
  const { id } = req.params
  Adopter.findByIdAndRemove(id)
    .then(adopter => res.redirect('/profile'))
    .catch(err => res.send(err))
}

exports.getAdopteeCreate = (req, res, next) => {
  res.render('profile/pet-create')
}

exports.postAdopteeCreate = async (req, res, next) => {
  const { _id } = req.user
  const userID = _id

  const {
    location,
    attributes,
    petType,
    petName,
    otherPetType,
    petSize,
    gender,
    sterilized,
    character,
    medicalNeeds,
    ifMedicalNeeds,
    age
  } = req.body

  const photos = req.files.map(photo => photo.url)

  await Adoptee.create({
    userID,
    location,
    attributes,
    petType,
    petName,
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

exports.getPetProfile = (req, res, next) => {
  const { _id } = req.user
  const userID = _id

  Adoptee.find({ userID })
    .then(pets => {
      res.render('profile/pet-profile', { pets })
    })
    .catch(err => res.render('profile/pet-profile', err))
}

exports.getPetEdit = (req, res, next) => {
  const { id } = req.params
  Adoptee.findById(id)
    .then(pet => res.render('profile/pet-edit', pet))
    .catch(err => res.render('pet-edit', err))
}
exports.postPetEdit = (req, res, next) => {
  const { id } = req.params
  Adoptee.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
    .then(pet => {
      if (req.files) {
        pet.photos.push(req.files[0].url)
        pet.save()
      }
      res.render('profile/pet-edit', pet)
    })
    .catch(err => res.render('profile/pet-edit', err))
}
exports.getPetPicDelete = (req, res, next) => {
  const { id, index } = req.params
  Adoptee.findById(id)
    .then(pet => {
      pet.photos.splice(index, 1)
      pet.save()
      res.redirect(`/pet-profile/edit/${id}`)
    })
    .catch(err => res.render('profile/pet-edit', err))
}
exports.getPetDelete = (req, res, next) => {
  const { id } = req.params
  Adoptee.findByIdAndRemove(id)
    .then(pet => res.redirect('/profile'))
    .catch(err => res.send(err))
}

exports.changePic = (req, res, next) => {
  const { _id } = req.user
  const { url } = req.file
  req.body.photo = url
  User.findOne({ _id })
    .then(user => {
      user.photo = url
      user.save()
      res.redirect('/profile')
    })
    .catch(err => res.send(err))
}
