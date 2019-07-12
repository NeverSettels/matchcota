const Adopter = require('../models/Adopter')
const Adoptee = require('../models/Adoptee')
const User = require('../models/User')

exports.catchErrors = fn => (req, res, next) => fn(req, res, next).catch(next)

//checks role of user to see if adopter || adoptee
exports.checkRole = role => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next()
    } else {
      res.redirect('/logout')
    }
  }
}

exports.checkMatch = () => {
  return (req, res, next) => {
    const { userId, petId, homeId } = req.params
    const myUser = req.user
    const myId = myUser._id
    const myRole = myUser.role

    User.find({ interestedIn: { $elemMatch: { $elemMatch: { $in: [myId] } } } })
      .then(users => {
        if (users.length === 0) next()
        users.forEach((user, i) => {
          // userId is the Id of the user match I just clicked on
          // user._id is the Id of the users interested in me
          if (user._id == userId) {
            //show profile and matched item info
            if (myRole === 'adopter') {
              //See and store Adoptee and pet info
              Adoptee.findOne({ _id: petId })
                .then(pet => {
                  myUser.matches.push([userId, petId])
                  myUser.save()
                  User.findOne({ _id: userId }).then(user => {
                    user.matches.push(users[i].interestedIn[i])
                    user.save()
                    res.render('matchmake/match')
                  })
                })
                .catch(err => console.log(err))
            } else if (myRole === 'adoptee') {
              //See and store Adopter and home info
              Adopter.findOne({ _id: homeId })
                .then(adopter => {
                  myUser.matches.push([userId, homeId])
                  myUser.save()
                  User.findOne({ _id: userId }).then(user => {
                    user.matches.push(users[i].interestedIn[i])
                    user.save()
                    res.render('matchmake/match')
                  })
                })
                .catch(err => console.log(err))
            }
            console.log('match')
          } else next() //if they dont match my interest is saved
        })
      })
      .catch(err => console.log(err))
  }
}
