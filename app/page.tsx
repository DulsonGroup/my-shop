import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col">
      {/* Фоновое видео с 16:9 */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto max-h-screen aspect-video"
        >
          <source src="/video/dulsongroup.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео-тег.
        </video>
      </div>

      {/* Контейнер для контента поверх видео */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Верхняя часть - Navbar */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Нижняя часть - юридическая информация */}
        <div className="relative bottom-0 w-full text-center py-4 text-white">
          <a href="/impressum" className="mr-4">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
      </div>
    </div>
  );
}