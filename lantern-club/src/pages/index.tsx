import React from 'react'
import NavBar from '../components/Navbar'
import Header from '../components/Header'
export default function Home() {
  return (
    <div>
      <header className="flex flex-col h-screen justify-center items-center">
          {/* <NavBar/> */}
          <Header title="The Lantern"/>
      </header>
    </div>
  )
}
