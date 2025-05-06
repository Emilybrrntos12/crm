import Link from "next/link";
import { FiPlus, FiSearch, FiFilter, FiDownload, FiEye, FiEdit, FiTrash2, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ClientesPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Gestión de Clientes</h1>
          <p className="text-gray-600 mt-2">Administra y gestiona todos tus clientes en un solo lugar</p>
        </div>
        <Link 
          href="/clientes/nuevo/" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md flex items-center mt-4 md:mt-0 transition duration-300"
        >
          <FiPlus className="mr-2" />
          Nuevo Cliente
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
          <h3 className="text-lg font-medium text-gray-500 mb-2">Clientes Totales</h3>
          <p className="text-3xl font-bold text-gray-800">150</p>
          <p className="text-sm text-gray-500 mt-1">+12 este mes</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
          <h3 className="text-lg font-medium text-gray-500 mb-2">Clientes Activos</h3>
          <p className="text-3xl font-bold text-gray-800">120</p>
          <p className="text-sm text-gray-500 mt-1">80% del total</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
          <h3 className="text-lg font-medium text-gray-500 mb-2">Clientes Inactivos</h3>
          <p className="text-3xl font-bold text-gray-800">30</p>
          <p className="text-sm text-gray-500 mt-1">20% del total</p>
        </div>
      </div>

      {/* Client Table Section */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Table Header with Search and Actions */}
        <div className="p-4 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar clientes..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex space-x-2 w-full md:w-auto">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              <FiFilter className="mr-2" />
              Filtrar
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              <FiDownload className="mr-2" />
              Exportar
            </button>
          </div>
        </div>

 {/* Table */}
 <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contacto
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha Nacimiento
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dirección
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Empresa
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              
              {/* Client 1 */}
              <tr className="hover:bg-gray-50 transition duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">JL</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Juan López</div>
                      <div className="text-sm text-gray-500">ID: CLI-001</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">juan@example.com</div>
                  <div className="text-sm text-gray-500">+52 55 1234 5678</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">15/03/1985</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">Av. Reforma 123, CDMX</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Acme Corp</div>
                  <div className="text-sm text-gray-500">Cliente desde: 2023</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Activo
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-3">
                    <Link href="/clientes/detalles/1" className="text-blue-600 hover:text-blue-900">
                      <FiEye className="h-5 w-5" />
                    </Link>
                    <Link href="/clientes/editar/1" className="text-yellow-600 hover:text-yellow-900">
                      <FiEdit className="h-5 w-5" />
                    </Link>
                  </div>
                </td>
              </tr>

              {/* Client 2 */}
              <tr className="hover:bg-gray-50 transition duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">MR</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">María Rodríguez</div>
                      <div className="text-sm text-gray-500">ID: CLI-002</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">maria@example.com</div>
                  <div className="text-sm text-gray-500">+52 55 9876 5432</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">22/07/1990</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">Calle Morelos 45, GDL</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Globex Inc</div>
                  <div className="text-sm text-gray-500">Cliente desde: 2022</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Activo
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-3">
                    <Link href="/clientes/detalles/2" className="text-blue-600 hover:text-blue-900">
                      <FiEye className="h-5 w-5" />
                    </Link>
                    <Link href="/clientes/editar/2" className="text-yellow-600 hover:text-yellow-900">
                      <FiEdit className="h-5 w-5" />
                    </Link>
                  </div>
                </td>
              </tr>

              {/* Client 3 */}
              <tr className="hover:bg-gray-50 transition duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">AC</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Andrés Castillo</div>
                      <div className="text-sm text-gray-500">ID: CLI-003</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">andres@example.com</div>
                  <div className="text-sm text-gray-500">+52 55 1122 3344</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">10/11/1978</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">Blvd. Díaz Ordaz 789, MTY</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">Initech</div>
                  <div className="text-sm text-gray-500">Cliente desde: 2021</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Inactivo
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end space-x-3">
                    <Link href="/clientes/detalles/3" className="text-blue-600 hover:text-blue-900">
                      <FiEye className="h-5 w-5" />
                    </Link>
                    <Link href="/clientes/editar/3" className="text-yellow-600 hover:text-yellow-900">
                      <FiEdit className="h-5 w-5" />
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            Mostrando <span className="font-medium">1</span> a <span className="font-medium">3</span> de <span className="font-medium">24</span> clientes
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-md border text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <button className="px-4 py-2 rounded-md border bg-blue-600 text-white">1</button>
            <button className="px-4 py-2 rounded-md border text-gray-700 hover:bg-gray-50">2</button>
            <button className="px-4 py-2 rounded-md border text-gray-700 hover:bg-gray-50">3</button>
            <button className="p-2 rounded-md border text-gray-500 hover:bg-gray-50">
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}