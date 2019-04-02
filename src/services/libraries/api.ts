import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

// API class
@Injectable()
export class Api {

    private header: any;
    private parameter: any;

    // Get backend url from environment file
    private getUrl(path) {
        return `${environment.API_URL}/${path}`;
    }

    constructor (private http: HttpClient) {
    }

    // Bind data to header
    bindHeader() {
        this.header = {};

        // Bind Authorization token to header
        if (localStorage.getItem('token')){
            this.header['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        }
    }

    // Bind data to parameter
    bindParameter() {
        this.parameter = {};
    }

    // Reusable function to return header and parameter
    bindBoth() {
        return {
            headers: this.header,
            params: this.parameter
        };
    }

    // Function to return data from backend
    get(path) {
        this.bindHeader();
        this.bindParameter();

        const options = this.bindBoth();

        return this.http.get(this.getUrl(path), options);
    }

    // Function to post data to backend
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

    // Function to delete data from backend
    delete(path) {
        this.bindHeader();
        this.bindParameter();

        const options = this.bindBoth();

        return this.http.delete(this.getUrl(path), options);
    }

    // Function to post JSON data to backend
    postJSON(path, body) {
        this.bindHeader();
        this.bindParameter();

        const options = this.bindBoth();

        return this.http.post(this.getUrl(path), body, options);
    }
}
