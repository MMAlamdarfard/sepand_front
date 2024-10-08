"use client"
import SvgAnimation from '@/components/Nav';
import RectangleAnimation from '@/components/Nav';
import Sidebar from '@/components/Sidebar'
import { Children, useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

import production from '@/public/production.png'
import { Permission } from '@/Api/admin/permissions/permission_api.';
import { DataEntityPermission, PermissionsResponce } from '@/Api/admin/permissions/model';
import { Button, Link, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from '@nextui-org/react';
import { MdDelete, MdOutlineHolidayVillage } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import CustomInput from '@/components/custom_input';
import CustomTable from '@/components/custom_table/custom_table';
import useApi from '@/Api/main_hook';
import { Bounce, toast, ToastContainer } from 'react-toastify';




const columns = [
  {name: "ردیف", uid: "id",},
  {name: "نام", uid: "name",},
  {name: "کد یکتا", uid: "code"},
  {name: "عملگرها", uid: "actions"},
];
export default function Student() {

const [loading, setLoading] =useState(false) 
const [data, setData] =useState<PermissionsResponce>({}) 
const [error, setError] =useState(null)
const [tryAgain, setTryAgain] =useState(false)

const [loadingAdd, setLoadingAdd] =useState(false) 
const [dataAdd, setDataAdd] =useState<PermissionsResponce>({}) 
const [errorAdd, setErrorAdd] =useState(null)

const addData= useApi(
  {
    apiFunction:async () => {
  
      await Permission.addPermissionsList(
      {
        name: "Ad",
        code: "aa"
      }
    )
   }  
  },
 
)

useEffect(()=>{
  setLoading(true);
  Permission.getPermissionsList().then((data)=>{
    setLoading(false);
    setData(data.data as PermissionsResponce);
  }).catch((err)=>{
    setLoading(false) 
    setError(err) // handle error here
  })   
},[tryAgain])


const topContent = useMemo(() => {
   
  return (
    <div className="flex flex-col  items-start  px-5 ">
     
      <p className=" text-black text-3xl  ">
          لیست دسترسی ها
      </p>
      <p className=" text-gray-400  text-lg mt-4">
          {(data?.data??[]).length} دسترسی یافت شد
      </p>

    </div>
  );
}, [
  data
]);


const renderCell = useCallback((unit: DataEntityPermission,index:number,columnKey: React.Key) => {
  switch (columnKey) {
    case "id":
      return (
        <div>{ (index)}.
        </div>
      )
    case "name":
      return (
        <span className=' text-medium '>
          {(unit.Name)}
          
         
        </span>
      );
    case "code":
        return (
          <span className=' text-medium '>
          {(unit.Code)}    
        </span>
         
          
    ); 
    case "actions":
      return (
        <div className="relative w-full flex-wrap flex justify-center gap-x-2 gap- md:gap-5">
         
          <Tooltip content="ویرایش مجوز ها">
             
             <div className=''>
             <Button 
             color="primary"
             size='sm'
             radius='sm'
             >
               <span className='flex flex-row items-center justify-center'>
               <FaEdit className=' text-lg ml-2' />
                ویرایش
                </span>    
              </Button>
              </div>
          </Tooltip>
          <Tooltip content="حذف مجوز ها">
          <Button 
             color="danger"
             size='sm'
             radius='sm'
             
             >
               <span className=' flex flex-row  items-center justify-center'>
               <MdDelete className=' text-xl  ml-2'/>
                
                حذف
                
                </span>    
              </Button>
          </Tooltip>
         
          
           
        </div>
      );
    default:
      return <div>cellValue</div>;
  }
}, []);
const AddPermissions = useMemo(() => {
   
  return (
    <div className="flex flex-col  items-start  px-5 bg-white mx-5 mt-10 p-5 shadow-md rounded-lg ">
     
      <p className=" text-black text-3xl">
          ثبت دسترسی 
      </p>
      <div className='flex w-full h-[0.5px] mt-5 mb-10'>
        <div className='   w-full h-full  bg-gray-300  md:ml-20 ml-0'>

      </div>
      </div>
      
      <div className='flex flex-col md:flex-row  w-full md:gap-0 gap-y-4'>
        <div className='flex-1'>
         <div className='md:w-4/5 w-full'>
           <CustomInput
             isRequired
             label='نام دسترسی'
             placeholder='نام دسترسی'
             className='lg:w-1/2 w-full lg:px-5 lg:py-5 pt-4'
             onFocus={()=>{
  
         }}
         onChange={(ch)=>{

         }}
        />
        </div>
      
        </div>
      
        <div className='flex-1'>
<div className='md:w-4/5 w-full'>

       
        <CustomInput
         isRequired
         label='کد دسترسی'
         placeholder='کد دسترسی'
         onFocus={()=>{

         }}
         onChange={(ch)=>{

         }}
        />
         </div>
        </div>
       
      </div>
      <div className='mt-10 '>
        <Button color='success' onPress={()=>{
          toast.success(
              <span className=' font-normal  from-neutral-500'>دسترسی با موفقیت ثبت شد</span> 
          );
        }}>
           <span className=' px-10 text-white'> ثبت دسترسی</span>
           
        </Button>
 

      </div>
     
      {/* <p className=" text-gray-400">{(Sessions.data?.results.length??0) } جلسه پیدا شد </p> */}
    </div>
  );
}, [
  // filterValue,
  // statusFilter,
 // visibleColumns,
  // onSearchChange,
  //onRowsPerPageChange,
  // users.length,
  // hasSearchFilter,
 
  
]);
const classNames = useMemo(
  () => ({
    
  
    base: "pb-8",
    wrapper:" shadow-none",
    emptyWrapper:"h-[calc(100vh-300px)]",
    //th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
    
    td: [
      "min-h-10",
      // changing the rows border radius
      // first
      "group-data-[first=true]:first:before:rounded-none",
      "group-data-[first=true]:last:before:rounded-none",
      // middle
      "group-data-[middle=true]:before:rounded-none",
      // last
      "group-data-[last=true]:first:before:rounded-none",
      "group-data-[last=true]:last:before:rounded-none",
    ],
  }),
  [],
);



  return (
    // <div className=" flex flex-col justify-center items-center h-[calc(100vh-200px)]">
      <>
       {AddPermissions}
       {/* <CustomTable>
         <></>
       </CustomTable> */}
<div className="bg-white rounded-lg shadow-md mx-5 my-5">
<div className="overflow-x-auto"> {/* Enables horizontal scroll on small screens */}
    <Table
      isCompact
      isStriped
      aria-label="Example table with custom cells, pagination, and sorting"
      bottomContentPlacement="outside"
      className="min-w-full md:table-auto"
      classNames={classNames}
      topContent={topContent}
      topContentPlacement="inside"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            className="hidden md:table-cell"
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      
      <TableBody
        emptyContent={
          <div className="flex flex-col items-center">
            <span className="text-gray-400">
              {error ?? "داده ای یافت نشد"}
            </span>
            <Button
              variant="light"
              size="lg"
              className="border-2 mt-4"
              onPress={() => {
                setTryAgain((pre) => !pre);
              }}
            >
              تلاش مجدد
            </Button>
          </div>
        }
        isLoading={loading}
        items={data.data ?? []}
        loadingContent={<Spinner color="secondary" />}
      >
       {(data.data ?? []).map((rowData, index) => (
          <TableRow key={rowData._id} className="h-auto md:h-12 border-b transition-all duration-250">
            {(columnKey) => (
              <TableCell className="block md:table-cell text-sm">
                {/* Display column header as a label on mobile */}
                <div className="block md:hidden text-xs text-gray-500 font-semibold uppercase">
                {renderCell(rowData, index, columnKey)}
                </div>
                <div className="mt-1 hidden md:block ">
                  {renderCell(rowData, index + 1, columnKey)}
                </div>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
</div>



      {/* <Image
          src={production}
          alt='production'
          height={150}
        />
      <h1 className=' font-bold text-gray-700 p-5'   > درحال توسعه    </h1> */}
   </>
  );
}
