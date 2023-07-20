const model = require('../models/transaction')
const bcrypt = require('bcrypt')
const tokenManager = require('../util/token')

 class AuthService {
    
    constructor(){
        this.saltRounds = 10
    }

    
    async registerUser(email, password){
        const hashedPassword = await bcrypt.hash(password, this.saltRounds);
        
        const newUser = await model.User.create({email: email, hashedPassword: hashedPassword})
        
        if(!newUser){
            throw new Error('Fail at user creation')
        }
        
        return newUser;
    }
    
    async loginUser(email, password){
        const user = await model.User.findOne({where: {email: email}});
        
        if(!user){
            throw new Error('Unauthorized error')
        }
        
        
        const passwordCheck = await bcrypt.compare(password, user.hashedPassword)
        
        if(!passwordCheck){
            throw new Error('Invalid credentials')
        }
        
        const token = await tokenManager.generateToken(user.id);
        
        return {id: user.id, token: token}
        
    }
}

module.exports = AuthService