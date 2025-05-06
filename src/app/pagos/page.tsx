import { FiPlus, FiSearch, FiDownload, FiEye, FiEdit, FiTrash2, FiChevronLeft, FiChevronRight, FiDollarSign, FiCreditCard, FiFilter, FiUser, FiFileText , FiCalendar} from 'react-icons/fi';
import Link from 'next/link';

export default function PagosPage() {
  // Datos de ejemplo para pagos
  const pagosClientes = [
    {
      id: 1,
      cliente: "Juan López",
      poliza: "POL-2023-00158",
      monto: "$8,750.00",
      metodo: "Tarjeta",
      fechaMaxima: "01/05/2025",
      fechaPago: "01/05/2025",
      estado: "Completado",
      documento: true
    },
    {
      id: 2,
      cliente: "María Pérez",
      poliza: "POL-2023-00234",
      monto: "$5,000.00",
      metodo: "Transferencia",
      fechaMaxima: "08/05/2025",
      fechaPago: "",
      estado: "Pendiente",
      documento: false
    },
    {
      id: 3,
      cliente: "Carlos Gómez",
      poliza: "POL-2023-00345",
      monto: "$3,200.00",
      metodo: "Efectivo",
      fechaMaxima: "30/04/2025",
      fechaPago: "",
      estado: "Vencido",
      documento: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Gestión de Pagos</h1>
          <p className="text-gray-600 mt-2">Administra y visualiza el historial de pagos</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors">
            <FiDownload className="text-gray-500" />
            <span>Exportar</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm">
            <FiPlus />
            <span>Nuevo Pago</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-xs border border-gray-200 mb-6">
        <nav className="flex divide-x divide-gray-200">
          <button className="px-4 py-3 text-sm font-medium text-blue-600 bg-blue-50 flex items-center gap-2">
            <FiUser className="text-blue-600" />
            Pagos de Clientes
          </button>
          <Link href="/pagos/clientes">
            <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 flex items-center gap-2">
              <FiUser className="text-gray-500" />
              Pagos a Clientes
            </button>
          </Link>
        </nav>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-xs border border-gray-200 p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar cliente, póliza..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiFilter className="text-gray-400" />
            </div>
            <select className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
              <option>Todos los estados</option>
              <option>Completados</option>
              <option>Pendientes</option>
              <option>Vencidos</option>
            </select>
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiCalendar className="text-gray-400" />
            </div>
            <input
              type="date"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <button className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2">
            <FiFilter />
            <span>Más filtros</span>
          </button>
        </div>
      </div>

      {/* Pagos Table */}
      <div className="bg-white rounded-lg shadow-xs border border-gray-200 overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Póliza
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fechas
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Monto
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Método
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
              {pagosClientes.map((pago) => (
                <tr key={pago.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <span className="text-blue-600 font-medium text-sm">
                          {pago.cliente.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{pago.cliente}</div>
                        <div className="text-xs text-gray-500">ID: {pago.id.toString().padStart(4, '0')}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 font-mono">{pago.poliza}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div className="font-medium">Vence: {pago.fechaMaxima}</div>
                      <div className={pago.fechaPago ? "text-gray-600" : "text-amber-600"}>
                        {pago.fechaPago ? `Pagado: ${pago.fechaPago}` : 'Pendiente'}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{pago.monto}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {pago.metodo === "Tarjeta" ? (
                        <FiCreditCard className="text-gray-400 mr-2" />
                      ) : pago.metodo === "Transferencia" ? (
                        <FiDollarSign className="text-gray-400 mr-2" />
                      ) : (
                        <FiDollarSign className="text-gray-400 mr-2" />
                      )}
                      <span className="text-sm text-gray-500">{pago.metodo}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {pago.estado === "Completado" && (
                      <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        Completado
                      </span>
                    )}
                    {pago.estado === "Pendiente" && (
                      <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800 flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        Pendiente
                      </span>
                    )}
                    {pago.estado === "Vencido" && (
                      <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        Vencido
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end items-center gap-2">
                      <button 
                        className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
                        title="Ver detalles"
                      >
                        <FiEye className="h-5 w-5" />
                      </button>
                      
                      {pago.documento && (
                        <button 
                          className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 hover:text-blue-800 transition-colors"
                          title="Ver documento"
                        >
                          <FiFileText className="h-5 w-5" />
                        </button>
                      )}
                      
                      {pago.estado !== "Completado" && (
                        <>
                          <button 
                            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
                            title="Editar"
                          >
                            <FiEdit className="h-5 w-5" />
                          </button>
                          <button 
                            className="p-2 rounded-lg hover:bg-red-50 text-red-600 hover:text-red-800 transition-colors"
                            title="Cancelar"
                          >
                            <FiTrash2 className="h-5 w-5" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="bg-white rounded-lg shadow-xs border border-gray-200 p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-gray-500 mb-4 md:mb-0">
          Mostrando <span className="font-medium text-gray-700">1</span> a <span className="font-medium text-gray-700">3</span> de <span className="font-medium text-gray-700">8</span> pagos
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            <FiChevronLeft className="h-5 w-5" />
          </button>
          <button className="px-3.5 py-2 rounded-lg border border-blue-600 bg-blue-600 text-white font-medium">
            1
          </button>
          <button className="px-3.5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="px-3.5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
            3
          </button>
          <button className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50">
            <FiChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}