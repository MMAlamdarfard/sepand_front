export interface SessionModel{

        index: number;
        name: string,
        code: string,
        group: number,
        Is_Closure: IsClosure;
        Uni_Closure: UniClosure;
        PersianDate: string;
        QRcode: string;
        Type: number;
        Session: number;
        Building: string;
        classNumber: string;
        session_week: number;
        dayofweek: number;
        fromtime: number;
        totime: number;
        MasterSession: boolean;
        id: string;
      }
      export interface IsClosure {
        Value: boolean;
        Cause: string;
      }
      export interface UniClosure {
        Value: boolean;
      }
      