const passport = require('../config/passport')
const User = require('../models/User')
const Adoptee = require('../models/Adoptee')
const Adopter = require('../models/Adopter')
const mongoose = require('mongoose')

exports.getPets = (req, res, next) => {
  Adoptee.find()
    .then(pets => {
      res.render('matchmake/pet-matchmake', { pets })
    })
    .catch(err => res.render('matchmake/pet-matchmake', err))
}
exports.postAcceptPet = (req, res, next) => {
  const { userId, petId } = req.params
  const { _id } = req.user
  const id = _id
  User.findOne({ _id: id })
    .then(user => {
      user.interestedIn.push([userId, petId])
      user.save()

      res.redirect('/pets')
    })
    .catch(err => res.send(err))
}
exports.getHomes = (req, res, next) => {
  Adopter.find()
    .then(homes => {
      res.render('matchmake/adopter-matchmake', { homes })
    })
    .catch(err => res.render('matchmake/adopter-matchmake', err))
}
exports.postAcceptHome = (req, res, next) => {
  const { userId, homeId } = req.params
  const { _id } = req.user
  const id = _id
  User.findOne({ _id: id })
    .then(user => {
      user.interestedIn.push([userId, homeId])
      user.save()
      res.redirect('/homes')
    })
    .catch(err => res.send(err))
}

exports.getAdopterMatches = (req, res, next) => {
  let petIdarr = []
  req.user.matches.forEach(element => {
    petIdarr.push(mongoose.Types.ObjectId(`${element[1]}`))
  })
  Adoptee.find({ _id: { $in: petIdarr } })
    .then(pets => res.render('matchmake/matched-pet', { pets }))
    .catch(err => res.send(err))
}
exports.getAdopteeMatches = (req, res, next) => {
  let homeIdarr = []
  req.user.matches.forEach(element => {
    homeIdarr.push(mongoose.Types.ObjectId(`${element[1]}`))
  })
  Adopter.find({ _id: { $in: homeIdarr } })
    .then(homes => res.render('matchmake/matched-adopter', { homes }))
    .catch(err => res.send(err))
}
exports.getMatch = (req, res, next) => {
  const { id } = req.params
  User.findOne({ _id: id })
    .then(user => {
      res.render('matchmake/match', { user })
    })
    .catch(err => res.send(err))
}
