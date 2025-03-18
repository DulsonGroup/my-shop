import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full text-white p-4 flex justify-center space-x-4 z-20">
      <a href="https://dulsonparfum.com" target="_blank" rel="noopener noreferrer">
        Dulson Parfum
      </a>
      <Link href="/digital">Dulson Digital</Link>
      <Link href="/">Dulson Group</Link> {/* Это главная страница */}
      <Link href="/art">Dulson Art</Link>
      <Link href="/immobilien">Dulson Immobilien</Link>
    </nav>
  );
}