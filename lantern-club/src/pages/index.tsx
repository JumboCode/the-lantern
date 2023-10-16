import NavBar from '../components/Navbar'
import Button from '../components/Button'
export default function Home() {
  return (
    <div>
      <header className="flex flex-col h-screen justify-center items-center">
          <p>Hi Lantern Club!! This is the homepage of the website</p>
          <NavBar/>
          <Button label="TELL ME THE WEATHER" />
      </header>
    </div>
  )
}
