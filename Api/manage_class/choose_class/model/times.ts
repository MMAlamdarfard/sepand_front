export interface TimeOfFacs {
  times?: (TimesEntity)[] | null;
}
export interface TimesEntity {
  dayofweek: number;
  fromtime: number;
  totime: number;
}

