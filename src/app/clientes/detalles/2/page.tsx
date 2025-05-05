import Link from 'next/link';
import { FaCar, FaHome, FaHeartbeat, FaShieldAlt, FaChevronRight } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center justify-center bg-blue-600 rounded-full w-20 h-20">
              <FaShieldAlt className="text-3xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Protección <span className="text-blue-400">Inteligente</span> para tu Vida
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Soluciones de seguros diseñadas para adaptarse a tu estilo de vida, con la flexibilidad y cobertura que necesitas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contacto" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded transition duration-300">
                Comenzar Ahora
              </Link>
              <Link href="/servicios" className="bg-transparent hover:bg-gray-800 text-white font-medium py-3 px-8 rounded border border-gray-600 transition duration-300">
                Conocer Más
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestras Soluciones</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una gama de productos diseñados para proteger lo que más valoras en la vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
            <div className="bg-gray-100 p-8 flex justify-center">
              <FaCar className="text-blue-600 text-5xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Seguro Automotriz</h3>
              <p className="text-gray-600 mb-6">
                Cobertura completa para tu vehículo con opciones personalizables.
              </p>
              <Link href="/aseguradoras/2/auto" className="text-blue-600 font-medium flex items-center">
                Ver detalles <FaChevronRight className="ml-2 text-sm" />
              </Link>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
            <div className="bg-gray-100 p-8 flex justify-center">
              <FaHome className="text-green-600 text-5xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Seguro de Hogar</h3>
              <p className="text-gray-600 mb-6">
                Protección integral para tu vivienda y pertenencias.
              </p>
              <Link href="/aseguradoras/2/vivienda" className="text-green-600 font-medium flex items-center">
                Ver detalles <FaChevronRight className="ml-2 text-sm" />
              </Link>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
            <div className="bg-gray-100 p-8 flex justify-center">
              <FaHeartbeat className="text-purple-600 text-5xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Seguro de Vida</h3>
              <p className="text-gray-600 mb-6">
                Planes flexibles para asegurar el futuro de tus seres queridos.
              </p>
              <Link href="/aseguradoras/2/vida" className="text-purple-600 font-medium flex items-center">
                Ver detalles <FaChevronRight className="ml-2 text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Ventaja</h2>
            <p className="text-gray-600">
              Lo que nos diferencia en el mercado de seguros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Protección Completa</h3>
              <p className="text-gray-600">
                Coberturas amplias que se adaptan a tus necesidades específicas.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHome className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Asesoramiento Personal</h3>
              <p className="text-gray-600">
                Expertos dedicados a encontrar la solución perfecta para ti.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeartbeat className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Procesos Ágiles</h3>
              <p className="text-gray-600">
                Tramitación rápida y sin complicaciones cuando más lo necesitas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-gray-900 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para proteger tu futuro?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está listo para ayudarte a encontrar el seguro perfecto para tus necesidades.
          </p>
          <Link href="/contacto" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded transition duration-300">
            Hablar con un Asesor
          </Link>
        </div>
      </div>
    </div>
  );
}