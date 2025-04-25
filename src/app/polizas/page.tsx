export default function PolizasPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Administración de Pólizas</h1>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
              + Nueva Póliza
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
              Renovaciones
            </button>
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h3 className="text-gray-500 text-sm font-medium">Total Pólizas</h3>
            <p className="text-2xl font-bold text-gray-800">1,248</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h3 className="text-gray-500 text-sm font-medium">Activas</h3>
            <p className="text-2xl font-bold text-gray-800">984</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
            <h3 className="text-gray-500 text-sm font-medium">Por Vencer</h3>
            <p className="text-2xl font-bold text-gray-800">42</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <h3 className="text-gray-500 text-sm font-medium">Vencidas</h3>
            <p className="text-2xl font-bold text-gray-800">12</p>
          </div>
        </div>
  
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-800">Pólizas Recientes</h2>
              <select className="border rounded-md px-3 py-1 text-sm">
                <option>Todas</option>
                <option>Activas</option>
                <option>Por Vencer</option>
                <option>Vencidas</option>
              </select>
            </div>
          </div>
  
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N° Póliza</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aseguradora</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vigencia</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">POL-2023-00158</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Juan López</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Seguros Atlas</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Auto Todo Riesgo</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">01/01/2023 - 31/12/2023</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Activa</span>
                  </td>
                </tr>
                {/* Más filas... */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }