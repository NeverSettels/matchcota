const { model, Schema } = require('mongoose')

const adopterSchema = new Schema({
  userID: String,
  photos: [String],
  typeHome: {
    type: String,
    enum: ['house', 'apartment']
  },
  propertyType: {
    type: String,
    enum: ['rent', 'own']
  },
  yard: {
    type: String,
    enum: ['no yard', 'very small', 'small', 'medium', 'large', 'huge']
  },

  peopleAtHome: Number,
  childAge: {
    type: String,
    enum: ['no children', 'infant', 'pre-teen', 'teen']
  },
  employmentType: {
    type: String,
    enum: ['unemployed', 'self-employed', 'retired', 'part-time', 'full-time', 'student']
  },
  freeHoursPerWeek: Number,
  firstPet: Boolean,
  otherPets: Boolean,
  numPets: Number
})

module.exports = model('Adopter', adopterSchema)
