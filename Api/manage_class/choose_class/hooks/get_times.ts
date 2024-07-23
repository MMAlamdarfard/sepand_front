import { useState, useEffect, DependencyList, Key } from 'react';
import moment from 'jalali-moment';
import http from '@/Api/api';
import { DateValue } from '@nextui-org/react';
import { responce } from '@/Api/type';
import { TimeOfFacs } from '../model/times';
import { TimeEntity } from '../../all_unit/model/responce_all_unit';


const useClassTimes = ({date, fac, attend,callback, deps}:{date:DateValue,fac:Key,attend:Key,callback:(time:TimeEntity|null)=>void,deps?: DependencyList | undefined}) => {
  const [response, setResponse] = useState<responce<TimeOfFacs>>({
    data: null,
    err: null,
    isLoading: true,
  });

  useEffect(() => {
    setResponse({
      data: null,
      err: null,
      isLoading: true,
    });
    
    http.post('/chooseClass/getTimes', {
      dates: moment({
        year: date.year,
        month: date.month - 1,
        day: date.day,
      }).locale('fa').format('jYYYY/jMM/jDD'),
      fac: (fac),
      attend: attend,
    }).then((response) => {
      setResponse({
        data: response.data,
        err: null,
        isLoading: false,
      });
      callback(response.data?.times[0]??null)
      // If you want to set the selected time in the hook, consider returning a setter function
    //   window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    //   });
     
    }).catch((err) => {
      callback(null)  
      setResponse({
        data: null,
        err: err,
        isLoading: false,
      });
    });
  }, deps
 //[date, fac, attendFilter]
);
  
  return response;
};

export default useClassTimes;