const { model, Schema } = require('mongoose')

const adopteeSchema = new Schema({
  userID: String,
  location: String,
  photos: [String],
  petName: String,
  petType: String,
  otherPetType: String,
  petSize: {
    type: String,
    enum: ['very small', 'small', 'medium', 'large', 'huge']
  },
  gender: {
    type: String,
    enum: ['male', 'female']
  },
  attributes: [String],
  sterilized: Boolean,
  medicalNeeds: Boolean,
  ifMedicalNeeds: String,
  age: {
    type: String,
    enum: ['pup', 'young adult', 'adult', 'senior']
  }
})

module.exports = model('Adoptee', adopteeSchema)
