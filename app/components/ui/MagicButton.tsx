import { animate } from "framer-motion";
import React, { ReactNode } from "react";

interface MagicButtonProps{
  title:string
  icon:ReactNode
  position:'left'|'right'
  handleClick?:()=>void
  whatsapp?:boolean
  otherClasses?:string
}

const MagicButton = ({title,icon,position,handleClick,otherClasses,whatsapp=false}: MagicButtonProps) => {
  return (
    <button className="relative inline-flex h-12 w-full overflow-hidden
     rounded-lg p-[1px] focus:outline-none md:w-60"
     onClick={handleClick}
     >
      <span className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] ${whatsapp ? 'bg-[conic-gradient(from_90deg_at_50%_50%,#dcfce7_0%,#25d366_50%,#dcfce7_100%)]':'bg-[conic-gradient(from_90deg_at_50%_50%,#bfdbfe_0%,#075985_50%,#bfdbfe_100%)]'}`} />
      <span className={`inline-flex h-full w-full gap-2 cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
