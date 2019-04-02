import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Type} from '@views/items/container/type.object';

@Injectable({
    providedIn: 'root'
})
export class TypesService {
    constructor(private http: HttpClient){}

    //Get all item types from type category and return as array of observable
    getTypes(): Observable<Type[]>{
        return this.http.get<Type[]>(`http://178.128.110.221/api/types`);
    }

    //Get selected type and return as observable
    getType(id: string): Observable<Type>{
        return this.http.get<Type>('http://178.128.110.221/api/types/' + id);
    }

}
