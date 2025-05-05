import Link from 'next/link';
import { FaHome, FaHeartbeat, FaShieldAlt, FaChevronRight, FaStar, FaHandshake, FaHeadset } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/pattern.svg')" }}></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center bg-white bg-opacity-20 rounded-full w-20 h-20 mb-6">
              <FaShieldAlt className="text-3xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Seguridad <span className="text-yellow-300">Premium</span> para lo que más Importa
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Más de 20 años ofreciendo protección excepcional con un servicio personalizado que marca la diferencia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contacto" className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg">
                Solicitar Asesoría
              </Link>
              <Link href="/servicios" className="bg-transparent hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full border-2 border-white transition duration-300">
                Explorar Servicios
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            NUESTROS PRODUCTOS
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Soluciones de Protección Integral</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Diseñadas para ofrecerte tranquilidad absoluta en cada aspecto de tu vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link href="/aseguradoras/3/auto" className="group">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform group-hover:-translate-y-2 transition duration-500 h-full border-t-4 border-blue-500">
              <div className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Protección Vehicular</h3>
                <p className="text-gray-600 mb-6">
                  Cobertura exclusiva para tu automóvil con beneficios premium.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  Descubre más <FaChevronRight className="ml-2 text-sm" />
                </div>
              </div>
              <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <FaStar className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Cobertura total con deducible reducido</span>
                  </li>
                  <li className="flex items-start">
                    <FaStar className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Asistencia VIP en carretera</span>
                  </li>
                </ul>
              </div>
            </div>
          </Link>

          <Link href="/aseguradoras/3/vivienda" className="group">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform group-hover:-translate-y-2 transition duration-500 h-full border-t-4 border-green-500">
              <div className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <FaHome className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Protección Residencial</h3>
                <p className="text-gray-600 mb-6">
                  Seguridad total para tu hogar y todas tus pertenencias.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  Descubre más <FaChevronRight className="ml-2 text-sm" />
                </div>
              </div>
              <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <FaStar className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Protección contra todo riesgo</span>
                  </li>
                  <li className="flex items-start">
                    <FaStar className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Valoración de objetos de valor</span>
                  </li>
                </ul>
              </div>
            </div>
          </Link>

          <Link href="/aseguradoras/3/vida" className="group">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform group-hover:-translate-y-2 transition duration-500 h-full border-t-4 border-purple-500">
              <div className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <FaHeartbeat className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Protección Vital</h3>
                <p className="text-gray-600 mb-6">
                  Garantía de futuro para ti y quienes más amas.
                </p>
                <div className="flex items-center text-purple-600 font-medium">
                  Descubre más <FaChevronRight className="ml-2 text-sm" />
                </div>
              </div>
              <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <FaStar className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Cobertura internacional</span>
                  </li>
                  <li className="flex items-start">
                    <FaStar className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    <span>Inversión con rendimiento garantizado</span>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              NUESTRA DIFERENCIA
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Experiencia que marca la diferencia</h2>
            <p className="text-gray-600">
              Lo que nos convierte en la mejor opción para tu protección.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Coberturas Exclusivas</h3>
              <p className="text-gray-600">
                Beneficios diseñados especialmente para clientes premium como tú.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHandshake className="text-green-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Asesoría Personalizada</h3>
              <p className="text-gray-600">
                Un ejecutivo dedicado exclusivamente a atender tus necesidades.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeadset className="text-purple-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Servicio Prioritario</h3>
              <p className="text-gray-600">
                Línea directa disponible 24/7 para atención inmediata.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para experimentar la diferencia premium?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nuestro equipo exclusivo está listo para atenderte con soluciones a tu medida.
          </p>
          <Link href="/contacto" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg">
            Contactar Ejecutivo
          </Link>
        </div>
      </div>
    </div>
  );
}