import Link from 'next/link';
import { FiSearch, FiFilter, FiUser, FiHome, FiDownload, FiEye, FiEdit, FiTrash2, FiChevronLeft, FiChevronRight, FiDollarSign, FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi';

export default function PagosClientesPage() {
  // Datos de ejemplo para pagos de siniestros
  const pagosSiniestros = [
    {
      id: 1,
      cliente: "Juan López - Colisión vehicular",
      poliza: "POL-2023-00158",
      monto: "$15,000.00",
      metodo: "Transferencia",
      fechaMaxima: "10/05/2025",
      fechaPago: "05/05/2025",
      estado: "Completado",
      siniestro: "SIN-2025-001"
    },
    {
      id: 2,
      cliente: "María Pérez - Incendio residencial",
      poliza: "POL-2023-00234",
      monto: "$8,500.00",
      metodo: "Cheque",
      fechaMaxima: "15/05/2025",
      fechaPago: "",
      estado: "Pendiente",
      siniestro: "SIN-2025-002"
    },
    {
      id: 3,
      cliente: "Carlos Gómez - Robo de vehículo",
      poliza: "POL-2023-00345",
      monto: "$22,300.00",
      metodo: "Transferencia",
      fechaMaxima: "30/04/2025",
      fechaPago: "",
      estado: "Vencido",
      siniestro: "SIN-2025-003"
    },
    {
      id: 4,
      cliente: "Ana Martínez - Daños por inundación",
      poliza: "POL-2023-00456",
      monto: "$12,750.00",
      metodo: "Transferencia",
      fechaMaxima: "20/05/2025",
      fechaPago: "18/05/2025",
      estado: "Completado",
      siniestro: "SIN-2025-004"
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50 p-6">
{/* Botón de Home en la esquina superior izquierda */}
<div className="flex justify-start mb-4">
  <Link href="/">
    <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition duration-200">
      <FiHome className="text-gray-600 h-5 w-5" />
    </button>
  </Link>
</div>
  
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Pagos por Siniestros</h1>
          <p className="text-gray-600 mt-2">Gestión de indemnizaciones a clientes</p>
        </div>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md flex items-center transition duration-300">
            <FiDollarSign className="mr-2" />
            Registrar Pago
          </button>
          <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg shadow-sm flex items-center transition duration-300">
            <FiDownload className="mr-2" />
            Exportar
          </button>
          <Link href="/pagos/clientes/estadisticos">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md">
              Estadísticos
            </button>
          </Link>
        </div>
      </div>

          {/* Tabs */}
<div className="bg-white rounded-lg shadow-xs border border-gray-200 mb-6">
  <nav className="flex divide-x divide-gray-200">
    <Link href="/pagos">
      <button className="px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 flex items-center gap-2">
        <FiUser className="text-gray-500" />
        Pagos de Clientes
      </button>
    </Link>
    <button className="px-4 py-3 text-sm font-medium text-blue-600 bg-blue-50 flex items-center gap-2">
      <FiUser className="text-blue-600" />
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
              placeholder="Buscar siniestros..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Filtrar por estado</option>
            <option>Completados</option>
            <option>Pendientes</option>
            <option>Vencidos</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Filtrar por tipo</option>
            <option>Colisión vehicular</option>
            <option>Incendio</option>
            <option>Robo</option>
            <option>Daños naturales</option>
          </select>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FiFilter className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Siniestros Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente / Siniestro
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Póliza
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
                  Estado
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pagosSiniestros.map((pago) => (
                <tr key={pago.id} className="hover:bg-gray-50 transition duration-150">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{pago.cliente}</div>
                    <div className="text-sm text-gray-500">{pago.siniestro}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{pago.poliza}</div>
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
                    {pago.estado === "Completado" && (
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        <FiCheckCircle className="mr-1" /> Completado
                      </span>
                    )}
                    {pago.estado === "Pendiente" && (
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        <FiClock className="mr-1" /> Pendiente
                      </span>
                    )}
                    {pago.estado === "Vencido" && (
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        <FiAlertCircle className="mr-1" /> Vencido
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

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            Mostrando <span className="font-medium">1</span> a <span className="font-medium">4</span> de <span className="font-medium">4</span> siniestros
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <button className="px-4 py-2 rounded-md border bg-blue-600 text-white">1</button>
            <button className="p-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50 opacity-50 cursor-not-allowed">
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}