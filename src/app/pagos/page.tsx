import { FiPlus, FiSearch, FiFilter, FiDownload, FiEye, FiEdit, FiTrash2, FiChevronLeft, FiChevronRight, FiDollarSign, FiCreditCard, FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi';

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
      estado: "Completado"
    },
    {
      id: 2,
      cliente: "María Pérez",
      poliza: "POL-2023-00234",
      monto: "$5,000.00",
      metodo: "Transferencia",
      fechaMaxima: "08/05/2025",
      fechaPago: "",
      estado: "Pendiente"
    },
    {
      id: 3,
      cliente: "Carlos Gómez",
      poliza: "POL-2023-00345",
      monto: "$3,200.00",
      metodo: "Efectivo",
      fechaMaxima: "30/04/2025",
      fechaPago: "",
      estado: "Vencido"
    }
  ];

  const pagosEmpresa = [
    {
      id: 1,
      cliente: "Siniestro Juan López",
      poliza: "POL-2023-00158",
      monto: "$15,000.00",
      metodo: "Transferencia",
      fechaMaxima: "10/05/2025",
      fechaPago: "05/05/2025",
      estado: "Completado"
    },
    {
      id: 2,
      cliente: "Siniestro María Pérez",
      poliza: "POL-2023-00234",
      monto: "$8,500.00",
      metodo: "Cheque",
      fechaMaxima: "15/05/2025",
      fechaPago: "",
      estado: "Pendiente"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Gestión de Pagos</h1>
          <p className="text-gray-600 mt-2">Administra pagos recibidos y realizados</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md flex items-center mt-4 md:mt-0 transition duration-300">
          <FiPlus className="mr-2" />
          Registrar Pago
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm p-1 mb-6">
        <nav className="flex space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
            Pagos de Clientes
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
            Pagos a Clientes
          </button>
        </nav>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar pagos..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Filtrar por estado</option>
            <option>Completados</option>
            <option>Pendientes</option>
            <option>Vencidos</option>
          </select>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FiDownload className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Pagos de Clientes */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <FiDollarSign className="mr-2 text-blue-500" />
          Pagos de Clientes a Empresa
        </h2>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cliente / Póliza
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha Límite
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha de Pago
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
                  <tr key={pago.id} className="hover:bg-gray-50 transition duration-150">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{pago.cliente}</div>
                      <div className="text-sm text-gray-500">{pago.poliza}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{pago.fechaMaxima}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {pago.fechaPago || <span className="text-gray-400">No pagado</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{pago.monto}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {pago.metodo === "Tarjeta" ? (
                          <FiCreditCard className="text-gray-400 mr-2" />
                        ) : (
                          <FiDollarSign className="text-gray-400 mr-2" />
                        )}
                        <span className="text-sm text-gray-500">{pago.metodo}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {pago.estado === "Completado" && (
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Completado
                        </span>
                      )}
                      {pago.estado === "Pendiente" && (
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Pendiente
                        </span>
                      )}
                      {pago.estado === "Vencido" && (
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Vencido
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-3">
                        <button className="text-blue-600 hover:text-blue-900">
                          <FiEye className="h-5 w-5" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <FiEdit className="h-5 w-5" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <FiTrash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagos a Clientes */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <FiDollarSign className="mr-2 text-green-500" />
          Pagos de Empresa a Clientes (Siniestros)
        </h2>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Beneficiario / Póliza
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha Límite
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha de Pago
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
                {pagosEmpresa.map((pago) => (
                  <tr key={pago.id} className="hover:bg-gray-50 transition duration-150">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{pago.cliente}</div>
                      <div className="text-sm text-gray-500">{pago.poliza}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{pago.fechaMaxima}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {pago.fechaPago || <span className="text-gray-400">No pagado</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{pago.monto}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FiDollarSign className="text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500">{pago.metodo}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {pago.estado === "Completado" && (
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Completado
                        </span>
                      )}
                      {pago.estado === "Pendiente" && (
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Pendiente
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-3">
                        <button className="text-blue-600 hover:text-blue-900">
                          <FiEye className="h-5 w-5" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <FiEdit className="h-5 w-5" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <FiTrash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-gray-500 mb-4 md:mb-0">
          Mostrando <span className="font-medium">1</span> a <span className="font-medium">5</span> de <span className="font-medium">8</span> resultados
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
            <FiChevronLeft className="h-5 w-5" />
          </button>
          <button className="px-4 py-2 rounded-md border bg-blue-600 text-white">1</button>
          <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">2</button>
          <button className="p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
            <FiChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}