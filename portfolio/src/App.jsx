import { Outlet } from "react-router-dom"
import Nav from "./Components/Nav"
import Footer from './Components/Footer'
import Header from "./Components/Header"




function App() {

  return (
    <>
      <div className='text-primary bg-secondary md:h-screen'>
          <div className="flex flex-col items-center justify-center pt-8 pb-3 h-[100%]">
            <div className="flex flex-col gap-7 justify-between border-primary border-2 w-[95vw] h-screen md:h-[100%] p-5">
              <Header/>
              <div className="flex flex-col justify-between items-center md:grid md:grid-cols-[100px_auto_auto] md:grid-rows-2 h-[80%] md:h-[70%]">
              
                <div className="md:mb-10 md:absolute md:bottom-0 md:right-0 md:w-[75vw] overflow-y-scroll md:h-[80%] md:pl-0 md:p-7 md:mr-16">
                  <Outlet/>
                </div>
                <div className="mt-7 md:col-start-1 md:row-start-1">
                  <Nav/>
                </div>
              </div>
            </div>
              <Footer/>
          </div>
      </div>
    </>
  )
}

export default App
