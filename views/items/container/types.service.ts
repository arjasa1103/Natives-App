import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Type} from '@views/items/container/type.object';
import {Item} from '@views/items/container/item.object';

@Injectable({
    providedIn: 'root'
})
export class TypesService {
    private items: Item[];

    constructor(private http: HttpClient){}

    getTypes(): Observable<Type[]>{
        return this.http.get<Type[]>(`http://178.128.110.221/api/types`);
    }

    getType(id: string): Observable<Type>{
        return this.http.get<Type>('http://178.128.110.221/api/types/' + id);
    }

}
