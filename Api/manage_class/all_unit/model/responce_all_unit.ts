export type responce_all_unit={
    index: number;
    id:number;
    code: number;
    les_name: string;
    units: number;
    group: number;
    faccode: number;
    profcode: number;
    time?: TimeEntity[] | null;
    should_attend: boolean;
    dayClasses: number,
    students: number      
} 
export type TimeEntity ={
    dayofweek: number;
    fromtime: number;
    totime: number;
}