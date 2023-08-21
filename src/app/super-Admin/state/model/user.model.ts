export interface User{
    user: any[];
    
    _id: string;
    name?: string;
    email?: string;
    phone?: number;
    status?: boolean;
    is_verified?: boolean;
    is_admin?: boolean;
    is_superAdmin?: boolean;
}

export interface userState {
    users: ReadonlyArray<User>;
    loading: boolean;
    loaded: boolean;
    error: any;
}
