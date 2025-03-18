import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between">
      {/* Фоновое видео */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/video/dulson.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>

      {/* Верхняя навигация */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Контент по центру */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold mt-10 text-white">Dulson Group</h1>
      </div>

      {/* Юридическая информация всегда внизу */}
      <div className="relative z-10 text-center text-white text-sm pb-4 bg-opacity-50 bg-black w-full py-2">
        <a href="/impressum" className="mr-4">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
      </div>
    </div>
  );
}