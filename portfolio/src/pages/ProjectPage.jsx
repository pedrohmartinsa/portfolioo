import { useParams, Link } from "react-router-dom"
import { IoArrowBackCircle } from "react-icons/io5"
import { CiLink } from "react-icons/ci";

export default function ProjectPage() {

    const {id, nome, sobre, repositorio, site} = useParams()

    const repositorios = {
        culturama: "https://github.com/pedrohmartinsa/culturama",
        cp_web: "https://github.com/pedrohmartinsa/WebDev-CP1-2S",
        prototipo: "https://github.com/pedrohmartinsa/TechMahindra__Prototipo",
        vibra_volt: "https://github.com/pedrohmartinsa/GS"
    }

    const sites = {
        culturama: "",
        cp_web: "https://web-dev-cp-1-2-s.vercel.app/",
        prototipo: "",
        vibra_volt: "https://gs-bice.vercel.app/"
    }

    return(
        <>

            <div className="flex flex-col items-center gap-7">
                <div className="flex items-center justify-center gap-4">
                    <Link to='/projects' className="hover:text-slate-700 mt-1">
                        <IoArrowBackCircle size={30}/>
                    </Link>
                    <h2 className="text-2xl font-bold w-48 ">{nome}</h2>
                </div>
                
                <div className="flex flex-col items-center gap-10">

                    <div className="flex flex-col items-center gap-3">
                        <h3 className="font-bold text-xl">Sobre o Projeto</h3>
                        <p className="text-justify mr-3 w-auto ">{sobre}</p>
                    </div>

                    <div className="flex gap-6">
                        <a className="flex items-center justify-center border border-primary w-36 h-11 rounded-lg gap-2 font-bold cursor-pointer hover:text-secondary hover:bg-primary" href={repositorios[repositorio]}>
                            <CiLink size={25}/>
                            repositório
                        </a>
                        
                        <a className="flex items-center justify-center border border-primary w-36 h-11 rounded-lg gap-2 font-bold cursor-pointer hover:text-secondary hover:bg-primary" href={sites[site]}>
                            <CiLink size={25}/>
                            site
                        </a>
                    </div>



                </div>
            </div>
        </>
    )
}