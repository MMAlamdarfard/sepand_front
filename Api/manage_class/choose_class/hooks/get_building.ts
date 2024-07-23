import { useState, useEffect, DependencyList, Key } from 'react';
import http from '@/Api/api';
import { responce } from '@/Api/type';
import { Buildings } from '../model/building';
const useGetBuiding = ({ callback,deps}:{callback:(data:Buildings[])=>void,deps?: DependencyList | undefined}) => {
  const [response, setResponse] = useState<responce<Buildings[]>>({
    data: null,
    err: null,
    isLoading: true,
  });
  
  useEffect(() => {
    setResponse({
      data: null,
      err: null,
      isLoading: true,
    }); 
    http.get('/chooseClass/getAllBuildings')
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
    
   
  }, deps
);
  
  return response;
};

export default useGetBuiding;