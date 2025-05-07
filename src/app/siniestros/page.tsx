import { 
  FaExclamationTriangle, 
  FaSearch, 
  FaFileAlt, 
  FaMoneyBillWave, 
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaPlus,
  FaFilter,
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaDownload,
  FaEllipsisV,
  FaUserShield
} from 'react-icons/fa';
import Link from 'next/link';

export default function SiniestrosPage() {
  // Datos de ejemplo para siniestros (7 casos representativos)
  const siniestros = [
    {
      id: 'SIN-2023-0042',
      cliente: 'Juan López',
      poliza: 'POL-2023-00158',
      tipo: 'Auto - Colisión',
      fecha: '10/03/2023',
      monto: '$8,500.00',
      estado: 'reportado',
      icon: FaExclamationTriangle,
      color: 'bg-blue-100 text-blue-800',
      border: 'border-l-4 border-blue-500'
    },
    {
      id: 'SIN-2023-0165',
      cliente: 'María González',
      poliza: 'POL-2023-00142',
      tipo: 'Hogar - Inundación',
      fecha: '28/02/2023',
      monto: '$12,300.00',
      estado: 'en_evaluacion',
      icon: FaSearch,
      color: 'bg-amber-100 text-amber-800',
      border: 'border-l-4 border-amber-500'
    },
    {
      id: 'SIN-2023-0182',
      cliente: 'Carlos Martínez',
      poliza: 'POL-2023-00155',
      tipo: 'Salud - Hospitalización',
      fecha: '08/03/2023',
      monto: '$5,750.00',
      estado: 'documentacion_pendiente',
      icon: FaFileAlt,
      color: 'bg-orange-100 text-orange-800',
      border: 'border-l-4 border-orange-500'
    },
    {
      id: 'SIN-2023-0195',
      cliente: 'Ana Rodríguez',
      poliza: 'POL-2023-00132',
      tipo: 'Vida - Fallecimiento',
      fecha: '20/02/2023',
      monto: '$50,000.00',
      estado: 'aprobado',
      icon: FaCheckCircle,
      color: 'bg-purple-100 text-purple-800',
      border: 'border-l-4 border-purple-500'
    },
    {
      id: 'SIN-2023-0201',
      cliente: 'Roberto Sánchez',
      poliza: 'POL-2023-00125',
      tipo: 'Auto - Robo total',
      fecha: '15/02/2023',
      monto: '$35,000.00',
      estado: 'pagado',
      icon: FaMoneyBillWave,
      color: 'bg-green-100 text-green-800',
      border: 'border-l-4 border-green-500'
    },
    {
      id: 'SIN-2023-0210',
      cliente: 'Laura Díaz',
      poliza: 'POL-2023-00118',
      tipo: 'Responsabilidad Civil',
      fecha: '10/02/2023',
      monto: '$15,000.00',
      estado: 'rechazado',
      icon: FaTimesCircle,
      color: 'bg-red-100 text-red-800',
      border: 'border-l-4 border-red-500'
    },
    {
      id: 'SIN-2023-0218',
      cliente: 'Pedro Vargas',
      poliza: 'POL-2023-00110',
      tipo: 'Fraude - Investigación',
      fecha: '05/02/2023',
      monto: '$0.00',
      estado: 'en_disputa',
      icon: FaUserShield,
      color: 'bg-pink-100 text-pink-800',
      border: 'border-l-4 border-pink-500'
    }
  ];

  // Tarjetas de métricas con iconos
  const metricas = [
    { 
      titulo: 'Total Siniestros', 
      valor: '48', 
      cambio: '+5%', 
      icono: FaExclamationTriangle,
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      titulo: 'En Proceso', 
      valor: '12', 
      cambio: '-2%', 
      icono: FaClock,
      color: 'bg-amber-100 text-amber-600'
    },
    { 
      titulo: 'Aprobados', 
      valor: '8', 
      cambio: '+12%', 
      icono: FaCheckCircle,
      color: 'bg-purple-100 text-purple-600'
    },
    { 
      titulo: 'Pagados', 
      valor: '3', 
      cambio: '+3%', 
      icono: FaMoneyBillWave,
      color: 'bg-green-100 text-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Barra superior */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/">
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">
            <FaHome className="text-gray-600 h-5 w-5" />
          </button>
        </Link>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50">
            <FaDownload className="text-gray-600 h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50">
            <FaEllipsisV className="text-gray-600 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Header principal */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Gestión de Siniestros</h1>
          <p className="text-gray-600 mt-1">Seguimiento y administración de reclamaciones</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm">
          <FaPlus className="text-lg" />
          <span>Nuevo Reporte</span>
        </button>
      </div>

      {/* Tarjetas métricas mejoradas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {metricas.map((metrica, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{metrica.titulo}</p>
                <p className="text-2xl font-bold mt-1">{metrica.valor}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full ${metrica.cambio.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {metrica.cambio}
                </span>
              </div>
              <div className={`p-3 rounded-lg ${metrica.color} self-start`}>
                <metrica.icono className="text-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Panel de filtros avanzados */}
      <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar por cliente o póliza..."
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaFilter className="text-gray-400" />
            </div>
            <select className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
              <option>Todos los estados</option>
              <option>Reportado</option>
              <option>En evaluación</option>
              <option>Documentación pendiente</option>
              <option>Aprobado</option>
              <option>Pagado</option>
              <option>Rechazado</option>
              <option>En disputa</option>
            </select>
          </div>
          
          <select className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
            <option>Todos los tipos</option>
            <option>Automóvil</option>
            <option>Hogar</option>
            <option>Salud</option>
            <option>Vida</option>
            <option>Responsabilidad Civil</option>
          </select>
          
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 text-sm">
            <FaFilter />
            <span>Filtros avanzados</span>
          </button>
        </div>
      </div>

      {/* Tabla de siniestros con estados completos */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-800">Registro de Siniestros</h2>
          <div className="text-sm text-gray-500">
            <span className="font-medium text-gray-700">7</span> casos mostrados de <span className="font-medium text-gray-700">48</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Siniestro</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Póliza</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {siniestros.map((siniestro, index) => (
                <tr key={index} className={`hover:bg-gray-50 ${siniestro.border}`}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-blue-600">{siniestro.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{siniestro.cliente}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-blue-600">{siniestro.poliza}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg ${siniestro.color.replace('text-', 'text-opacity-40 ')}`}>
                        <siniestro.icon className="text-xs" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{siniestro.tipo.split(' - ')[0]}</div>
                        <div className="text-xs text-gray-500">{siniestro.tipo.split(' - ')[1]}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{siniestro.fecha}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{siniestro.monto}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex items-center text-xs font-semibold rounded-full ${siniestro.color}`}>
                      <siniestro.icon className="mr-1.5 text-xs" />
                      {siniestro.estado.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end items-center gap-1">
                      <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600" title="Ver detalles">
                        <FaSearch className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600" title="Documentos">
                        <FaFileAlt className="h-4 w-4" />
                      </button>
                      {!['pagado', 'rechazado'].includes(siniestro.estado) && (
                        <button className="p-2 rounded-lg hover:bg-green-50 text-green-600" title="Editar">
                          <FaCheckCircle className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación mejorada */}
        <div className="px-6 py-4 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            Mostrando <span className="font-medium text-gray-700">1-7</span> de <span className="font-medium text-gray-700">48</span> siniestros
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
              <FaChevronLeft className="h-4 w-4" />
            </button>
            <button className="px-3.5 py-2 rounded-lg border border-blue-600 bg-blue-600 text-white text-sm font-medium">
              1
            </button>
            <button className="px-3.5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">
              2
            </button>
            <button className="px-3.5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">
              3
            </button>
            <span className="px-2 text-gray-500">...</span>
            <button className="px-3.5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">
              7
            </button>
            <button className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50">
              <FaChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Versión móvil (opcional) */}
      <div className="md:hidden mt-6 space-y-3">
        {siniestros.slice(0, 3).map((siniestro, index) => (
          <div key={index} className={`bg-white p-4 rounded-lg shadow-sm border-l-4 ${siniestro.border}`}>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-blue-600">{siniestro.id}</p>
                <p className="text-sm text-gray-900 mt-1">{siniestro.cliente}</p>
                <p className="text-xs text-gray-500 mt-1">{siniestro.tipo}</p>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${siniestro.color}`}>
                <siniestro.icon className="inline mr-1" size={10} />
                {siniestro.estado.split('_')[0]}
              </span>
            </div>
            <div className="flex justify-between items-center mt-3">
              <span className="text-xs text-gray-500">{siniestro.fecha}</span>
              <span className="text-sm font-medium">{siniestro.monto}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}