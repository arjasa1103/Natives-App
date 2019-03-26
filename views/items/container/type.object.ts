import {Item} from '@views/items/container/item.object';

export class Type{
    id: string;
    name: string;
    category_id: string;
    created_at: Date;
    updated_at: Date;
    items: Item[];
}
