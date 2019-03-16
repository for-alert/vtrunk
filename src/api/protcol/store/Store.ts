export interface Store {
    id: string;
    name: string;
    address: string;
}

export interface GetStore {
    id: number;
    storeName: string;
    address: string;
    picture: string;
}
