"use client"
import {Avatar,  Button,  Card,  CardBody,  CardFooter,  CardHeader,  CircularProgress,  Popover, PopoverContent, PopoverTrigger, User} from "@nextui-org/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { CiLogout } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import useGetMe from "@/Api/me/hooks/get_me";


const NavBar = ({open,onOpen}:{open:boolean,onOpen:(isOpen:boolean)=>void}) => {
 
   var responce = useGetMe({
    deps:[]
   })



  return (
   
   
   <div className={`z-30 fixed  flex flex-row lg:h-20 h-14 bg-white  justify-between items-center shadow-card`}>
     <div className=" flex  justify-between items-center w-screen">
      <div className=" w-20 flex   h-full  ">
       <div className="lg:hidden mx-5  flex justify-center items-center">
        <button onClick={
          () => {
           
             onOpen(true);
  
          }
        }>
           <FiMenu   className=" text-3xl  "/>
        </button>  
       </div>
      </div>
    <div className=" flex flex-row w-full items-center justify-end pl-15">

   
    { responce.isLoading? 
     <CircularProgress color="default" aria-label="Loading..."/>:
     <Popover showArrow placement="bottom">
      <PopoverTrigger>
        
      
          <User   
          as="button"
          
          name={(responce.data?.Name??"") +" "+(responce.data?.LastName??"")}
          description={responce.data?.Title??""}
          className="transition-transform "
          // avatarProps={{
          //   src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
          // }}
          />
         
        
      </PopoverTrigger>
      <PopoverContent className="p-1">
      <Card shadow="none" className="max-w-[300px] border-none bg-transparent">
      <CardHeader className="justify-between gap-8">
        <div className="flex gap-3">
          <Avatar isBordered radius="full" size="md"  />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{(responce.data?.Name??"") +" "+(responce.data?.LastName??"")}</h4>
            <h5 className="text-small tracking-tight text-default-500">{responce.data?.Title??""}</h5>
          </div>
        </div>
        <Button
         
          color="danger"
          radius="full"
          size="sm"
          startContent={
            <CiLogout />
          } 
          variant={"bordered"}
          onPress={() => {
            sessionStorage.removeItem('access')
            sessionStorage.removeItem('refresh')
            window.location.href='/login'
          }}
        >
           خروج
        </Button>
      </CardHeader>
     
    </Card>
      </PopoverContent>
    </Popover> } <div className=" w-12"></div>
     </div>
       
      </div>
    </div>
  );
};

export default NavBar;
