export interface User{
    _id: string;
    name?: string;
    email?: string;
    phone?: number;
    status?: boolean;
    isverified?: boolean;
    jwttoken?: string;
    token?: string;
}
