const jwt = require('jsonwebtoken')

class TokenManager {
    generateToken(userEmail){
        return jwt.sign({userEmail: userEmail}, process.env.TOKEN_SECRET, {expiresIn: '24h'})
    }
    
    authenticateToken(token){
        return jwt.verify(token, process.env.TOKEN_SECRET)

    }
}

module.exports = new TokenManager();