import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <Navbar />
        <h1 className="text-4xl font-bold mt-10">Dulson Group</h1>
        <Footer />
      </div>
    </div>
  );
}
