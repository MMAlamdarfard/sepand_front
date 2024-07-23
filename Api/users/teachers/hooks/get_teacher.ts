import { useState, useEffect, DependencyList, Key } from 'react';
import http from '@/Api/api';
import { dataModel, responce } from '@/Api/type';

import moment from 'jalali-moment';
import { DateValue } from '@nextui-org/react';
import { TimeEntity } from '@/Api/manage_class/all_unit/model/responce_all_unit';
import { Teachers } from '../model/teacher';
const useGetTeacher = ({page,callback,error,deps}:{page:number,error:()=>void,callback:()=>void,deps?: DependencyList | undefined}) => {
  const [response, setResponse] = useState<responce<dataModel<Teachers>>>({
    data: null,
    err: null,
    isLoading: false,
  });
  useEffect(()=>{
    setResponse({
      data:null,
      err:null,
      isLoading:true,
    })
    http.get('/users/teacher/'+page+'/',{
    
    }).then((responce)=>{
      callback()
      setResponse({
        data:responce.data,
        err:null,
        isLoading:false,
      })  
    }).catch((erro)=>{
        console.log(erro)
      error()
      setResponse({
        data:null,
        err:erro,
        isLoading:false,
      })
    })
    
  }, deps) 
  
  return response;
};

export default useGetTeacher;