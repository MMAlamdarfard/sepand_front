import { useState, useEffect, DependencyList, Key } from 'react';
import http from '@/Api/api';
import { responce } from '@/Api/type';
import { AttendModel } from '../model/attend';

const useSetAttendList = ({session,student,attend,callback,error,deps}:{session:string|null,student:string|null,attend:number|null,error:(err:any)=>void,callback:(data:any)=>void,deps?: DependencyList | undefined}) => {
  const [response, setResponse] = useState<responce<any>>({
    data: null,
    err: null,
    isLoading: false,
  });
  useEffect(()=>{
   if(session!=null && student!=null && attend!=null){
    setResponse({
      data:null,
      err:null,
      isLoading:true,
    })
    http.post(`/attend/normal` ,{
        session:session,
        student:student,
        attend:attend
    }).then((responce)=>{
      callback(responce.data)
      setResponse({
        data:responce.data,
        err:null,
        isLoading:false,
      })  
    }).catch((erro)=>{
      error(erro)
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

export default useSetAttendList;