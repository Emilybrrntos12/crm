export default function PagosPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Registro de Pagos</h1>
  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-800">Historial de Pagos</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
                  + Registrar Pago
                </button>
              </div>
  
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Póliza</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monto</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Método</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15/03/2023</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Juan López</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">POL-2023-00158</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$8,750.00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Transferencia</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Completado</span>
                      </td>
                    </tr>
                    {/* Más filas... */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
  
          <div>
            <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
              <div className="p-4 border-b">
                <h2 className="text-lg font-medium text-gray-800">Resumen de Pagos</h2>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Este Mes</h3>
                  <p className="text-2xl font-bold text-gray-800">$124,850.00</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Mes Anterior</h3>
                  <p className="text-xl font-semibold text-gray-800">$98,420.00</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Pagos Pendientes</h3>
                  <p className="text-xl font-semibold text-red-600">$23,500.00</p>
                </div>
              </div>
            </div>
  
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-lg font-medium text-gray-800">Métodos de Pago</h2>
              </div>
              <div className="p-6">
                <div className="h-48">
                  {/* Gráfico de métodos de pago */}
                  <div className="flex items-center justify-center h-full bg-gray-100 rounded">
                    <p className="text-gray-500">Gráfico de métodos de pago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }