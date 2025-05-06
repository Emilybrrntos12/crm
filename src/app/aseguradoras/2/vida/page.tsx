import { FaHeart, FaCheckCircle, FaPlusCircle } from 'react-icons/fa';

export default function AutoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center bg-white bg-opacity-20 rounded-full w-16 h-16 mb-6">
            <FaHeart className="text-3xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SEGURO DE VIDA</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Protege el futuro de tus seres queridos con la cobertura que mejor se adapte a tus necesidades
          </p>
        </div>
      </div>

      {/* Plans Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Planes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Elige la protección que garantice el bienestar de tu familia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan Básico */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
            <div className="bg-gray-100 p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">Básico</h3>
              <p className="text-gray-600">Protección esencial</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$15</span>
                <span className="text-gray-600">/mes</span>
                <p className="text-sm text-gray-500 mt-2">o $160 anual</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura por fallecimiento: $100,000</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Protección por muerte accidental</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Asistencia funeraria básica</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Indemnización por invalidez permanente (50%)</span>
                </li>
              </ul>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="font-semibold text-gray-800">Edad máxima: <span className="text-blue-600">65 años</span></p>
                <p className="text-sm text-gray-600 mt-1">Cobertura en México</p>
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
              <p className="text-blue-100">Protección familiar completa</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$30</span>
                <span className="text-gray-600">/mes</span>
                <p className="text-sm text-gray-500 mt-2">o $320 anual (ahorra $40)</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura por fallecimiento: $250,000</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Protección por muerte accidental</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Asistencia funeraria ampliada</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Indemnización por invalidez total</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura de enfermedades graves</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Asistencia médica telefónica 24/7</span>
                </li>
              </ul>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="font-semibold text-gray-800">Edad máxima: <span className="text-blue-600">70 años</span></p>
                <p className="text-sm text-gray-600 mt-1">Cobertura en América</p>
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
              <p className="text-gray-300">Protección integral</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-blue-600">$50</span>
                <span className="text-gray-600">/mes</span>
                <p className="text-sm text-gray-500 mt-2">o $550 anual (ahorra $50)</p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura por fallecimiento: $500,000</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Protección por muerte accidental</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Asistencia funeraria premium</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Indemnización por invalidez total y parcial</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura de 30 enfermedades graves</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Asistencia médica y psicológica 24/7</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Cobertura mundial</span>
                </li>
              </ul>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <p className="font-semibold text-gray-800">Edad máxima: <span className="text-blue-600">75 años</span></p>
                <p className="text-sm text-gray-600 mt-1">Cobertura global</p>
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
                  <td className="px-4 py-3 text-sm text-gray-700">Cobertura por fallecimiento</td>
                  <td className="px-4 py-3 text-center text-sm">$100,000</td>
                  <td className="px-4 py-3 text-center text-sm font-medium">$250,000</td>
                  <td className="px-4 py-3 text-center text-sm font-bold">$500,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Enfermedades graves</td>
                  <td className="px-4 py-3 text-center text-sm">No</td>
                  <td className="px-4 py-3 text-center text-sm font-medium">10 enfermedades</td>
                  <td className="px-4 py-3 text-center text-sm font-bold">30 enfermedades</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Asistencia médica</td>
                  <td className="px-4 py-3 text-center text-sm">No</td>
                  <td className="px-4 py-3 text-center text-sm font-medium">24/7 telefónica</td>
                  <td className="px-4 py-3 text-center text-sm font-bold">24/7 + psicológica</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Cobertura geográfica</td>
                  <td className="px-4 py-3 text-center text-sm">México</td>
                  <td className="px-4 py-3 text-center text-sm font-medium">América</td>
                  <td className="px-4 py-3 text-center text-sm font-bold">Mundial</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Edad máxima contratación</td>
                  <td className="px-4 py-3 text-center text-sm">65 años</td>
                  <td className="px-4 py-3 text-center text-sm font-medium">70 años</td>
                  <td className="px-4 py-3 text-center text-sm font-bold">75 años</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Necesitas ayuda para elegir?</h3>
          <p className="text-gray-600 mb-6">Nuestros asesores están disponibles para recomendarte el mejor plan según tu edad, salud y necesidades familiares.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300 inline-flex items-center">
            <FaPlusCircle className="mr-2" />
            Hablar con un asesor
          </button>
        </div>
      </div>
    </div>
  );
}