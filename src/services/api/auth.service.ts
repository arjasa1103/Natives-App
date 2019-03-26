import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Api} from "../libraries/api";

@Injectable()
export class AuthService {
    constructor(private api:Api){}

    public getUser(user_id): Observable<any> {
        return this.api.get(`users/${user_id}`);
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
