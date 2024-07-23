"use client"
import {Avatar} from "@nextui-org/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { CiLogout } from "react-icons/ci";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const items = [
    {
      key: "logout",
      label: "خروج",
    }
  ];
  return (
    <div className="flex flex-row h-20 bg-white mb-4 justify-between items-center pe-6 shadow-card">
      <div className=" flex-1 flex justify-start items-end h-full  ">
       
      </div>
      
      <Dropdown>
      <DropdownTrigger>
      <div className="flex flex-row gap-2 cursor-pointer"> 
       <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" size="md" />
        <div className="flex flex-col justify-center ">
          <div className="text-black text-sm">
            <span>محمد مهدی علمدار فرد</span>
          </div>
          <div className="text-slate-500 text-xs flex flex-row items-center">
            <span>ادمین</span>
            <MdOutlineKeyboardArrowDown className="text-slate-500 text-xs" />
          </div> 
        </div>
        </div>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            color={item.key === "logout" ? "danger" : "primary"}
            className={item.key === "logout" ? "text-danger" : ""}
            startContent={<CiLogout className={"text-danger text-medium "} />}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
       
     
    </div>
  );
};

export default NavBar;
