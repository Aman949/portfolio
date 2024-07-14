'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSlider from '@/components/WorkSlider';

const projects = [
  {
    num: '01',
    category: 'Frontend',
    title: 'Gym Website',
    description: 'A gym website developed with React offers a modern and responsive user experience, leveraging the power of Reacts component-based architecture',
    stack: [{ name: 'Reactjs' }, { name: 'tailwind' }],
    image: '/assets/assets/work/gym.png',
    live: 'https://gym-app-main-etkphgnxv-amans-projects-b6b0488a.vercel.app/',
    github: 'https://github.com/Aman949/gymApp',
  },
  {
    num: '02',
    category: 'Frontend',
    title: 'Password Generator',
    description: 'A password generator made with React is a web application designed to create strong, random passwords to enhance security',
    stack: [{ name: 'Reactjs' }, { name: 'tailwind' }],
    image: '/assets/assets/work/pass.png',
    live: 'https://passgen-qga1cgk9g-amans-projects-b6b0488a.vercel.app/',
    github: 'https://github.com/Aman949/Project/tree/main/passGEn/first',
  },
  {
    num: '03',
    category: 'Full Stack',
    title: 'Authentication using nextjs',
    description: 'User authentication in a Next.js application is essential for securing user data and providing a personalized experience',
    stack: [{ name: 'Nextjs' }, { name: 'tailwind' }, { name: 'mongodb' }],
    image: '/assets/assets/work/auth.png',
    live: 'https://auth-a1cgk9g-amans-projects-b6b0488a.vercel.app/',
    github: 'https://github.com/Aman949/nextauth',
  },
  {
    num: '04',
    category: 'Frontend',
    title: 'Ai content Generator',
    description: 'An AI content generator built with Next.js is a sophisticated application that leverages the capabilities of artificial intelligence to create, modify, and optimize content dynamically',
    stack: [{ name: 'Nextjs' }, { name: 'tailwind' }, { name: 'typescript' }],
    image: '/assets/assets/work/ai.png',
    live: 'https://ai-gcgk9-amans-projects-b6b0488a.vercel.app/',
    github: '',
  },
];

const Work = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentProjectIndex(swiper.activeIndex);
  };

  const project = projects[currentProjectIndex];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 , transition:{delay:2.4,duration:0.4,ease:"easeInOut"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.num}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize pb-5">
                  {project.category}
                </h2>
                <p className="text-white/60 text-lg pb-2">{project.description}</p>
                <ul className="flex gap-4 pb-2">
                  {project.stack.map((item, index) => (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20"></div>
                <div className="mt-10 flex items-center gap-4">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index} className='w-full '>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    <div className='absolute top-0 bottom-0 w-full h-full  bg-black/10 z-10'></div>
                     <div className='relative w-full h-full'>
                      <Image src={project.image} fill className='object-cover' />
                     </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSlider containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20
              w-full justify-between xl:w-max xl:justify-none
              "  />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
