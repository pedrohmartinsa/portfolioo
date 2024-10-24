import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return(
        <>
            <footer className="flex justify-between text-primary w-full px-2">

                <h3 className="text-xs font-bold text-slate-700">Copyright © PH</h3>

                <div className="flex justify-between gap-x-5 text-primary">

                    <a href="https://www.linkedin.com/in/pedrohmas/">
                        <FaLinkedin size={20}/>
                    </a>

                    <a href="https://www.github.com/pedrohmartinsa/">
                        <FaGithubSquare size={20}/>
                    </a>

                    <a href="https://www.instagram.com/pedroo_hmas/">
                        <AiFillInstagram  size={20}/>
                    </a>

                    <a href="mailto:pedroshenriquepsantos@gmail.com">
                        <MdEmail size={20}/>
                    </a>

                </div>

                

            </footer>
            
        </>
    )
}