
import SvgAnimation from '@/components/Nav';
import RectangleAnimation from '@/components/Nav';
import Sidebar from '@/components/Sidebar'
import { Children } from 'react';
import Image from 'next/image';
import production from '@/public/production.png'
export default function Student() {
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
