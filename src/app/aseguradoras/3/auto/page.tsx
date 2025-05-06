import { FaHeart, FaShieldAlt, FaUsers, FaChartLine, FaHandHoldingHeart, FaPhoneAlt, FaFileAlt } from 'react-icons/fa';

export default function LifeInsurancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0idHJhbnNwYXJlbnQiPjwvcmVjdD48cGF0aCBkPSJNMCAwTDEwIDEwTTEwIDBMMCAxMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiPjwvcGF0aD48L3N2Zz4=')" }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center bg-white bg-opacity-20 rounded-full w-16 h-16 mb-6">
            <FaHeart className="text-3xl text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Protege a quienes más amas</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Seguro de Vida diseñado para brindar tranquilidad y seguridad financiera a tu familia
          </p>
          <button className="bg-white text-blue-800 hover:bg-blue-100 font-medium py-3 px-8 rounded-full shadow-lg transition duration-300">
            Cotizar ahora
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Beneficios que ofrecemos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Coberturas diseñadas para proteger el futuro de tu familia en cualquier situación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaShieldAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Protección financiera</h3>
              <p className="text-gray-600">
                Garantiza el bienestar económico de tu familia ante cualquier eventualidad
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Cobertura familiar</h3>
              <p className="text-gray-600">
                Extiende la protección a tu cónyuge e hijos con nuestras opciones de cobertura familiar
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FaChartLine className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ahorro e inversión</h3>
              <p className="text-gray-600">
                Algunos planes incluyen componente de ahorro para tu futuro
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros planes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Elige la cobertura que mejor se adapte a tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Plan Esencial */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
              <div className="bg-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-800">Esencial</h3>
                <p className="text-gray-600">Protección básica</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-blue-600">$75</span>
                  <span className="text-gray-600">/mes</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Cobertura: $200,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Protección por accidentes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Asistencia funeraria</span>
                  </li>
                </ul>
                <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-lg transition duration-300">
                  Más información
                </button>
              </div>
            </div>

            {/* Plan Familiar (Destacado) */}
            <div className="border-2 border-blue-600 rounded-xl overflow-hidden shadow-lg transform md:scale-105 z-10">
              <div className="bg-blue-600 text-white p-6 relative">
                <div className="absolute top-4 right-4 bg-yellow-400 text-blue-800 px-2 py-1 text-xs font-bold rounded">
                  RECOMENDADO
                </div>
                <h3 className="text-xl font-bold">Familiar</h3>
                <p className="text-blue-100">Protección completa</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-white">$150</span>
                  <span className="text-blue-200">/mes</span>
                </div>
              </div>
              <div className="p-6 bg-white">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Cobertura: $500,000</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Protección para toda la familia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Enfermedades graves incluidas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Indemnización por invalidez</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Asistencia funeraria ampliada</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300">
                  Contratar ahora
                </button>
              </div>
            </div>

            {/* Plan Integral */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
              <div className="bg-gray-800 text-white p-6">
                <h3 className="text-xl font-bold">Integral</h3>
                <p className="text-gray-300">Protección premium</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-white">$250</span>
                  <span className="text-gray-300">/mes</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Cobertura: $1,000,000+</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Protección familiar extendida</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Cobertura mundial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Renta vitalicia opcional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Exámenes médicos anuales</span>
                  </li>
                </ul>
                <button className="w-full border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white py-2 px-4 rounded-lg transition duration-300">
                  Más información
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Por qué elegir nuestro seguro de vida?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FaHandHoldingHeart className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Tranquilidad garantizada</h3>
                    <p className="text-gray-600">Sabemos lo importante que es la seguridad para tu familia.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FaShieldAlt className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Flexibilidad</h3>
                    <p className="text-gray-600">Planes adaptables a tus necesidades y presupuesto.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FaFileAlt className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Proceso simple</h3>
                    <p className="text-gray-600">Contratación rápida y sin complicaciones.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Calcula tu cobertura ideal</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Edad</label>
                  <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="30" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Ingreso anual</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="$50,000" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Personas dependientes</label>
                  <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="2" />
                </div>
                <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition duration-300">
                  Calcular cobertura
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para proteger a tu familia?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">Nuestros asesores están disponibles para ayudarte a elegir el mejor plan para tus necesidades.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-800 hover:bg-blue-100 font-medium py-3 px-8 rounded-full shadow-lg transition duration-300 flex items-center justify-center">
              <FaPhoneAlt className="mr-2" />
              Hablar con un asesor
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-800 font-medium py-3 px-8 rounded-full transition duration-300">
              Solicitar cotización
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}