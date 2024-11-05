export interface IRegister {
    email: string;
    password: string;
    password2: string;
    username: string;
}

export interface ILogin {
    password: string;
    username: string;
}

export interface IProduct {
    description: string,
    id: number,
    image: string,
    price: string,
    quantity: number,
    rating: number,
    title: string
}