import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <header className="flex h-screen justify-center items-center">
        <nav>
          <ul className="flex space-x-8">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/test" className="hover:underline">Test</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
