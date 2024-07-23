import { useState, useEffect, DependencyList, Key } from 'react';
import http from '@/Api/api';
import { responce } from '@/Api/type';
import { Buildings } from '../model/building';
import { BuildingClasses } from '../model/building_classes';
import moment from 'jalali-moment';
import { DateValue } from '@nextui-org/react';
import { TimeEntity } from '@/Api/manage_class/all_unit/model/responce_all_unit';
const useDeleteBuidingClasses = ({date,session,set_for_another,callback,deps}:{session:string|null,set_for_another:boolean,date:DateValue,callback:(data:Buildings[])=>void,deps?: DependencyList | undefined}) => {
  const [response, setResponse] = useState<responce<BuildingClasses[]>>({
    data: null,
    err: null,
    isLoading: false,
  });
   
    useEffect(() => {
   
    if(session!=null){ 
        setResponse({
      data: null,
      err: null,
      isLoading: true,
    }); 
    http.put('/chooseClass/getBuildingClass',
      {    
            continue:set_for_another,
            id:session,
            dates: moment({
                year: date.year,
                month: date.month - 1,
                day: date.day,
            }).locale('fa').format('jYYYY/jMM/jDD'),
      }
    )
    .then((response) => {
      callback(response.data)  
      setResponse({
        data: response.data,
        err: null,
        isLoading: false,
      });
     
    }).catch((err) => {
      setResponse({
        data: null,
        err: err,
        isLoading: false,
      });
    }); 
}
   
  }, deps
    );
  
  return response;
};

export default useDeleteBuidingClasses;