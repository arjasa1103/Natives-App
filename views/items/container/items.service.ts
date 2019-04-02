import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '@views/items/container/item.object';

@Injectable({
    providedIn: 'root'
})
export class ItemsService {
    constructor(private http: HttpClient){}

    //Get all items from items API and return as array of observable
    getItems(): Observable<Item[]>{
        return this.http.get<Item[]>(`http://178.128.110.221/api/items`);
    }

    //get selected item from items API and return as observable
    getItem(id: string): Observable<Item>{
        return this.http.get<Item>('http://178.128.110.221/api/items/' + id);
    }
}
