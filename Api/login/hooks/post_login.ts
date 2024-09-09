import { useState, useEffect, DependencyList, Key } from 'react';

import { dataModel, Message, responce } from '@/Api/type';
import login from '../login';



const usePostLogin = ({deps,phone,pass,error, success}:{error:(err:any)=>void,success:()=>void,deps?: DependencyList | undefined,phone:string|null,pass:string|null}) => {
  const [response, setResponse] = useState<responce<any,Message>>({
    data: null,
    err: null,
    isLoading: false,
  });
  useEffect(()=>{
   if(phone!=null && pass!=null){
    setResponse({
      data:null,
      err:null,
      isLoading:true,
    })
    login.Login({pass:pass??"",phone:phone??""}).
    then((responce)=>{
      sessionStorage.setItem("access",responce.data.accessToken);
      sessionStorage.setItem("refresh",responce.data.refreshToken);
      success()
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

export default usePostLogin;