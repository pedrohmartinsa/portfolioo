import { useState } from "react"
import emailjs from '@emailjs/browser'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Contact() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    
    const handleContato = (e) => {

        e.preventDefault()

        if (nome === '' || email === '' || mensagem === '') {
            alert('Preencha todos os campos.')
            return;
        }

        const templateParams = {
            from_name: nome,
            mensagem: mensagem,
            email: email
        }

        emailjs.send('service_97jqdmk', 'template_khbszyo', templateParams, '43TBQJWHZMtb3aCMF')
        .then((response) => {
            console.log('Email enviado!', response.status, response.text)
            setNome('')
            setEmail('')
            setMensagem('')

            }, (err) => {
                console.log('ERRO: ', err)
            })

}

    return(
        <>
        <div className="ml-2 flex flex-col items-center gap-6 h-auto md:h-0">

                <h3 className="text-lg font-bold">Caso queira me contatar, basta preencher os campos abaixo.</h3>

                <form onSubmit={handleContato} className="flex flex-col items-start" required>
                    
                    <div className="flex flex-col">

                        <label htmlFor="nome">Nome:</label>
                        <input 
                            type="text" 
                            placeholder="Nome..."
                            id="nome"
                            className="text-primary border-primary bg-secondary border rounded-md h-8 "
                            value={nome}
                            onChange={e => setNome (e.target.value)}
                            />

                    </div>

                    <div className="flex flex-col">

                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            placeholder="Email..."
                            id="nome"
                            className="text-primary border-primary bg-secondary border rounded-md h-8"
                            value={email}
                            onChange={e => setEmail (e.target.value)}
                            />

                    </div>

                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea  
                        id="mensagem"
                        placeholder="Mensagem..."
                        cols="30"
                        rows="10"
                        className="text-primary bg-secondary border border-primary rounded-md w-48 md:w-auto"
                        value={mensagem}
                        onChange={e => setMensagem (e.target.value)}
                    >

                    </textarea>
                
                    <button type="submit" className="bg-secondary mt-5 text-primary self-end w-24 h-10 hover:text-secondary hover:bg-primary border border-primary rounded-md mr-3">Enviar</button>

                </form>
                <h3 className="text-lg font-bold">Ou, me acompanhe em minhas redes mais ativas:</h3>
                <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/pedrohmas/">
                            <FaLinkedin size={50}/>
                        </a>

                        <a href="https://www.github.com/pedrohmartinsa/">
                            <FaGithubSquare size={50}/>
                        </a>

                        <a href="https://www.instagram.com/pedroo_hmas/">
                            <AiFillInstagram  size={50}/>
                        </a>
                </div>

        </div>
        </>
    )
}