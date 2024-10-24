import { Outlet } from "react-router-dom"
import { useState } from "react"
import Nav from "./Components/Nav"
import Footer from './Components/Footer'
import Header from "./Components/Header"




function App() {


  'h-[80%] w-[100%] overflow-auto md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3'

  return (
    <>
      <div className='text-primary bg-secondary h-full'>
          <div className="flex flex-col items-center justify-center pt-4">
            <div className="flex flex-col justify-between border-primary border-2 w-[95vw] h-screen p-5">
              <Header/>
              <div className="flex flex-col justify-between gap-4 items-center md:grid md:grid-cols-[100px_auto_auto] md:grid-rows-2 h-[85%]">
              
                <div className="w-[100%] h-[70%] md:absolute md:bottom-0 md:right-0 md:w-[75vw] overflow-y-scroll md:h-[70%] md:pl-0 md:p-7 md:mr-4">
                  <Outlet/>
                </div>
                <div className="md:col-start-1 md:row-start-1">
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
