import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '@views/items/container/category.object';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {
    constructor(private http: HttpClient){}

    //Get all categories from category API and return as observable
    getCategories(): Observable<Category[]>{
        return this.http.get<Category[]>(`http://178.128.110.221/api/categories`);
    }
}
