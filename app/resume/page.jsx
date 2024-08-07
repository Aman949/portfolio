"use client"
import {FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs} from "react-icons/fa"
import {SiTailwindcss,SiNextdotjs} from "react-icons/si"
import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs'
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip'
import {ScrollArea} from '@/components/ui/scroll-area'
import {delay, motion} from 'framer-motion'

const about = {
  title:"About me",
  description :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quisquam necessitatibus facere unde consectetur accusamus hic fuga ut, a sapiente debitis placeat sunt obcaecati rem esse porro id deleniti laborum!",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Aman Bhandari"
    },
    {
      fieldName:"Phone",
      fieldValue:"(+91) 8171455246"
    },
    {
      fieldName:"Nationality",
      fieldValue:"Indian"
    },
    {
      fieldName:"Email",
      fieldValue:"amanbhandari351@gmail.com"
    },
    {
      fieldName:"Languages",
      fieldValue:"Hindi,English"
    }
  ]
}

const education = {
  icon:"/assets/assets/resume/cap.svg",
  title:"My Education",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, cumque nesciunt ab atque et similique non accusamus? Architecto commodi ullam aspernatur harum iure minima maxime assumenda, obcaecati voluptatibus quidem vitae.",
  items:[
    {
      institution:"Graphic Era Hill University",
      degree:"Bachelors in computer applications",
      duration:"2019-2022"
    },
    {
      institution:"Graphic Era Hill University",
      degree:"Masters in computer applications",
      duration:"2022-2024"
    }
  ]
}

const skills = {
  title:"My Skills",
  description: "Lorem, ipsum dolor sit amet itaque alias id, aliquid a dolor sint, non deleniti maxime unde debitis voluptatem veritatis doloremque!",
   skillList:[{
    icon:<FaHtml5/>,
    name:"html5"
   },
   {
    icon:<FaCss3/>,
    name:"css3"
   },
   {
    icon:<FaJs/>,
    name:"javascript"
   },
   {
    icon:<FaReact/>,
    name:"reactjs"
   },
   {
    icon:<SiTailwindcss/>,
    name:"tailwindcss"
   },
   {
    icon:<SiNextdotjs/>,
    name:"nextjs"
   }
  ]
}

const Resume = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeInOut"}}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0  "
    ><div className="container mx-auto">
      <Tabs defaultValue="education" className=" flex flex-col xl:flex-row gap-[60px] ">
        <TabsList className="flex flex-col w-full max-w-[380px]  mx-auto xl:mx-0 gap-6">
          <TabsTrigger value = "education">Education</TabsTrigger>
          <TabsTrigger value = "skills">Skills</TabsTrigger>
          <TabsTrigger value = "about">About me</TabsTrigger>
        </TabsList>
        <div className="min-h-[70vh] w-full">
    <TabsContent value="education" className="w-full">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold ">{education.title}</h3>
        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
        <ScrollArea className="h-[400px]">
         <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
           {
            education.items.map((item,index)=>{
                return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                flex flex-col justify-center items-center lg:items-start gap-1 ">
                  <span className="text-accent">{item.duration}</span>
                  <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                  <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-white/60">{item.institution}</p>
                  </div>

                </li>
            })
           }
         </ul>
        </ScrollArea>
      </div>
      </TabsContent>
    <TabsContent value="skills" className="w-full h-full">
      <div className="flex flex-col gap-[30px]"> 
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold ">{skills.title}</h3>
       <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-8">{skills.description}</p>
      </div>
       </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:gap-[30px] gap-4">
        {
          skills.skillList.map((item,index)=>{
             return <li key={index}>
              <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                  <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="capitalize">{item.name}</p>
                </TooltipContent>
              </Tooltip>
              </TooltipProvider>
             </li>
          })
        }
      </ul>
      </TabsContent>
    <TabsContent value="about" className="w-full text-center xl:text-left">
         <div className="flex flex-col gap-[30px]">
          <h3 className="text-4xl font-bold">{about.title}</h3>
          <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
          <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
            {
              about.info.map((item,index)=>{
                 return (
                  <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">{item.fieldName}</span>
                    <span className="text-xl">{item.fieldValue}</span>
                  </li>
                 )
              })
            }
          </ul>
         </div>
      </TabsContent>

        </div>
      </Tabs>
      </div></motion.div>

  )
}

export default Resume