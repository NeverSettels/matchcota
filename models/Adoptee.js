const { model, Schema } = require('mongoose')

const adopterSchema = new Schema({
  userID: String,
  photos: [String],
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
