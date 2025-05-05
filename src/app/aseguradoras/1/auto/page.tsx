import { FaShieldAlt, FaUserShield, FaStar, FaMedal, FaCheckCircle } from 'react-icons/fa';

export default function AutoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SEGURO DE AUTO</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Protege tu vehículo con la cobertura que mejor se adapte a tus necesidades
          </p>
        </div>
      </div>

      {/* Plans Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Planes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elige el nivel de protección que necesitas para tu automóvil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan Básico */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gray-100 p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">Básico</h3>
              <p className="text-gray-600">Protección esencial</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$150</span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura en accidentes (70%)</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Asistencia en carretera básica</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Protección contra robo parcial</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Responsabilidad civil</span>
                </li>
              </ul>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="font-semibold text-gray-800">Deducible: <span className="text-blue-600">$1,500</span></p>
                <p className="text-sm text-gray-600 mt-1">Cobertura total anual: $30,000</p>
              </div>
            </div>
          </div>

          {/* Plan Balanceado */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-500 transform scale-105 z-10">
            <div className="bg-blue-500 text-white p-6 text-center">
              <div className="flex justify-center mb-2">
                <span className="bg-yellow-400 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">RECOMENDADO</span>
              </div>
              <h3 className="text-2xl font-bold">Balanceado</h3>
              <p className="text-blue-100">Protección inteligente</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$250</span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura en accidentes (85%)</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Asistencia en carretera 24/7</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Protección total contra robo</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Responsabilidad civil ampliada</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Daños materiales</span>
                </li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800">Deducible: <span className="text-blue-600">$1,000</span></p>
                <p className="text-sm text-gray-600 mt-1">Cobertura total anual: $50,000</p>
              </div>
            </div>
          </div>

          {/* Plan Premium */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-gray-800 text-white p-6 text-center">
              <h3 className="text-2xl font-bold">Premium</h3>
              <p className="text-gray-300">Protección total</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$400</span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura en accidentes (100%)</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Asistencia en carretera VIP</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Protección total contra robo y vandalismo</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Responsabilidad civil premium</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Auto sustituto por 15 días</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura internacional</span>
                </li>
              </ul>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="font-semibold text-gray-800">Deducible: <span className="text-blue-600">$500</span></p>
                <p className="text-sm text-gray-600 mt-1">Cobertura total anual: $100,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-16 bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Cómo elegir tu plan ideal?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <FaStar className="text-yellow-400 mr-2" /> Plan Básico
              </h4>
              <p className="text-gray-600">
                Ideal para vehículos de bajo valor o conductores con bajo riesgo. Cubre lo esencial a un precio accesible.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <FaMedal className="text-blue-500 mr-2" /> Plan Balanceado
              </h4>
              <p className="text-gray-600">
                Perfecto para la mayoría de conductores. Ofrece un equilibrio entre cobertura y precio con protección ampliada.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <FaShieldAlt className="text-purple-500 mr-2" /> Plan Premium
              </h4>
              <p className="text-gray-600">
                Para quienes buscan máxima protección. Incluye beneficios exclusivos y cobertura total para vehículos de alto valor.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <FaUserShield className="text-green-500 mr-2" /> Asesoría Personalizada
              </h4>
              <p className="text-gray-600">
                Nuestros expertos pueden ayudarte a elegir el plan perfecto según tu vehículo y necesidades específicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}