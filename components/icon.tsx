import { IoSchool } from "react-icons/io5";
import { MdOutlineCalendarMonth, MdPlayLesson } from "react-icons/md";
import { FaMoneyBillTransfer, FaUserGear } from "react-icons/fa6";
import { BsFillBuildingsFill } from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";
import { GrUserAdmin } from "react-icons/gr";
import { RiAdminFill } from "react-icons/ri";
import { FaFileContract, FaTruckLoading, FaUserEdit } from "react-icons/fa";
const MyIcon=({type,isSelected=false}:{type:string,isSelected?:boolean})=>{
  let className:string =`transition-all duration-300 group-hover:text-sepandprimary-900  ${isSelected?'text-sepandprimary-900':' text-gray-700'}`;
  switch (type) {
    case "admin":
        return <RiAdminFill   className= {className}/>;                      
    // case "school":
    //   return <IoSchool className= {`transition-all duration-300 group-hover:text-purple-800 ${isSelected?'text-purple-800':''}`}/>;
    case "dashboard":
      return <BiSolidDashboard className= {className}/>;
    // case "term":
    //     return <MdOutlineCalendarMonth className= {`transition-all duration-300 group-hover:text-purple-800 ${isSelected?'text-purple-800':''}`}/>;   
    case "attend":
      return <FaUserEdit className= {className}/>;     
    case "user":
        return <FaUserGear className= {className}/>;
    case "contract":
        return <FaFileContract className= {className}/>;          
    case "bill":
        return <FaTruckLoading className= {className}/>; 
    case "Accounting":
        return <FaMoneyBillTransfer  className= {className}/>;              
             
        
    // 
    // case "building":
    //     return <BsFillBuildingsFill className= {`transition-all duration-300 group-hover:text-purple-800 ${isSelected?'text-purple-800':''}`}/>; 
    // case "course":
    //     return <MdPlayLesson className= {`transition-all duration-300 group-hover:text-purple-800 ${isSelected?'text-purple-800':''}`}/>;                      
    
   default:
      return <></>;
    
  }
}
export default MyIcon;