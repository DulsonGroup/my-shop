import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col">
      {/* Контейнер с фиксированным 16:9 */}
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video"
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