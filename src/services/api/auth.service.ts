import {Injectable} from "@angular/core";
import {Api} from "../libraries/api";

@Injectable()
export class AuthService {
    constructor(private api:Api){}

    public me(){
        return this.api.get('userdata');
    }

    public login(body) {
        return this.api.postJSON('login', body);
    }

    public logout() {
        return this.api.get('logout');
    }

    public register(body){
        return this.api.postJSON('register', body);
    }
}
