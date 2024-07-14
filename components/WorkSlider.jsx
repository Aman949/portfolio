"use client"
import { useSwiper } from "swiper/react"
import {PiCaretLeftBold,PiCaretRightBold} from "react-icons/pi"
const WorkSlider = ({containerStyles}) => {
    const swiper = useSwiper()
  return (
    <div className={containerStyles} >
        <button className="text-white bg-white/30  hover:bg-accent h-[30px] w-[60px] pl-5 mr-96 " onClick={()=>swiper.slidePrev()}><PiCaretLeftBold  /></button>
        <button className="text-white bg-white/30 hover:bg-accent h-[30px] w-[60px] pl-5  mr-10" onClick={()=>swiper.slideNext()}><PiCaretRightBold /></button>
        </div>
  )
}

export default WorkSlider