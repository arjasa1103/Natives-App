import {Type} from '@views/items/container/type.object';

export class Category{
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    types: Type[];
}
