import { AuthService } from "../services/auth.service";

class AuthController {
    
    private authService;
    constructor(){
        this.authService = new AuthService();
    }
    public register(request, response){
        const { email, password } = request.body;
        
        return
    }
    public login(){
        return
    }
    
    public logout(){
        return
    }
}

export default new AuthController();