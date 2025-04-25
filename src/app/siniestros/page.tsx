export default function SiniestrosPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Gestión de Siniestros</h1>
  
        {/* Tarjetas de resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="text-gray-500 text-sm font-medium">Total Siniestros</h3>
            <p className="text-2xl font-bold text-gray-800">48</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
            <h3 className="text-gray-500 text-sm font-medium">En Proceso</h3>
            <p className="text-2xl font-bold text-gray-800">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 className="text-gray-500 text-sm font-medium">Cerrados</h3>
            <p className="text-2xl font-bold text-gray-800">36</p>
          </div>
        </div>
  
        {/* Tabla de siniestros */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-800">Siniestros Recientes</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
              + Reportar Siniestro
            </button>
          </div>
  
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N° Reporte</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Póliza</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estatus</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Fila 1 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">SIN-2023-0042</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Juan López</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">POL-2023-00158</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Auto - Colisión</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10/03/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">En Proceso</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Detalles</button>
                    <button className="text-green-600 hover:text-green-900">Actualizar</button>
                  </td>
                </tr>
                
                {/* Fila 2 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">SIN-2023-0038</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">María González</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">POL-2023-00142</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Hogar - Inundación</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28/02/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Cerrado</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Detalles</button>
                    <button className="text-green-600 hover:text-green-900">Actualizar</button>
                  </td>
                </tr>
                
                {/* Fila 3 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">SIN-2023-0041</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Carlos Martínez</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">POL-2023-00155</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Salud - Hospitalización</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">08/03/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">En Proceso</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Detalles</button>
                    <button className="text-green-600 hover:text-green-900">Actualizar</button>
                  </td>
                </tr>
                
                {/* Fila 4 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">SIN-2023-0035</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Ana Rodríguez</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">POL-2023-00132</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Vida - Fallecimiento</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20/02/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Cerrado</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Detalles</button>
                    <button className="text-green-600 hover:text-green-900">Actualizar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  
          {/* Paginación */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Mostrando <span className="font-medium">1</span> a <span className="font-medium">4</span> de <span className="font-medium">12</span> resultados
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Anterior</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" aria-current="page" className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    1
                  </a>
                  <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    2
                  </a>
                  <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    8
                  </a>
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Siguiente</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }