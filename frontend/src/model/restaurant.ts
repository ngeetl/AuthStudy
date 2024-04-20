// 객체 type 설정
export interface Restaurant  {
    name: string;
    category: string;
    address: Address;
    menu: Menu[];
}

export interface Address  {
    city: string;
    detail: string;
    zipCode: number;
}

export interface Menu  {
    name: string;
    price: number;
}

