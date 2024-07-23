export interface BuildingClasses {
    class_name: string;
    capacity: number;
    id: string;
    unitInClass?: (UnitInClassEntity | null)[] | null;
}
export interface UnitInClassEntity {
    lessonName: string;
    Group: number;
    Students: number;
    sessionid: string;
    Building: string;
    ClassNumber: string;
    fromtime: number;
    totime: number;
}
  