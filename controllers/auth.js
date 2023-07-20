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
    async login(request, response) {
            const {email, password} = request.body;

            if (!email || !password) {
                throw new Error('Missing Data');
            }

            const user = await this.authService.loginUser(email, password);

            return response
                .status(200)
                .cookie('jwt_token', user.token, {
                    httpOnly: true,
                    domain: 'localhost'
                })
                .json({email: user.email, token: user.token});
    }

    async logout(request, response) {
        return response
            .status(200)
            .clearCookie('jwt_token')
            .json({ message: 'Cookie cleared' });
    }

}

module.exports = new AuthController();