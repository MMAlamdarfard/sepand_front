import { useState, useEffect, DependencyList, Key } from 'react';
import http from '@/Api/api';
import { dataModel, Message, responce } from '@/Api/type';

import Me from '../me'
import { UserMe } from '../model/me_model';
const useGetMe = ({deps}:{deps?: DependencyList | undefined}) => {
  const [response, setResponse] = useState<responce<UserMe,Message>>({
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
    Me.getMe().
    then((responce)=>{
      setResponse({
        data:responce.data,
        err:null,
        isLoading:false,
      })  
    }).catch((erro)=>{
      setResponse({
        data:null,
        err:erro,
        isLoading:false,
      })
    })

  }, deps) 
  
  return response;
};

export default useGetMe;