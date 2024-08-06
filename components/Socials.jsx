import React from 'react'
import Link from 'next/link'
import{FaGithub,FaLinkedinIn,FaInstagram} from 'react-icons/fa' 
const socials = [
    {
        icon:<FaGithub/>,
        path:"https://github.com/Aman949"
    },
    {
        icon:<FaLinkedinIn/>,
        path:"https://www.linkedin.com/in/aman-bhandari-355560170"
    },
    {
        icon:<FaInstagram/>,
        path:"https://www.instagram.com/amanbhandari_77"
    },
] 
const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {
            socials.map((social,index)=>{
                return <Link key={index} href={social.path} className={iconStyles}>{social.icon}</Link>
            })
        }
    </div>
  )
}

export default Socials
