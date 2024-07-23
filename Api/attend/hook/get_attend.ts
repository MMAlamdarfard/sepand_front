import { useState, useEffect, DependencyList, Key } from 'react';
import http from '@/Api/api';
import { responce } from '@/Api/type';
import { AttendModel } from '../model/attend';

const useGetAttendList = ({id,callback,error,deps}:{id:string|null,error:()=>void,callback:()=>void,deps?: DependencyList | undefined}) => {
  const [response, setResponse] = useState<responce<AttendModel>>({
    data: null,
    err: null,
    isLoading: false,
  });
  useEffect(()=>{
   if(id!=null){
    setResponse({
      data:null,
      err:null,
      isLoading:true,
    })
    http.get(`/attend/${id}` ,{
    
    }).then((responce)=>{
      callback()
      setResponse({
        data:responce.data,
        err:null,
        isLoading:false,
      })  
    }).catch((erro)=>{
      error()
      setResponse({
        data:null,
        err:erro,
        isLoading:false,
      })
    })
   }
  }, deps) 
  
  return response;
};

export default useGetAttendList;