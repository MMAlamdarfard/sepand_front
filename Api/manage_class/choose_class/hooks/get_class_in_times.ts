import { useState, useEffect, DependencyList, Key } from 'react';
import moment from 'jalali-moment';
import http from '@/Api/api';
import { DateValue } from '@nextui-org/react';
import { responce } from '@/Api/type';
import { TimeOfFacs, TimesEntity } from '../model/times';
import { ClassesEntity, UnitInTimes } from '../model/unit_in_times';

const useGetClassesInTime = ({date, fac, attend,time, deps}:{date:DateValue,fac:Key,attend:Key,time:TimesEntity|null,deps?: DependencyList | undefined}) => {
  
  const [response, setResponse] = useState<responce<UnitInTimes>>({
    data: null,
    err: null,
    isLoading: false,
  });
  
  useEffect(() => {
  
    if(time!=null){ 
       setResponse({
      data: null,
      err: null,
      isLoading: true,
    });
      http.post('/chooseClass/getClassesInTime', {
      time:time,  
      dates: moment({
        year: date.year,
        month: date.month - 1,
        day: date.day,
      }).locale('fa').format('jYYYY/jMM/jDD'),
      fac: fac,
      attend: attend,
    })
    .then((response) => {
      setResponse({
        data: response.data,
        err: null,
        isLoading: false,
      });
      // If you want to set the selected time in the hook, consider returning a setter function
      console.log(response.data);
    }).catch((err) => {
      setResponse({
        data: null,
        err: err,
        isLoading: false,
      });
    }); 
    }
   
  }, deps
 //[date, fac, attendFilter]
);
  
  return response;
};

export default useGetClassesInTime;