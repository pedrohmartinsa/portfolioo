import { Outlet } from "react-router-dom"
import { useState } from "react"
import Nav from "./Components/Nav"
import Footer from './Components/Footer'
import Header from "./Components/Header"




function App() {

  return (
    <>
      <div className='text-primary bg-secondary h-screen'>
          <div className="flex flex-col items-center justify-center pt-4 h-[100%]">
            <div className="border-primary border-2 w-[95vw] h-screen pt-3">
              <Header/>
              <div className="flex items-end justify-center h-[80%]">
                <div className="self-start">
                  <Nav/>
                </div>
                <div className="self-end h-[100vw] overflow-auto">
                  <Outlet/>
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
