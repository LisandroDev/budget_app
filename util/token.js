const jwt = require('jsonwebtoken')

class TokenManager {
    generateToken(userId){
        return jwt.sign({userId: userId}, process.env.TOKEN_SECRET, {expiresIn: '24h'})
    }
    
    authenticateToken(token){
        return jwt.verify(token, process.env.TOKEN_SECRET)

    }
}

module.exports = new TokenManager();