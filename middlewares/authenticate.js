
const TokenManager = require('../util/token')

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const cookie = req.headers['cookie']?.split('jwt_token=')[1]
    const token = authHeader && authHeader.split(' ')[1]

    if(!cookie){
        throw new Error('Unauthorized')
    }

    const tokenAuthenticated = TokenManager.authenticateToken(cookie);

    if(tokenAuthenticated){
        req.userEmail = tokenAuthenticated.userEmail;
    } else {
        throw new Error('Unauthorized')
    }

    next()
}

module.exports = authenticateToken