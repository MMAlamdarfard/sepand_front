import { useState, useEffect } from 'react';
import axios from 'axios';
import {responce} from '@/Api/type'

import http from '@/Api/api';
import { responce_all_unit } from '../model/responce_all_unit';

const useFetchGetUnit = (url:string) => {
  const [responce, setResponce] = useState<responce<responce_all_unit>>({
     data:null,
     err:null,
     isLoading:false,
  });


  useEffect(() => {
    const fetchData = async () => {
      setResponce({
        data:null,
        err:null,
        isLoading:true,
      })  
     
      try {
        const response = await http.get(url);
        setResponce({
          data:response.data,
          err:null,
          isLoading:false,
        })
        
      } catch (err:any) {
        setResponce({
          data:null,
          err:err.toString(),
          isLoading:false,
        })
      } finally {
        if(responce.isLoading){
             setResponce((prev)=>{
            return {
             ...prev,
              isLoading:false,
            }       
          }) 
        }
       
      }
    };

    fetchData();
  }, [url]);
  const { data, isLoading, err } = responce;
  return { data, isLoading, err };
};

export default useFetchGetUnit;