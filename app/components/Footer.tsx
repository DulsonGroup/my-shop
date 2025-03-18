import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="absolute bottom-4 left-0 w-full flex justify-center">
      <div className="bg-gray-800 bg-opacity-80 text-white px-6 py-2 rounded-lg">
        <Link href="/imprint" className="mx-3 hover:underline">Impressum</Link> | 
        <Link href="/privacy" className="mx-3 hover:underline">Datenschutz</Link>
      </div>
    </footer>
  );
}
