const { model, Schema } = require('mongoose')

const adopteeSchema = new Schema({
  userID: String,
  location: String,
  photos: [String],
  petName: String,
  petType: String,
  petSize: {
    type: String,
    enum: ['very small', 'small', 'medium', 'large', 'huge']
  },
  gender: {
    type: String,
    enum: ['male', 'female']
  },
  nutered: Boolean,
  character: [String],
  medicalNeeds: Boolean,
  age: String
})
