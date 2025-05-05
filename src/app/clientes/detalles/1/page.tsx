import Link from 'next/link';
import { FaHome, FaHeartbeat, FaShieldAlt, FaUserShield, FaUmbrella, FaPiggyBank, FaStar, FaMedal, FaLock, FaHandshake, FaChartLine, FaHeadset } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-2 rounded-full w-24 h-24 mx-auto shadow-md flex items-center justify-center mb-6">
            <FaShieldAlt className="text-blue-600 text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Protección <span className="text-blue-600">Confiable</span> para lo que más Importa
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Más de 20 años protegiendo sueños y construyendo futuros seguros con soluciones personalizadas para cada necesidad.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contacto" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-lg">
              Contáctanos
            </Link>
            <Link href="/servicios" className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-8 rounded-lg border border-gray-300 transition duration-300 shadow">
              Nuestros Servicios
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros Seguros</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link href="/aseguradoras/1/auto" className="group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform group-hover:-translate-y-2 transition duration-300 h-full">
              <div className="bg-blue-600 p-6 flex items-center">
                <div className="bg-white p-3 rounded-lg mr-4">
                  
                </div>
                <h3 className="text-xl font-bold text-white">Seguro de Auto</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">Protección completa para tu vehículo con las mejores coberturas del mercado.</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <FaShieldAlt className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Cobertura total en accidentes</span>
                  </li>
                  <li className="flex items-start">
                    
                    <span>Asistencia en carretera 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <FaLock className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Protección contra robo</span>
                  </li>
                </ul>
              </div>
            </div>
          </Link>

          <Link href="/aseguradoras/1/vivienda" className="group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform group-hover:-translate-y-2 transition duration-300 h-full">
              <div className="bg-green-600 p-6 flex items-center">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <FaHome className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Seguro de Hogar</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">Tu hogar protegido contra imprevistos con nuestra amplia cobertura residencial.</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <FaUmbrella className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Protección contra desastres</span>
                  </li>
                  <li className="flex items-start">
                    <FaUserShield className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Cobertura de objetos valiosos</span>
                  </li>
                  <li className="flex items-start">
                    <FaMedal className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Responsabilidad civil</span>
                  </li>
                </ul>
              </div>
            </div>
          </Link>

          <Link href="/aseguradoras/1/vida" className="group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform group-hover:-translate-y-2 transition duration-300 h-full">
              <div className="bg-purple-600 p-6 flex items-center">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <FaHeartbeat className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white">Seguro de Vida</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">Protección financiera para tu familia y un futuro más seguro.</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <FaUserShield className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Protección familiar integral</span>
                  </li>
                  <li className="flex items-start">
                    <FaHeartbeat className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Cobertura por enfermedades</span>
                  </li>
                  <li className="flex items-start">
                    <FaPiggyBank className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Componente de ahorro</span>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">¿Por qué elegirnos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHandshake className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">20+ Años de Experiencia</h3>
                <p className="text-blue-100">Confianza y trayectoria en el mercado asegurador</p>
              </div>
              <div className="p-6">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaChartLine className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Coberturas Personalizadas</h3>
                <p className="text-blue-100">Soluciones adaptadas a tus necesidades específicas</p>
              </div>
              <div className="p-6">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeadset className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Atención 24/7</h3>
                <p className="text-blue-100">Soporte constante cuando más nos necesitas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Listo para proteger lo que más amas?</h2>
          <p className="text-gray-600 mb-8">Nuestros expertos están listos para asesorarte y encontrar el seguro perfecto para ti.</p>
          <Link href="/contacto" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-lg">
            Obtener Cotización Gratis
          </Link>
        </div>
      </div>
    </div>
  );
}