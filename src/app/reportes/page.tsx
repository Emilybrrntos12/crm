import { 
  FaFilePdf, 
  FaFileExcel, 
  FaFileCsv, 
  FaDownload, 
  FaTrash, 
  FaSearch,
  FaFilter,
  FaCalendarAlt,
  FaHome,
  FaPlus,
  FaSave,
  FaChartBar,
  FaFileSignature,
  FaUsers,
  FaChevronRight,
  FaChevronLeft,
  FaMoneyBillWave
} from 'react-icons/fa';
import Link from 'next/link';

export default function ReportesPage() {
  // Tipos de reportes disponibles
  const reportTypes = [
    { value: 'siniestros', label: 'Reporte de Siniestros', icon: <FaFileSignature className="mr-2" /> },
    { value: 'polizas', label: 'Reporte de Pólizas', icon: <FaFileSignature className="mr-2" /> },
    { value: 'financiero', label: 'Reporte Financiero', icon: <FaMoneyBillWave className="mr-2" /> },
    { value: 'clientes', label: 'Reporte de Clientes', icon: <FaUsers className="mr-2" /> }
  ];

  // Formatos disponibles
  const formats = [
    { value: 'pdf', label: 'PDF', icon: <FaFilePdf className="mr-2 text-red-500" /> },
    { value: 'excel', label: 'Excel', icon: <FaFileExcel className="mr-2 text-green-600" /> },
    { value: 'csv', label: 'CSV', icon: <FaFileCsv className="mr-2 text-blue-500" /> }
  ];

  // Filtros disponibles
  const filters = [
    { value: 'all', label: 'Todos los registros' },
    { value: 'active', label: 'Solo activos' },
    { value: 'branch', label: 'Por sucursal' },
    { value: 'policy', label: 'Por tipo de póliza' }
  ];

  // Reportes generados
  const generatedReports = [
    {
      id: 1,
      name: 'Reporte_Siniestros_Marzo_2023',
      type: 'Siniestros',
      date: '15/03/2023 10:45',
      format: 'PDF',
      size: '2.4 MB',
      icon: <FaFilePdf className="text-red-500" />
    },
    {
      id: 2,
      name: 'Clientes_Activos_Q1_2023',
      type: 'Clientes',
      date: '05/04/2023 14:20',
      format: 'Excel',
      size: '1.8 MB',
      icon: <FaFileExcel className="text-green-600" />
    },
    {
      id: 3,
      name: 'Financiero_Anual_2022',
      type: 'Financiero',
      date: '20/01/2023 09:15',
      format: 'PDF',
      size: '5.2 MB',
      icon: <FaFilePdf className="text-red-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header superior */}
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
            <FaFilter className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Header principal */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Generación de Reportes</h1>
          <p className="text-gray-600 mt-1">Crea y gestiona reportes personalizados</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm">
          <FaPlus />
          <span>Nuevo Reporte</span>
        </button>
      </div>

      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {/* Tarjeta 1 - Reportes Generados */}
        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-purple-500 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Reportes Generados</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">24</p>
              <p className="text-xs text-purple-500 mt-2">+3 este mes</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <FaChartBar className="text-purple-600 text-xl" />
            </div>
          </div>
        </div>

        {/* Tarjeta 2 - Plantillas Guardadas */}
        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-blue-500 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Plantillas Guardadas</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">8</p>
              <p className="text-xs text-blue-500 mt-2">2 compartidas</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <FaSave className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>

        {/* Tarjeta 3 - Reportes Programados */}
        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-green-500 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Reportes Programados</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">5</p>
              <p className="text-xs text-green-500 mt-2">Próximo: 28/05</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <FaCalendarAlt className="text-green-600 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Sección de generación de reportes */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="p-5 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Generar Nuevo Reporte</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tipo de Reporte */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Reporte</label>
            <div className="relative">
              <select className="block w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
                <option value="">Seleccione un tipo</option>
                {reportTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FaChartBar className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Formato */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Formato</label>
            <div className="flex gap-4">
              {formats.map((format) => (
                <label key={format.value} className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="format" 
                    value={format.value}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    defaultChecked={format.value === 'pdf'}
                  />
                  <span className="flex items-center text-gray-700">
                    {format.icon} {format.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Rango de Fechas */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rango de Fechas</label>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input 
                  type="date" 
                  className="block w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FaCalendarAlt className="text-gray-400" />
                </div>
              </div>
              <span className="text-gray-500">a</span>
              <div className="relative flex-1">
                <input 
                  type="date" 
                  className="block w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FaCalendarAlt className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Filtros */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filtrar por</label>
            <div className="relative">
              <select className="block w-full pl-3 pr-10 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none">
                {filters.map((filter) => (
                  <option key={filter.value} value={filter.value}>
                    {filter.label}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FaFilter className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="md:col-span-2 flex justify-end gap-3 pt-2">
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors">
              <FaSave />
              <span>Guardar como Plantilla</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm">
              <FaChartBar />
              <span>Generar Reporte</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabla de reportes generados */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 border-b flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-800">Reportes Generados</h2>
          <div className="relative w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar reporte..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
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
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {generatedReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{report.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{report.type}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{report.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {report.icon}
                      <span className="ml-2 text-sm text-gray-500">{report.format}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{report.size}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end items-center gap-2">
                      <button 
                        className="p-2 rounded-lg hover:bg-blue-50 text-blue-600"
                        title="Descargar reporte"
                      >
                        <FaDownload className="h-4 w-4" />
                      </button>
                      <button 
                        className="p-2 rounded-lg hover:bg-red-50 text-red-600"
                        title="Eliminar reporte"
                      >
                        <FaTrash className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="px-6 py-4 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            Mostrando <span className="font-medium text-gray-700">1-3</span> de <span className="font-medium text-gray-700">24</span> reportes
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
            <button className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50">
              <FaChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}