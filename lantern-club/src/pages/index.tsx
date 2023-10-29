import NavBar from '../components/Navbar'
import Header from '../components/Header'
export default function Home() {
  return (
    <div>
      <header className="flex flex-col h-screen justify-center items-center">
          <p>Hi Lantern Club!! This is the default page aka homepage of the website</p>
          <Header title="The Lantern"/>
          <NavBar/>
      </header>
    </div>
  )
}
