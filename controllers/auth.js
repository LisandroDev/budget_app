const AuthService = require('../services/auth.service')
class AuthController {
    
    constructor(){
        this.authService = new AuthService();
    }
     async register(request, response){
        const { email, password } = request.body;
        if(!email || !password){
            throw new Error('Bad request');
        }
        
        const user = await this.authService.registerUser(email, password);
        
        return response.json({user});
    }
     login(){
        return
    }
    
    logout(){
        return
    }
}

module.exports = new AuthController();