import { NavLink } from "react-router-dom";
import { CiLink } from "react-icons/ci";
import { MdHomeFilled } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { PiCertificateFill } from "react-icons/pi";
import { MdLocalPostOffice } from "react-icons/md";

export default function Nav() {


    return(
        <>
            <div className="flex justify-between gap-12 w-auto md:flex-col md:h-72 md:justify-between md:text-[18px] font-bold transition-all duration-300">

                <NavLink className='relative md:hover:text-slate-500' to='/'>
                    <span className="absolute opacity-0 md:opacity-100">Home</span>
                    <span className="absolute md:opacity-0"><MdHomeFilled size={35}/></span>
                </NavLink>

                <NavLink className='md:hover:text-slate-500' to='about'>
                    <span className="absolute opacity-0 md:opacity-100">About</span>
                    <span className="absolute md:opacity-0"><IoPersonSharp size={35}/></span>
                </NavLink>

                <NavLink className='md:hover:text-slate-500' to='projects'>
                    <span className="absolute opacity-0 md:opacity-100">Project</span>
                    <span className="absolute md:opacity-0"><AiFillProject size={35}/></span>
                </NavLink>

                <NavLink className='md:hover:text-slate-500' to='certificates'>
                    <span className="absolute opacity-0 md:opacity-100">Certificates</span>
                    <span className="absolute md:opacity-0"><PiCertificateFill size={35}/></span>
                </NavLink>

                <NavLink className='md:hover:text-slate-500' to='contact'>
                    <span className="absolute opacity-0 md:opacity-100">Contact</span>
                    <span className="absolute md:opacity-0"><MdLocalPostOffice size={35}/></span>
                </NavLink>

                <a className="flex items-center justify-center border border-primary w-11 h-10 rounded-2xl gap-2 font-bold cursor-pointer hover:text-secondary hover:bg-primary" href="https://github.com/pedrohmartinsa/Portfo">
                        <CiLink size={25}/>
                </a>
            </div>
        </>
    )
}