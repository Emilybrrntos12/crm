import {FaShieldAlt, FaUmbrella, FaStar, FaMedal, FaCheckCircle} from 'react-icons/fa';

export default function ViviendaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SEGURO DE VIVIENDA</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Protege tu hogar y todo lo que contiene con nuestra cobertura especializada
          </p>
        </div>
      </div>

      {/* Plans Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Planes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elige el nivel de protección que mejor se adapte a tu hogar y necesidades
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
                <span className="text-4xl font-bold text-green-600">$120</span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura de estructura (70%)</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Protección contra incendio</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Robo con fuerza hasta $10,000</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Responsabilidad civil básica</span>
                </li>
              </ul>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="font-semibold text-gray-800">Deducible: <span className="text-green-600">$1,200</span></p>
                <p className="text-sm text-gray-600 mt-1">Cobertura máxima: $150,000</p>
              </div>
            </div>
          </div>

          {/* Plan Balanceado */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-green-500 transform scale-105 z-10">
            <div className="bg-green-500 text-white p-6 text-center">
              <div className="flex justify-center mb-2">
                <span className="bg-yellow-400 text-green-800 px-3 py-1 rounded-full text-xs font-bold">RECOMENDADO</span>
              </div>
              <h3 className="text-2xl font-bold">Balanceado</h3>
              <p className="text-green-100">Protección completa</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-green-600">$200</span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura de estructura (85%)</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Protección contra incendio y explosión</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Robo con fuerza hasta $25,000</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Daños por agua</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Responsabilidad civil ampliada</span>
                </li>
              </ul>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800">Deducible: <span className="text-green-600">$800</span></p>
                <p className="text-sm text-gray-600 mt-1">Cobertura máxima: $300,000</p>
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
                <span className="text-4xl font-bold text-green-600">$350</span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura de estructura (100%)</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Protección contra todo riesgo</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Robo y vandalismo sin límite</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Daños por agua y fenómenos naturales</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Responsabilidad civil premium</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Alojamiento temporal por siniestro</span>
                </li>
              </ul>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="font-semibold text-gray-800">Deducible: <span className="text-green-600">$500</span></p>
                <p className="text-sm text-gray-600 mt-1">Cobertura máxima: $500,000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-16 bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Cómo elegir tu plan de vivienda ideal?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <FaStar className="text-yellow-400 mr-2" /> Plan Básico
              </h4>
              <p className="text-gray-600">
                Ideal para departamentos o viviendas pequeñas. Cubre los riesgos básicos a un costo accesible.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <FaMedal className="text-green-500 mr-2" /> Plan Balanceado
              </h4>
              <p className="text-gray-600">
                Perfecto para la mayoría de hogares. Ofrece protección ampliada contra los riesgos más comunes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <FaShieldAlt className="text-blue-500 mr-2" /> Plan Premium
              </h4>
              <p className="text-gray-600">
                Para viviendas de alto valor o quienes buscan máxima tranquilidad. Cobertura contra todo riesgo.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <FaUmbrella className="text-purple-500 mr-2" /> Asesoría Especializada
              </h4>
              <p className="text-gray-600">
                Nuestros expertos en riesgos del hogar pueden evaluar tu propiedad y recomendarte la mejor opción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}