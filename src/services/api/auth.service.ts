import {Injectable} from "@angular/core";
import {Api} from "../libraries/api";

@Injectable()

// Services containing functions for authentication
export class AuthService {
    constructor(private api:Api){}

    // Get current login-ed user data
    public me(){
        return this.api.get('userdata');
    }

    // Transfer the parameter to backend and use log in routing
    public login(body) {
        return this.api.postJSON('login', body);
    }

    // Use log out routing
    public logout() {
        return this.api.post('logout', {});
    }

    // Transfer the parameter to backend and use register routing
    public register(body){
        return this.api.postJSON('register', body);
    }
}
