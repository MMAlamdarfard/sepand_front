import { TimesEntity } from "./times";

export interface UnitInTimes {
    classes?: (ClassesEntity)[] | null;
}
export interface ClassesEntity {
    id: string;
    code: string;
    les_name: string;
    time: TimesEntity;
    units: string;
    group: number;
    faccode: string;
    profcode: string;
    should_attend: boolean;
    students:number
    session: number;
    type: number;
    Building?: null;
    ClassNumber?: null;
  }
  
  