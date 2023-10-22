import NavBar from '../components/Navbar'
import MyButton from '../components/Button'
export default function Home() {
  return (
    <div>
      <header className="flex flex-col h-screen justify-center items-center">
          <p>Hi Lantern Club!! This is the default page aka homepage of the website</p>
          <NavBar/>
          <MyButton label="WOWEE"/>
      </header>
    </div>
  )
}
