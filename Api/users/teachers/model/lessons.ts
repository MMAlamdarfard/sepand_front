import { dataModel } from "@/Api/type";

export interface dataModelV2<T> extends dataModel<T>{
   name: string,
   code: number,
}
export interface TeacherLessons {
    index: number;
    LessonName: string;
    group: number;
    code: string;
    college: string;
    student: number;
    session: number;
    prof: string;
    id: string;
    unit:string;
  }
  