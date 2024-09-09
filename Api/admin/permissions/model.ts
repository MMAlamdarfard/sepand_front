export interface PermissionsResponce {
    data?: (DataEntityPermission)[] | null;
}
export interface DataEntityPermission {
    _id: string;
    Name: string;
    Code: string;
}
export interface PermissionsRequest {
    name?: String,
    code?: String  
}