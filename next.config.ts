/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Включает поддержку статического экспорта
  trailingSlash: true, // Добавляет слэш в конец URL (исправляет возможные ошибки)
  images: { unoptimized: true } // Отключает оптимизацию изображений (важно для экспорта)
};

export default nextConfig;