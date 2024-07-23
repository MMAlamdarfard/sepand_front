import { useState, useEffect, DependencyList, Key } from 'react';
import http from '@/Api/api';
import { responce } from '@/Api/type';
import { AttendModel } from '../model/attend';

const useSetQrcodeAttend = ({token,student,callback,error,deps}:{token:string|null,student:string|null,error:(err:any)=>void,callback:(data:any)=>void,deps?: DependencyList | undefined}) => {
  const [response, setResponse] = useState<responce<any>>({
    data: null,
    err: null,
    isLoading: false,
  });
  useEffect(()=>{
   if(token!=null && student!=null ){
    setResponse({
      data:null,
      err:null,
      isLoading:true,
    })
    http.post(`/attend/qrcode` ,{token:token,student:student}).then((responce)=>{
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

export default useSetQrcodeAttend;