import { FaCar, FaCheckCircle, FaPlusCircle } from 'react-icons/fa';

export default function AutoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center bg-white bg-opacity-20 rounded-full w-16 h-16 mb-6">
            <FaCar className="text-3xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SEGURO DE AUTO</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Protege tu vehículo con la cobertura que mejor se adapte a tus necesidades
          </p>
        </div>
      </div>

      {/* Plans Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Planes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elige entre nuestras opciones diseñadas para cada tipo de conductor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan Básico */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
            <div className="bg-gray-100 p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">Básico</h3>
              <p className="text-gray-600">Para protección esencial</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$120</span>
                <span className="text-gray-600">/mes</span>
                <p className="text-sm text-gray-500 mt-2">o $1,300 anual</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
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
                  <span>Responsabilidad civil</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Protección contra robo parcial</span>
                </li>
              </ul>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="font-semibold text-gray-800">Deducible: <span className="text-blue-600">$1,500</span></p>
                <p className="text-sm text-gray-600 mt-1">Cobertura máxima: $30,000</p>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300">
                  Contratar
                </button>
              </div>
            </div>
          </div>

          {/* Plan Estándar */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-blue-500 transform scale-105 z-10">
            <div className="bg-blue-600 text-white p-6 text-center relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-blue-800 px-3 py-1 text-xs font-bold rounded-bl-lg">
                MÁS POPULAR
              </div>
              <h3 className="text-2xl font-bold">Estándar</h3>
              <p className="text-blue-100">Protección balanceada</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$220</span>
                <span className="text-gray-600">/mes</span>
                <p className="text-sm text-gray-500 mt-2">o $2,400 anual (ahorra $240)</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
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
                  <span>Responsabilidad civil ampliada</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Protección total contra robo</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Daños materiales</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Grúa incluida</span>
                </li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="font-semibold text-gray-800">Deducible: <span className="text-blue-600">$1,000</span></p>
                <p className="text-sm text-gray-600 mt-1">Cobertura máxima: $50,000</p>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300">
                  Contratar
                </button>
              </div>
            </div>
          </div>

          {/* Plan Premium */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
            <div className="bg-gray-800 text-white p-6 text-center">
              <h3 className="text-2xl font-bold">Premium</h3>
              <p className="text-gray-300">Protección total</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$350</span>
                <span className="text-gray-600">/mes</span>
                <p className="text-sm text-gray-500 mt-2">o $3,800 anual (ahorra $400)</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
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
                  <span>Responsabilidad civil premium</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Protección contra robo y vandalismo</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Auto sustituto por 15 días</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura internacional</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Asistencia legal</span>
                </li>
              </ul>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="font-semibold text-gray-800">Deducible: <span className="text-blue-600">$500</span></p>
                <p className="text-sm text-gray-600 mt-1">Cobertura máxima: $100,000</p>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300">
                  Contratar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="max-w-4xl mx-auto mt-16 bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Comparación de Planes</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Beneficios</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-500">Básico</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-blue-600">Estándar</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-800">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Cobertura en accidentes</td>
                  <td className="px-4 py-3 text-center text-sm">70%</td>
                  <td className="px-4 py-3 text-center text-sm font-medium">85%</td>
                  <td className="px-4 py-3 text-center text-sm font-bold">100%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Asistencia en carretera</td>
                  <td className="px-4 py-3 text-center text-sm">Básica</td>
                  <td className="px-4 py-3 text-center text-sm font-medium">24/7</td>
                  <td className="px-4 py-3 text-center text-sm font-bold">VIP</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Protección contra robo</td>
                  <td className="px-4 py-3 text-center text-sm">Parcial</td>
                  <td className="px-4 py-3 text-center text-sm font-medium">Total</td>
                  <td className="px-4 py-3 text-center text-sm font-bold">Total + vandalismo</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Deducible</td>
                  <td className="px-4 py-3 text-center text-sm">$1,500</td>
                  <td className="px-4 py-3 text-center text-sm font-medium">$1,000</td>
                  <td className="px-4 py-3 text-center text-sm font-bold">$500</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Auto sustituto</td>
                  <td className="px-4 py-3 text-center text-sm">-</td>
                  <td className="px-4 py-3 text-center text-sm font-medium">-</td>
                  <td className="px-4 py-3 text-center text-sm font-bold">15 días</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Necesitas ayuda para elegir?</h3>
          <p className="text-gray-600 mb-6">Nuestros asesores están disponibles para recomendarte el mejor plan según tu vehículo y necesidades.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300 inline-flex items-center">
            <FaPlusCircle className="mr-2" />
            Hablar con un asesor
          </button>
        </div>
      </div>
    </div>
  );
}