import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-center space-x-4">
      <Link href="/parfum">Dulson Parfum</Link>
      <Link href="/digital">Dulson Digital</Link>
      <Link href="/">Dulson Group</Link> {/* Это главная страница */}
      <Link href="/art">Dulson Art</Link>
      <Link href="/immobilien">Dulson Immobilien</Link>
    </nav>
  );
}