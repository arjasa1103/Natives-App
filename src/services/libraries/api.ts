import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class Api {

    private header: any;
    private parameter: any;

    private getUrl(path) {
        return `${environment.API_URL}/${path}`;
    }

    constructor (private http: HttpClient) {
    }

    bindHeader() {
        this.header = {};

        if (localStorage.getItem('token')){
            this.header['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        }
    }

    bindParameter() {
        this.parameter = {};
    }

    bindBoth() {
        return {
            headers: this.header,
            params: this.parameter
        };
    }

    get(path) {
        this.bindHeader();
        this.bindParameter();

        const options = this.bindBoth();

        return this.http.get(this.getUrl(path), options);
    }

    post(path, body, upload?:any, file?:any) {
        this.bindHeader();
        this.bindParameter();

        const options = this.bindBoth();
        const formData = new FormData();

        for (const key in body) {
            if (key in body) {
                formData.append(key, body[key]);
            }
        }

        if (upload) {
            formData.append('image', file);
        }

        return this.http.post(this.getUrl(path), FormData, options);
    }

    delete(path) {
        this.bindHeader();
        this.bindParameter();

        const options = this.bindBoth();

        return this.http.delete(this.getUrl(path), options);
    }

    postJSON(path, body) {
        this.bindHeader();
        this.bindParameter();

        const options = this.bindBoth();

        return this.http.post(this.getUrl(path), body, options);
    }
}
