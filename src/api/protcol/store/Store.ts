export interface Store {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
}

export interface GetStore {
    $id: number;
    id: number;
    storeName: string;
    address: string;
    picture: string;
}
