import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col">
      {/* Фоновое изображение */}
      <img
        src="/images/background.jpg" // Убедись, что файл находится в public/images/
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Контейнер для контента поверх картинки */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Верхняя часть - Navbar */}
        <Navbar />

        {/* Центральный текст */}
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Dulson Group</h1>
        </div>

        {/* Нижняя часть - юридическая информация */}
        <div className="relative bottom-0 w-full text-center bg-black bg-opacity-50 py-4 text-white">
          <a href="/impressum" className="mr-4">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
      </div>
    </div>
  );
}