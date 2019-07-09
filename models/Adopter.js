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
  Children: {
    hasChild: Boolean,
    numChild: Number,
    childAge: {
      type: String,
      enum: ['infant', 'pre-teen', 'teen']
    }
  },
  employmentType: {
    type: String,
    enum: ['unemployed', 'self-employed', 'retired', 'part-time', 'full-time', 'student']
  },
  freeHoursPerWeek: Number,
  fristPet: Boolean,
  otherPets: {
    type: Boolean,
    numPets: Number
  }
})
