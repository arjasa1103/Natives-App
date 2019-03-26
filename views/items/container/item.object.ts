export class Item{
    id: string;
    name: string;
    price: number;
    stock: number;
    description: string;
    gender_id: string;
    type_id: string;
    supplier_id: string;
    created_at: Date;
    updated_at: Date;
    gender: {
        id: string;
        name: string;
    };
    type: {
        id: string;
        name: string;
    };
    supplier: {
        id: string;
        name: string;
    };
    image: any;
}
