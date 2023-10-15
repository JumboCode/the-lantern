import NavBar from '../components/Navbar'
export default function Home() {
  return (
    <div>
      <header className="flex flex-col h-screen justify-center items-center">
          <p>Hi Lantern Club!! This is the default page aka homepage of the website</p>
          <NavBar/>
      </header>
    </div>
  )
}
