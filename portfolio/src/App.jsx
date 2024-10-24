import { Outlet } from "react-router-dom"
import { useState } from "react"
import Nav from "./Components/Nav"
import Footer from './Components/Footer'
import Header from "./Components/Header"




function App() {

  return (
    <>
      <div className='text-primary bg-secondary'>
          <div className="flex flex-col items-center justify-center pt-4 h-full">
            <div className="flex flex-col justify-between border-primary border-2 w-[95vw] h-screen pt-3">
              <Header/>
              <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 justify-between h-[85%]">
                <div className="h-[90%] w-auto overflow-auto md:col-start-2 md:col-end-4">
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
