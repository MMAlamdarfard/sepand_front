import React, { ReactNode } from "react";
import {Popover, PopoverTrigger, PopoverContent, Button, Input} from "@nextui-org/react";

export default function CustomInput({
    error,
    label,
    type,
    endContent,
    onFocus,
    onChange,
    className,
    placeholder,
    isRequired,
  }:{error?:string|null,
    label?:string,
    className?:string,
    endContent?: ReactNode,
    type?:string|null,
    isRequired?:boolean,
    
    placeholder?:string,
    onFocus:()=>void,
    onChange:(data:string)=>void} ) {
  const [isltr, setisltr] = React.useState(false);

  return(
   
   
    <div className="flex flex-col">
      <span className=" flex items-center  mb-1 text-black/80 text-sm">{label}
      {isRequired? <span className="text-red-600 text-lg">*</span>:<></>}
      </span> 
   <Input 
    dir={isltr?'ltr':'rtl'}
    color='primary'
    variant="bordered" 
    errorMessage={error}
    placeholder={placeholder}
    isInvalid={error!=null}
    radius="sm"
    
    
    className={` w-full`}
    onFocus={onFocus}
    type={type??"text"}
    endContent={endContent}
    
    onChange={(v)=>{
     setisltr(!containsPersianDigitsAndAlphabet(v.target.value))  
     onChange(v.target.value);
    }}
    classNames={
     {
      label: "text-black/50",
   
      inputWrapper:'h-12'
     }
    } />

    </div>
    
   
    
  );
}
function containsPersianDigitsAndAlphabet(input: string): boolean {
    const persianDigitsRegex = /[۰-۹]/;
    const persianAlphabetRegex = /[\u0600-\u06FF]/;
  
    return input.length==0||persianDigitsRegex.test(input) || persianAlphabetRegex.test(input);
  }