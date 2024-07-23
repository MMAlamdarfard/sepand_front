import { useState, useEffect, DependencyList, Key } from 'react';
import http from '@/Api/api';
import { responce } from '@/Api/type';
import { dataModelV2 } from '@/Api/users/teachers/model/lessons';
import { SessionModel } from '../model/session_model';
const useGetSessions = ({id,callback,error,deps}:{id:string|null,error:()=>void,callback:()=>void,deps?: DependencyList | undefined}) => {
  const [response, setResponse] = useState<responce<dataModelV2<SessionModel>>>({
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
    http.get(`/sessions/${id}` ,{
    
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

export default useGetSessions;