const jwt = require('jsonwebtoken')

// middleWare
module.exports = function(req, res, next) {
  let token = req.headers['x-access-token'] || req.headers['authorization']
  let checkBearer = 'Bearer '
  
  if (token) {
    if (token.startsWith(checkBearer)) {
      token = token.slice(checkBearer.length, token.length)
    }
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) {
        res.json({
          success: false,
          message: 'Failed to auth'
        })
      } else {
        req.decoded = decoded;
        next()
      }
    })
  } else {
    res.json({
      success: false,
      message: 'no token provided'
    })
  }
}