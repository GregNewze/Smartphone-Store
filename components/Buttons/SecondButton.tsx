'use client'
import { ReactElement } from "react";

type TextButton = {
    text?:string;
    icon?: ReactElement;
    type?: 'button'| 'submit' | 'reset';
    onclick?: ()=> void;
}


export default function SecondButton({text,icon,type='button',onclick}:TextButton){
    return(
       <button 
          type={type}
          onClick={onclick}
          className="border-2 border-green-500 text-green px-5 py-2 rounded-full flex justify-center items-center hover:bg-green-100 hover:transition ease-in-out delay-100"
       >
          {text && <span className="mr-2">{text}</span>}
          {icon}
       </button>
    );
}