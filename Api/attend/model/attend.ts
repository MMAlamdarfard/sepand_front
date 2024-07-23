export interface AttendModel {
    Students?: (StudentsEntity)[] | null;
    Date: Date;
  }
export interface StudentsEntity {
    index: number,
    student_no: string;
    firstname: string;
    lastname:string;
    _id: string;
    type?:number;
    isLoading:boolean;
    late:number;
}
export interface Date {
    PersianDate: string;
    QRcode: string;
    Type: number;
    Building?: null;
    ClassNumber?: null;
    session_week: number;
    dayofweek: number;
    fromtime: number;
    totime: number;
    Is_Closure: IsClosure;
    MasterSession: boolean;
    Uni_Closure: UniClosure;
    _id: string;
  }
  export interface IsClosure {
    Value: boolean;
    Cause: string;
  }
  export interface UniClosure {
    Value: boolean;
  }
  