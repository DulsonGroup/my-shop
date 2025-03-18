import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      {/* Верхняя часть - Фоновое видео и контент */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Фоновое видео */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video/dulson.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>

        {/* Контент поверх видео */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <Navbar />
          <h1 className="text-4xl font-bold mt-10 text-white">Dulson Group</h1>
        </div>
      </div>

      {/* Юридическая информация всегда внизу */}
      <div className="text-center text-white text-sm pb-4">
        <a href="/impressum" className="mr-4">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
      </div>
    </div>
  );
}