import { useState, useEffect, DependencyList, Key } from 'react';
import http from '@/Api/api';
import { responce } from '@/Api/type';
import { Buildings } from '../model/building';
import { BuildingClasses } from '../model/building_classes';
import moment from 'jalali-moment';
import { DateValue } from '@nextui-org/react';
import { TimeEntity } from '../../all_unit/model/responce_all_unit';

const useSetBuidingClasses = ({date,buildingId,session,classid,another,time,noData,callback,error,deps}:{another:boolean,classid:string,session:string,noData:()=>void,date:DateValue,time:TimeEntity|null,buildingId:Key|null,error:()=>void,callback:(data:Buildings[])=>void,deps?: DependencyList | undefined}) => {
  const [response, setResponse] = useState<responce<any>>({
    data: null,
    err: null,
    isLoading: false,
  });
   console.log("HERE")
    useEffect(() => {
   
  if(buildingId!=null && time!=null && classid!=null && session!=null){ 
    setResponse({
      data: null,
      err: null,
      isLoading: true,
    }); 
    http.patch('/chooseClass/getBuildingClass',
      {     id:session,
            dates: moment({
                year: date.year,
                month: date.month - 1,
                day: date.day,
            }).locale('fa').format('jYYYY/jMM/jDD'),
            building:buildingId,
            continue:another,
            class:classid,
            time:time
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
      error() 
      console.log("qwqwqwqwqwqwq")
      setResponse({
        data: null,
        err: err,
        isLoading: false,
      });
    }); 
 }else{
    noData()
 }
    
  }, deps
    );
  
  return response;
};

export default useSetBuidingClasses;