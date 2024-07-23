import { useState, useEffect, DependencyList, Key } from 'react';
import http from '@/Api/api';
import { responce } from '@/Api/type';
import { TeacherLessons, dataModelV2 } from '../model/lessons';

const useGetTeacherLessons = ({page,id,callback,error,deps}:{id:string|null,page:number,error:()=>void,callback:()=>void,deps?: DependencyList | undefined}) => {
  const [response, setResponse] = useState<responce<dataModelV2<TeacherLessons>>>({
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
    http.get(`/users/teacher/lessons/${id}/${page}` ,{
    
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
   }
  }, deps) 
  
  return response;
};

export default useGetTeacherLessons;