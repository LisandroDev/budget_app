const model = require('../models/transaction')
const bcrypt = require('bcrypt')

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
}

module.exports = AuthService