import { Outlet } from "react-router-dom"
import { useState } from "react"
import Nav from "./Components/Nav"
import Footer from './Components/Footer'
import Header from "./Components/Header"




function App() {

  return (
    <>
      <div className='text-primary bg-secondary h-full'>
          <div className="flex flex-col items-center justify-center pt-4">
            <div className="flex flex-col justify-between border-primary border-2 w-[95vw] h-screen p-5">
              <Header/>
              <div className="flex flex-col justify-between gap-4 items-center md:grid md:grid-cols-[100px_auto_auto] md:grid-rows-2 h-[85%]">
                <div className="h-[80%] w-[100%] overflow-auto md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-3">
                  <Outlet/>
                </div>
                <div className="mb-2 md:col-start-1 md:row-start-1">
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
