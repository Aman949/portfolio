"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
const Nav = () => {
    const links = [{
        name:"Home",
        path:"/"
    },
    {
        name:"Resume",
        path:"/resume"
    },
    {
        name:"Work",
        path:"/work"
    },
    {
        name:"Contact",
        path:"/contact"
    }
]
const pathname = usePathname()
  return (
    <nav className="flex gap-8">
{
    links.map((link,index)=>{
        return <Link href={link.path} key={index} className={`${link.path == pathname && 'text-accent border-accent border-b-2'}
       capitalize font-medium hover:text-accent transition-all ` 
    }>{link.name}</Link>
    })
}
    </nav>
  )
}

export default Nav