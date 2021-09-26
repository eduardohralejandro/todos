import axios from 'axios';

const API_URL = 'http://localhost:8000/auth/login';


class AuthService {
    async login(email: string, password: string ) {
        const response = await axios.post(API_URL, { email, password })
        
        if (response.data.access_token) {
            localStorage.setItem('user', JSON.stringify(response.data.access_token));
        }

        return response.data;
    }
}


export default new AuthService();