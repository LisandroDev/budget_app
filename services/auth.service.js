import bcrypt from 'bcrypt';

export class AuthService {
    private saltRounds = 10;
    
    public async registerUser(email, password){
        const hashedPassword = await bcrypt.hash(password, this.saltRounds);
        
    }
}