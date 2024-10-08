'use client';

import NavBar from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import { NextUIProvider } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const CustomTable= ({ children }: { children: React.ReactNode }) => {

  const [isOpen,setIsOpen]=useState(false)
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'Editor' },
    { id: 4, name: 'Sara Wilson', email: 'sara@example.com', role: 'User' },
  ];
  return (
  <div dir='rtl' className="overflow-x-auto border bg-white px-5 pt-16 pb-5 m-5">
    <table  className="min-w-full table-auto border-none">
      <thead>
        <tr className="bg-gray-200">
          <th
            onClick={()=>{}}
            className="cursor-pointer px-6 py-3 text-sm font-semibold text-gray-700 text-right"
          >
            Name
          </th>
          <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Email</th>
          <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Role</th>
        </tr>
      </thead>
      <tbody>
        {data.map((person) => (
          <tr key={person.id} className="hover:bg-gray-100">
            <td className="px-6 py-4  border-gray-300">{person.name}</td>
            <td className="px-6 py-4 border-gray-300">{person.email}</td>
            <td className="px-6 py-4 border-gray-300">{person.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
 
};
export default CustomTable;