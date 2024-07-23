 export type dataModel<T> = {
    length: number,
    count:number,
    results:T[],
    next:string|null
} 
export type responce<T>={
    data?:T|null,
    err:any,
    isLoading:boolean,
}