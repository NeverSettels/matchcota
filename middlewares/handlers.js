exports.catchErrors = fn => (req, res, next) => fn(req, res, next).catch(next)

//checks role of user to see if adopter || adoptee
exports.checkRole = role => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next()
    } else {
      res.redirect('/auth/login')
    }
  }
}
