import { useState, useEffect, DependencyList, Key } from 'react';
import http from '@/Api/api';
import { responce } from '@/Api/type';
import { AttendModel } from '../model/attend';

const useSetQrcode = ({session,callback,error,deps}:{session:string|null,error:(err:any)=>void,callback:(data:any)=>void,deps?: DependencyList | undefined}) => {
  const [response, setResponse] = useState<responce<any>>({
    data: null,
    err: null,
    isLoading: false,
  });
  useEffect(()=>{
   if(session!=null){
    setResponse({
      data:null,
      err:null,
      isLoading:true,
    })
    http.post(`/attend/setqrcode` ,{session:session,}).then((responce)=>{
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

export default useSetQrcode;