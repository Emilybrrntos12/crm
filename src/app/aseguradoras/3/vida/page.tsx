import { FaHeart, FaCheckCircle,FaShieldAlt, FaUserFriends, FaChartLine, FaHandHoldingHeart, FaPhoneAlt, FaFileAlt } from 'react-icons/fa';

export default function LifeInsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-opacity-20 bg-gradient-to-r from-blue-800 to-blue-600"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center bg-white bg-opacity-20 rounded-full w-16 h-16 mb-6">
              <FaHeart className="text-3xl text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Protege a quienes más amas</h1>
            <p className="text-xl md:text-2xl font-light mb-8">
              Seguro de Vida diseñado para brindar seguridad y tranquilidad a tu familia
            </p>
            <button className="bg-white text-blue-900 hover:bg-blue-100 font-medium py-3 px-8 rounded-full shadow-lg transition duration-300">
              Cotizar ahora
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Protección completa para tu familia</h2>
          <p className="text-gray-600 text-lg">
            Nuestros seguros ofrecen coberturas adaptables a cada etapa de tu vida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaShieldAlt className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Cobertura Básica</h3>
            <p className="text-gray-600 text-center">
              Protección esencial contra fallecimiento con beneficios adicionales por accidentes
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaUserFriends className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Protección Familiar</h3>
            <p className="text-gray-600 text-center">
              Cobertura extendida para toda la familia con beneficios educativos para hijos
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaChartLine className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Inversión Plus</h3>
            <p className="text-gray-600 text-center">
              Combina protección con ahorro e inversión para construir un patrimonio seguro
            </p>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Planes</h2>
            <p className="text-gray-600 text-lg">
              Elige la protección que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plan Essential */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
              <div className="bg-gray-100 p-6">
                <h3 className="text-2xl font-bold text-gray-800 text-center">Essential</h3>
                <div className="text-center mt-4">
                  <span className="text-4xl font-bold text-blue-600">$29</span>
                  <span className="text-gray-600">/mes</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Cobertura básica por fallecimiento ($100,000)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Protección por accidentes</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Asistencia funeraria básica</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 rounded-lg transition duration-300">
                  Más información
                </button>
              </div>
            </div>

            {/* Plan Family (Destacado) */}
            <div className="border-2 border-blue-500 rounded-xl overflow-hidden shadow-lg transform scale-105 z-10">
              <div className="bg-blue-600 text-white p-6 relative">
                <div className="absolute top-0 right-0 bg-yellow-400 text-blue-800 px-3 py-1 text-xs font-bold rounded-bl-lg">
                  RECOMENDADO
                </div>
                <h3 className="text-2xl font-bold text-center">Family</h3>
                <div className="text-center mt-4">
                  <span className="text-4xl font-bold text-white">$59</span>
                  <span className="text-blue-100">/mes</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Cobertura ampliada por fallecimiento ($250,000)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Protección para toda la familia</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Asistencia funeraria ampliada</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Apoyo educativo para hijos</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Protección por enfermedades graves</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300">
                  Contratar ahora
                </button>
              </div>
            </div>

            {/* Plan Premium */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
              <div className="bg-gray-800 text-white p-6">
                <h3 className="text-2xl font-bold text-center">Premium</h3>
                <div className="text-center mt-4">
                  <span className="text-4xl font-bold text-white">$99</span>
                  <span className="text-gray-300">/mes</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Cobertura premium por fallecimiento ($500,000+)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Protección familiar completa</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Asistencia funeraria premium</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Renta vitalicia opcional</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Exámenes médicos anuales</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span>Componente de ahorro e inversión</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 rounded-lg transition duration-300">
                  Más información
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Beneficios exclusivos</h2>
          <p className="text-gray-600 text-lg">
            Más que un seguro, una solución integral para tu familia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-5">
                <FaHandHoldingHeart className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Asistencia psicológica</h3>
                <p className="text-gray-600">
                  Soporte emocional profesional para tus seres queridos en momentos difíciles
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-5">
                <FaFileAlt className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Asesoría legal</h3>
                <p className="text-gray-600">
                  Orientación en trámites y procesos legales relacionados con tu seguro
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-5">
                <FaChartLine className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ahorro garantizado</h3>
                <p className="text-gray-600">
                  Opción de acumular valor en efectivo que puedes retirar o usar como préstamo
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-5">
                <FaUserFriends className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Protección flexible</h3>
                <p className="text-gray-600">
                  Adapta tu cobertura según cambien las necesidades de tu familia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para proteger a tu familia?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Nuestros asesores están disponibles para ayudarte a elegir el mejor plan
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-900 hover:bg-blue-100 font-medium py-3 px-8 rounded-full shadow-lg transition duration-300 flex items-center justify-center">
                <FaPhoneAlt className="mr-2" />
                Hablar con un asesor
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 font-medium py-3 px-8 rounded-full shadow-lg transition duration-300 flex items-center justify-center">
                <FaFileAlt className="mr-2" />
                Solicitar información
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}