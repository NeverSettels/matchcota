const { model, Schema } = require('mongoose')
const plm = require('passport-local-mongoose')

const userSchema = new Schema({
  photo: {
    type: String,
    default: 'https://image.flaticon.com/icons/png/512/64/64572.png'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'adoptee', 'adopter'],
    required: true
  },
  age: Number
})

userSchema.plugin(plm, { usernameField: 'email' })
module.exports = model('User', userSchema)
