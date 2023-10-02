import Link from 'next/link';

export default function NavBar() {
    return (
        <div>
            <ul className="flex space-x-8">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/profile" className="hover:underline">Profile</Link></li>
                <li><Link href="/magazine" className="hover:underline">Magazine</Link></li>
                <li><Link href="/events" className="hover:underline">Events</Link></li>
            </ul>
        </div>
    )
}