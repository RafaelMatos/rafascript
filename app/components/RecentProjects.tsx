import { projects } from "@/data"
import { PinContainer } from "./ui/3d-pin"
import { title } from "process"
import { div } from "three/examples/jsm/nodes/Nodes.js"
import { FaLocationArrow } from "react-icons/fa6"
import Link from "next/link"



const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Uma pequena seleção de {' '}
        <span className="text-sky-300">projetos recentes</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        { projects.map(({id,des,iconLists,img,link,title})=> (
          <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center
           justify-center sm:w-[570px] w-[80vw]">
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px]
               w-[80vw]  overflow-hidden  h-[30vh] sm:h-[40vh]  mb-10">
                <div className="relative w-full h-full overflow-hidden rounded-3xl bg-[#13162d]">
                  <img src='/bg.png' alt='bg-img' />
                </div>
                <img src={img} alt={title} 
                  className="z-10 absolute bottom-0 "
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">{des}</p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon,index)=>(
                    <div key={icon} className="border border-sky-200/[0.2] flex
                     justify-center items-center rounded-full bg-black 
                     lg:w-10 lg:h-10 w-8 h-8"
                     style={{
                      transform:`translateX(-${5 * index * 2}px)` 
                     }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <Link href={link} target="_blank">
                <div className="flex items-center justify-center">
                  <p className="flex lg:text-base md:text-xs text-sm text-sky-200">Acessar aplicação</p>
                  <FaLocationArrow className="ms-3" color="#bae6fd"/>
                </div>
                </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects