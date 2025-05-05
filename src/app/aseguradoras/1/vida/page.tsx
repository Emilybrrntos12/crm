import { FaShieldAlt, FaUserShield, FaStar, FaMedal, FaCheckCircle } from 'react-icons/fa';

export default function VidaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SEGURO DE VIDA</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Protege el futuro de quienes más amas con nuestra cobertura de vida
          </p>
        </div>
      </div>

      {/* Plans Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Planes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elige el nivel de protección que necesitas para asegurar el bienestar de tu familia
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
                <span className="text-4xl font-bold text-purple-600">$80</span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura por fallecimiento (70%)</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Protección básica por invalidez</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Capital asegurado hasta $100,000</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Asistencia funeraria</span>
                </li>
              </ul>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="font-semibold text-gray-800">Cobertura: <span className="text-purple-600">70%</span></p>
                <p className="text-sm text-gray-600 mt-1">Período de carencia: 6 meses</p>
              </div>
            </div>
          </div>

          {/* Plan Balanceado */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-purple-500 transform scale-105 z-10">
            <div className="bg-purple-500 text-white p-6 text-center">
              <div className="flex justify-center mb-2">
                <span className="bg-yellow-400 text-purple-800 px-3 py-1 rounded-full text-xs font-bold">RECOMENDADO</span>
              </div>
              <h3 className="text-2xl font-bold">Balanceado</h3>
              <p className="text-purple-100">Protección familiar</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-purple-600">$150</span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura por fallecimiento (85%)</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Protección ampliada por invalidez</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Capital asegurado hasta $250,000</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Enfermedades graves incluidas</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Asistencia familiar integral</span>
                </li>
              </ul>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800">Cobertura: <span className="text-purple-600">85%</span></p>
                <p className="text-sm text-gray-600 mt-1">Período de carencia: 3 meses</p>
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
                <span className="text-4xl font-bold text-purple-600">$250</span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura por fallecimiento (100%)</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Protección total por invalidez</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Capital asegurado hasta $500,000</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>50 enfermedades graves cubiertas</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura internacional</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Componente de ahorro e inversión</span>
                </li>
              </ul>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="font-semibold text-gray-800">Cobertura: <span className="text-purple-600">100%</span></p>
                <p className="text-sm text-gray-600 mt-1">Período de carencia: 1 mes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-16 bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Cómo elegir tu plan de vida ideal?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <FaStar className="text-yellow-400 mr-2" /> Plan Básico
              </h4>
              <p className="text-gray-600">
                Ideal para personas jóvenes o quienes buscan una protección básica a bajo costo. Cubre necesidades esenciales.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <FaMedal className="text-purple-500 mr-2" /> Plan Balanceado
              </h4>
              <p className="text-gray-600">
                Perfecto para familias. Ofrece un equilibrio entre cobertura y precio con protección ampliada para diversas situaciones.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <FaShieldAlt className="text-blue-500 mr-2" /> Plan Premium
              </h4>
              <p className="text-gray-600">
                Para quienes buscan máxima protección y beneficios adicionales. Incluye cobertura internacional y componente de inversión.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                <FaUserShield className="text-green-500 mr-2" /> Asesoría Especializada
              </h4>
              <p className="text-gray-600">
                Nuestros expertos en planificación familiar pueden ayudarte a elegir el plan perfecto según tus necesidades específicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}