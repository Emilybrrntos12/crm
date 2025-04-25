import Link from "next/link";

export default function ClientesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Gestión de Clientes</h1>
        <Link 
          href="/clientes/nuevo" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          + Nuevo Cliente
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Buscar clientes..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-md text-sm">Filtrar</button>
            <button className="px-3 py-1 border rounded-md text-sm">Exportar</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Empresa</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Ejemplo de fila - esto deberías mapearlo desde tu base de datos */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">JL</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Juan López</div>
                      <div className="text-sm text-gray-500">Cliente desde: 2023</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">juan@example.com</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">+52 55 1234 5678</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Acme Corp</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link href="/clientes/1" className="text-blue-600 hover:text-blue-900 mr-3">Ver</Link>
                  <Link href="/clientes/1/editar" className="text-green-600 hover:text-green-900 mr-3">Editar</Link>
                  <button className="text-red-600 hover:text-red-900">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Mostrando <span className="font-medium">1</span> a <span className="font-medium">10</span> de <span className="font-medium">24</span> resultados
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-md text-sm disabled:opacity-50" disabled>Anterior</button>
            <button className="px-3 py-1 border rounded-md text-sm bg-blue-600 text-white">1</button>
            <button className="px-3 py-1 border rounded-md text-sm">2</button>
            <button className="px-3 py-1 border rounded-md text-sm">3</button>
            <button className="px-3 py-1 border rounded-md text-sm">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
}