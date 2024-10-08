
"use client"

import { useState,useEffect,useRef, MutableRefObject } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { AiOutlinePushpin } from 'react-icons/ai';
import side_data from '@/input/sidebar_input';
import Image from 'next/image';
import Logo from '@/public/logo.png'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import MyIcon from './icon';
import { IoClose } from "react-icons/io5";
// type Menus = [{

//   title: string;
//   childeren:[
//    {
//      title: string;
//      submenu?:[
//        {
//          title?: string;
//        }
//      ]
//    }
//   ];
// }]

const Sidebar= ({open,onOpen}:{open:boolean,onOpen:(isOpen:boolean)=>void}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const pathname = usePathname();
  useEffect(() => {
    refs.current = Array(side_data.length).fill(null);
  }, [side_data]);

  const handleClick = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    
  };

  useEffect(() => {
    refs.current.forEach((ref, index) => {
      if (ref) {
        if (index == openIndex) {
          ref.style.height = `${ref.scrollHeight}px`;
        } else {
          ref.style.height = '0';
        }
      }
    });
  }, [openIndex,side_data]);
  console.log(open)
  return (
    <div className={`fixed z-50 ${open? 'lg:mr-0 mr-0':'-mr-64 lg:mr-0'} transition-all duration-400`}>
    <div className="flex flex-col bg-white h-screen w-64 rounded-bl-3xl shadow-sidebarr">
      <div className=' flex flex-row items-center w-full py-3  px-2 shadow-top-sidebar h-20'>
       <Image
          src={Logo}
          alt='logo'
          height={60}
        />
        <div className={`flex-1 text-sm justify-center ms-2`}>
          <p className=' text-s  font-bold mb-1 '>سامانه  سپند </p>
         
        </div>

        <div className='lg:hidden'>
          <button onClick={
            ()=>{
              onOpen(false)
            }
          } className={`w-10 h-10`}>
            <IoClose className=' text-lg' />
          </button>
        </div>
        
         
      </div>
      
      <div className='flex-1 overflow-auto scrollbar-thumb-rounded'>
        {side_data.map((side,i)=>{
          return (<>
           <p className='mx-4 mt-2'>{side.title}</p>
           <div className='h-[1px] bg-slate-200 mx-4 mt-1 '/>
           <div className='mt-2 '/>
            {side.menu.map((men, j) => (
            <div key={(side.menu.length*i)+j} className="overflow-hidden relative my-1">
           <div className={`flex flex-row justify-center hover:bg-sepandprimary-50   px-8  transition-all duration-300 rounded-md ${(openIndex==(side.menu.length*i)+j)?'bg-sepandprimary-100 ':''}`}>
       
         {!men.sub? <Link onClick={() => {
          handleClick((side.menu.length*i)+j)
          onOpen(false)
          }} className='group relative  flex flex-row items-center flex-1 list-none py-3 select-none text-gray-500' href={men.url??"/"}>
           
          
           {men.icon? <MyIcon type={men.icon} isSelected={(openIndex==(side.menu.length*i)+j)}/>:<></>}
           
           <div className={`bg-sepandprimary-900 h-[calc(100%-10px)] my-[5px]  w-1 rounded-r-xl absolute -left-8  transition-opacity duration-200  opacity-0 group-hover:opacity-100 ${(openIndex==(side.menu.length*i)+j)?'opacity-100':''}`}/>
                  
           <div className={`px-1 group-hover:text-sepandprimary-900 text-gray-700 text-lg  transition-all duration-300 ${(openIndex==(side.menu.length*i)+j)?'text-sepandprimary-900':''}`}>
             {men.menu}
            </div> 
          
            
         
          </Link>:<li onClick={() => {
            handleClick((side.menu.length*i)+j)
            
            }} className='group relative flex flex-row items-center flex-1 list-none py-3 select-none text-gray-500'>
           
          
          {men.icon? <MyIcon type={men.icon} isSelected={(openIndex==(side.menu.length*i)+j)}/>:<></>}
          <div className={`bg-sepandprimary-900   h-[calc(100%-10px)] my-[5px]  w-1 rounded-r-xl absolute -left-8  transition-opacity duration-200  opacity-0 group-hover:opacity-100 ${(openIndex==(side.menu.length*i)+j)?'opacity-100':''}`}/>
            
          <div className={` flex-1 px-1 group-hover:text-sepandprimary-900  transition-all duration-300 ${(openIndex==(side.menu.length*i)+j)?'text-sepandprimary-900':'text-gray-700'}`}>
             {men.menu}
            </div> 
           
        
          {  men.sub? <FaAngleDown className={`m-auto group-hover:text-sepandprimary-900 transition-all duration-300 text-gray-500 transform ${(side.menu.length*i)+j == openIndex?'rotate-180':''}`} />
          :<></>}
          </li>} 
        
          
          </div>
            
            {men.sub? <div
             ref={(el) => { refs.current[(side.menu.length*i)+j] = el; }}
              className={`transition-height duration-100 overflow-hidden h-0 relative `} 
             >
            <div className=" bg-white  before:content-[''] before:absolute before:w-[1px] before:h-full before:bg-gray-400 before:bottom-[15px] before:z-10 before:right-8 ">
              
               <div className='pb-2'></div>

              {men.sub.map((su, k) => (
                <div onClick={
                  ()=>{
                     onOpen(false)
                  }
                } className="relative group">
                  <AiOutlinePushpin className={`text-sepandprimary-900  absolute left-5 opacity-0 bottom-1/2 translate-y-1/2 ${su.url==pathname?'opacity-100':''}`}/> 
          
                  <Link href={su.url??'/'}>
                  
                  <div  key={k} className={`${su.url==pathname?'text-sepandprimary-900':''} group-hover:text-sepandprimary-900  ms-9 py-2 text-sm     transition-all duration-400 rounded-md px-4 text-gray-500  before:content-[''] before:absolute before:top-1/2 before:w-[6px] before:-translate-x-1/2   before:-translate-y-1/2 before:h-[6px] before:m-auto  before:z-20 before:right-7 before:rounded-full after:content-[''] after:absolute after:top-1/2 after:w-[8px] after:-translate-[0.5px]  after:h-[1px] after:m-auto after:bg-gray-400 before:hover:bg-sepandprimary-900  after:z-10 after:right-8 after:rounded-full`}>{su.submenu}</div>
                 </Link>
                
                </div>
                
              ))}
            </div>
          </div>:<></>}
        </div>
         ))}
           </>
          );
        })}
       
         
        
       
        </div>
     
    </div>
    </div>
  );
  //  const [menuItem, setMenuItem] = useState<MenuItem[]>([]);
  //  const [id, setId] = useState<number|null>(null);
  
  // useEffect(()=>{
  //   console.log("aaaaa")
  //    setMenuItem(
  //     [
       
  //     ]
  //    )
  //    console.log(menuItem)
  // },[])
 
  // useEffect(() => {
  //   if(id){
  //     let menu=menuItem[id]
  //     let ref=menu.ref
  //      if(ref){
  //       if (ref.current) {
  //        if (menu.isOpen) {
  //         ref.current.style.height = `${ref.current.scrollHeight}px`;
  //       } else {
  //         ref.current.style.height = '0';
  //        }
  //       }
  //      }
      
  //   }
   
    
  // }, [id,menuItem]);
  // const refs = useRef<(HTMLDivElement | null)[]>([]);

  // useEffect(() => {
  //     refs.
  //     current = Array(numOfDivs).fill(null);
  // }, [numOfDivs]);

  // const handleClick = (index: number) => {
  //     console.log(index)
  //     if (refs.current[index]) {
  //       //setId(index) 
      
  //       Array.from({ length: numOfDivs }).forEach((_,i)=>{
          
  //         let ref = refs.current[index]
  //          if(ref!=null){
  //           if (index==i) {
  //             ref.style.height = `${ref.scrollHeight}px`;
  //           } else {
  //             ref.style.height = '0';
  //           }
  //         }
         
          

  //       })
  //       console.log(`Div ${index + 1} ref:`, refs.current[index]?.scrollHeight);
  //       setId(index)
        
  //     }
  // };

  // return (
  //   <div>
  //       {Array.from({ length: numOfDivs }).map((_, index) => (
  //           <div
  //               key={index}
  //               ref={(el) =>{ 
  //                 (refs.current[index] = el)}
  //               }
  //               onClick={() => handleClick(index)}
  //               // style={{ padding: '20px', margin: '10px', border: '1px solid black' }}
  //           >
  //             <h1>Div {index}</h1>
  //             <div className={` flex flex-col transition-height overflow-hidden relative ml-5 pt-1 ${id==index ? 'h-auto' : 'h-0'}`}>
  //               {Array.from({length:index}).map((_,index1)=>{
  //                 return <div key={index1}>Div {index}  {index1} </div>
  //               })}
  //             </div>
               
  //           </div>
  //       ))}
  //   </div>
//);
  // (
  //   <div className="menu">
  //     <button onClick={() => setId(1)}>
  //       Toggle Sub-Menu
  //     </button>

  //      <div
  //       ref={ ref1.current[0] = el}
  //       className={`sub-menu transition-height overflow-hidden relative ml-5 pt-1 ${true ? 'h-auto' : 'h-0'}`}
  //       >
  //       <div className="p-4 bg-blue-500">
  //         {/* Your sub-menu content here */}
  //       </div>
  //     </div>
  //   // </div>
  // );
  // const [isOpen, setIsOpen] = useState(false);
  // const elementRef = useRef<HTMLDivElement | null>(null);
  // const [height, setHeight] = useState(0);

  // useEffect(() => {
  //   if (elementRef.current) {
  //     setHeight(elementRef.current?.clientHeight);
  //   }
  // }, []);
  // const toggleSubMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  // return (
  //   <div className="bg-white h-screen w-64">
  //       {/* <div>
  //     <div ref={elementRef} className="bg-blue-500 p-4">
  //       This is the element whose height will be measured.
  //     </div>
  //     <p>The height of the above element is: {height}px</p>
  
  //   </div> */}
    
  //     <ul className="py-4">
        
      
      
  //       <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
         
  //         <a href="#" className="text-gray-200">
  //           Menu 1
  //         </a>
  //         <ul className={isOpen ? `h-[${height}px] transition-height duration-500 ease-in-out` : "h-0 transition-height duration-500 ease-in-out"}>
  //           <li className="px-8 py-2 hover:bg-gray-700">
  //             <a href="#" className=" text-black">
  //               Submenu 1
  //             </a>
  //           </li>
  //           <li className="px-8 py-2 hover:bg-gray-700">
  //             <a href="#" className="text-gray-200">
  //               Submenu 2
  //             </a>
  //           </li>
  //         </ul>
  //         <button onClick={toggleSubMenu} className="text-gray-200 ml-2">Toggle Submenu</button>
  //       </li>
  //       <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
  //         <a href="#" className="text-gray-200">
  //           Menu 2
  //         </a>
  //       </li>
  //     </ul>

  //   </div>
  // );
};

export default Sidebar;

