
import { Projects } from '@/sanity.types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 import {Card, CardContent} from '@/components/ui/card'
import { getAllProjects } from '@/sanity/lib/projects/getAllProjects';
import { FaArrowAltCircleRight } from 'react-icons/fa';

interface projectProps{
  projects:Projects[]
}

const ProjectsPage =  async({projects}:projectProps) => {
  console.log(projects)

  
  return (
   <section id='projects'>
     <p className='text-center'>My Projects</p>
     <div className='w-[90%] mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
  
       {
        projects.map((item,index)=>{
          return(
          
            <Card key={item._id} className='hover:shadow-lg shadow-white'>
              <CardContent className="flex items-center flex-col justify-between">
                  <div>
                    <p className='font-semibold mb-5'>{item.title}</p>
                    <p className='leading-loose text-sm'>{item.description}</p>
                  </div>
                  <div className='flex justify-between items-center w-full mt-10'>
                    <p className='text-xs text-gray-400'>Posted At {item.created_at}</p>
                    <p className='flex items-center gap-2 text-gray-400 text-xs'>See More <FaArrowAltCircleRight/></p>
                  </div>
              </CardContent>
              
            </Card>
            
            
          )
        })
      }  

     
    </div>
   </section>
  )
}

export default ProjectsPage




// import * as React from "react"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// export function CarouselDemo() {
//   return (
//     <Carousel className="w-full max-w-xs">
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-4xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }
