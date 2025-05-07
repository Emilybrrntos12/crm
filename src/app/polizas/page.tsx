import { FaCheckCircle, FaClock, FaExclamationTriangle, FaTimesCircle, FaChevronLeft, FaChevronRight, FaPauseCircle, FaFileSignature, FaFileInvoiceDollar, FaHome, FaSearch, FaFilter, FaDownload, FaEllipsisV } from 'react-icons/fa';
import Link from 'next/link';

export default function PolizasPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header superior con botón Home */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/">
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition duration-200">
            <FaHome className="text-gray-600 h-5 w-5" />
          </button>
        </Link>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 text-gray-600">
            <FaDownload className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 text-gray-600">
            <FaEllipsisV className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Header principal */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Administración de Pólizas</h1>
          <p className="text-gray-600 mt-1">Gestión integral de pólizas de seguros</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm">
            <FaFileSignature />
            <span>Nueva Póliza</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors">
            <FaFileInvoiceDollar />
            <span>Renovaciones</span>
          </button>
        </div>
      </div>

      {/* Tarjetas de resumen EN FILA HORIZONTAL */}
      <div className="flex flex-wrap gap-5 mb-8">
        {/* Tarjeta 1 - Total Pólizas */}
        <div className="flex-1 min-w-[250px] bg-white p-5 rounded-xl shadow-sm border-t-4 border-blue-500 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Total Pólizas</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">1,248</p>
              <p className="text-xs text-blue-500 mt-2">+12% vs mes anterior</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <FaFileSignature className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>

        {/* Tarjeta 2 - Activas */}
        <div className="flex-1 min-w-[250px] bg-white p-5 rounded-xl shadow-sm border-t-4 border-green-500 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Activas</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">984</p>
              <p className="text-xs text-green-500 mt-2">78.8% del total</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <FaCheckCircle className="text-green-600 text-xl" />
            </div>
          </div>
        </div>

        {/* Tarjeta 3 - Por Vencer */}
        <div className="flex-1 min-w-[250px] bg-white p-5 rounded-xl shadow-sm border-t-4 border-amber-500 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Por Vencer</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">42</p>
              <p className="text-xs text-amber-500 mt-2">Próximos 30 días</p>
            </div>
            <div className="bg-amber-100 p-3 rounded-lg">
              <FaClock className="text-amber-600 text-xl" />
            </div>
          </div>
        </div>

        {/* Tarjeta 4 - Vencidas */}
        <div className="flex-1 min-w-[250px] bg-white p-5 rounded-xl shadow-sm border-t-4 border-red-500 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Vencidas</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">12</p>
              <p className="text-xs text-red-500 mt-2">Requieren acción</p>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <FaTimesCircle className="text-red-600 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Panel de filtros mejorado */}
      <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar póliza, cliente..."
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaFilter className="text-gray-400" />
            </div>
            <select className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-sm">
              <option>Todas las aseguradoras</option>
              <option>Seguros Atlas</option>
              <option>Mapfre</option>
              <option>AXA</option>
            </select>
          </div>
          
          <select className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
            <option>Todos los estados</option>
            <option>Activas</option>
            <option>Pendientes</option>
            <option>Vencidas</option>
            <option>Canceladas</option>
          </select>
          
          <button className="px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 text-sm">
            <FaFilter />
            <span>Filtros avanzados</span>
          </button>
        </div>
      </div>

      {/* Tabla de pólizas mejorada */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-800">Listado de Pólizas</h2>
          <div className="text-sm text-gray-500">
            Mostrando <span className="font-medium text-gray-700">1-5</span> de <span className="font-medium text-gray-700">24</span> pólizas
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N° Póliza</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vigencia</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prima</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Póliza activa */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-blue-600">POL-2023-00158</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-medium text-xs">
                        JL
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Juan López</div>
                      <div className="text-xs text-gray-500">juan@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Auto Todo Riesgo</div>
                  <div className="text-xs text-gray-500">Seguros Atlas</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">01/01/2023</div>
                  <div className="text-xs text-gray-500">31/12/2023</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">$850.00</div>
                  <div className="text-xs text-gray-500">Mensual</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex items-center text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    <FaCheckCircle className="mr-1.5" /> Activa
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600">
                      <FaSearch className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
                      <FaFileInvoiceDollar className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
                      <FaEllipsisV className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Póliza pendiente */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-blue-600">POL-2023-00234</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-9 w-9 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-medium text-xs">
                        MP
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">María Pérez</div>
                      <div className="text-xs text-gray-500">maria@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Vida Individual</div>
                  <div className="text-xs text-gray-500">Mapfre</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">-</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">$1,200.00</div>
                  <div className="text-xs text-gray-500">Anual</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex items-center text-xs font-semibold rounded-full bg-amber-100 text-amber-800">
                    <FaClock className="mr-1.5" /> Pendiente
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600">
                      <FaSearch className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-green-50 text-green-600">
                      <FaFileSignature className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
                      <FaEllipsisV className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Póliza vencida */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-blue-600">POL-2022-00345</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-9 w-9 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <span className="text-red-600 font-medium text-xs">
                        CG
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Carlos Gómez</div>
                      <div className="text-xs text-gray-500">carlos@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Hogar Completo</div>
                  <div className="text-xs text-gray-500">AXA</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">01/06/2022</div>
                  <div className="text-sm text-red-500">31/05/2023</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">$620.00</div>
                  <div className="text-xs text-gray-500">Trimestral</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex items-center text-xs font-semibold rounded-full bg-red-100 text-red-800">
                    <FaTimesCircle className="mr-1.5" /> Vencida
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600">
                      <FaSearch className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-green-50 text-green-600">
                      <FaFileInvoiceDollar className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
                      <FaEllipsisV className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Póliza suspendida */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-blue-600">POL-2023-00456</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-9 w-9 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                      <span className="text-orange-600 font-medium text-xs">
                        AM
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Ana Martínez</div>
                      <div className="text-xs text-gray-500">ana@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Salud Premium</div>
                  <div className="text-xs text-gray-500">Seguros Atlas</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">01/03/2023</div>
                  <div className="text-sm text-gray-900">28/02/2024</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">$1,050.00</div>
                  <div className="text-xs text-gray-500">Mensual</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex items-center text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                    <FaPauseCircle className="mr-1.5" /> Suspendida
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600">
                      <FaSearch className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-green-50 text-green-600">
                      <FaFileSignature className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
                      <FaEllipsisV className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Póliza en siniestro */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-blue-600">POL-2023-00567</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-9 w-9 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-medium text-xs">
                        RS
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Roberto Sánchez</div>
                      <div className="text-xs text-gray-500">roberto@example.com</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Auto Básico</div>
                  <div className="text-xs text-gray-500">Mapfre</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">15/02/2023</div>
                  <div className="text-sm text-gray-900">14/02/2024</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">$720.00</div>
                  <div className="text-xs text-gray-500">Mensual</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2.5 py-1 inline-flex items-center text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                    <FaExclamationTriangle className="mr-1.5" /> Siniestro
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600">
                      <FaSearch className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-red-50 text-red-600">
                      <FaExclamationTriangle className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
                      <FaEllipsisV className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Paginación mejorada */}
        <div className="px-6 py-4 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            Mostrando <span className="font-medium text-gray-700">1-5</span> de <span className="font-medium text-gray-700">24</span> pólizas
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              <FaChevronLeft className="h-4 w-4" />
            </button>
            <button className="px-3.5 py-2 rounded-lg border border-blue-600 bg-blue-600 text-white font-medium text-sm">
              1
            </button>
            <button className="px-3.5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">
              2
            </button>
            <button className="px-3.5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">
              3
            </button>
            <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 text-sm">
              ...
            </button>
            <button className="px-3.5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">
              5
            </button>
            <button className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50">
              <FaChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}