export default function ReportesPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Generación de Reportes</h1>
  
        {/* Tarjetas de resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <h3 className="text-gray-500 text-sm font-medium">Reportes Generados</h3>
            <p className="text-2xl font-bold text-gray-800">24</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="text-gray-500 text-sm font-medium">Plantillas Guardadas</h3>
            <p className="text-2xl font-bold text-gray-800">8</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 className="text-gray-500 text-sm font-medium">Reportes Programados</h3>
            <p className="text-2xl font-bold text-gray-800">5</p>
          </div>
        </div>
  
        {/* Sección de generación de reportes */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="p-4 border-b">
            <h2 className="text-lg font-medium text-gray-800">Generar Nuevo Reporte</h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Reporte</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Seleccione un tipo</option>
                <option>Reporte de Siniestros</option>
                <option>Reporte de Pólizas</option>
                <option>Reporte Financiero</option>
                <option>Reporte de Clientes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Formato</label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="format" className="h-4 w-4 text-blue-600" checked />
                  <span className="ml-2 text-gray-700">PDF</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="format" className="h-4 w-4 text-blue-600" />
                  <span className="ml-2 text-gray-700">Excel</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="format" className="h-4 w-4 text-blue-600" />
                  <span className="ml-2 text-gray-700">CSV</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rango de Fechas</label>
              <div className="flex space-x-2">
                <input type="date" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <span className="self-center text-gray-500">a</span>
                <input type="date" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Filtrar por</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Todos los registros</option>
                <option>Solo activos</option>
                <option>Por sucursal</option>
                <option>Por tipo de póliza</option>
              </select>
            </div>
            <div className="md:col-span-2 flex justify-end space-x-3">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md">
                Guardar como Plantilla
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                Generar Reporte
              </button>
            </div>
          </div>
        </div>
  
        {/* Tabla de reportes generados */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-800">Reportes Generados</h2>
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Buscar reporte..." 
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                Filtrar
              </button>
            </div>
          </div>
  
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Generación</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Formato</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tamaño</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Fila 1 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Reporte_Siniestros_Marzo_2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Siniestros</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15/03/2023 10:45</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PDF</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2.4 MB</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Descargar</button>
                    <button className="text-red-600 hover:text-red-900">Eliminar</button>
                  </td>
                </tr>
                
                {/* Fila 2 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Clientes_Activos_Q1_2023</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Clientes</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05/04/2023 14:20</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Excel</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1.8 MB</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Descargar</button>
                    <button className="text-red-600 hover:text-red-900">Eliminar</button>
                  </td>
                </tr>
                
                {/* Fila 3 */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Financiero_Anual_2022</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Financiero</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20/01/2023 09:15</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PDF</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5.2 MB</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Descargar</button>
                    <button className="text-red-600 hover:text-red-900">Eliminar</button>
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
                  Mostrando <span className="font-medium">1</span> a <span className="font-medium">3</span> de <span className="font-medium">24</span> resultados
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