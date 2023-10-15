import Link from 'next/link';

export default function NavBar() {
    return (
        <div>
            <ul className="flex space-x-8">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/auth" className="hover:underline">Auth</Link></li>
            </ul>
        </div>
    )
}