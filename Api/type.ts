 export type dataModel<T> = {
    length: number,
    count:number,
    results:T[],
    next:string|null
} 
export type responce<T,K>={
    data?:T|null,
    err?:K|null,
    isLoading:boolean,
}
export interface Message {
    message: string;
}