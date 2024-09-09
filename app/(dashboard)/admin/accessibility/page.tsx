"use client"
import SvgAnimation from '@/components/Nav';
import RectangleAnimation from '@/components/Nav';
import Sidebar from '@/components/Sidebar'
import { Children, useEffect } from 'react';
import Image from 'next/image';
import production from '@/public/production.png'
import { Permission } from '@/Api/admin/permissions/permission_api.';





export default function Student() {
useEffect(()=>{
  Permission.getPermissionsList().then((data)=>{
   console.log(data);
  }).catch((err)=>{
    console.log(err);  // handle error here
  })
   

},[])

  return (
    <div className=" flex flex-col justify-center items-center h-[calc(100vh-200px)]">
      <Image
          src={production}
          alt='production'
          height={150}
        />
      <h1 className=' font-bold text-gray-700 p-5'   > درحال توسعه    </h1>
  </div>
  );
}
