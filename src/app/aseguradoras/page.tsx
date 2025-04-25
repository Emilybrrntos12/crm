export default function AseguradorasPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Catálogo de Aseguradoras</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tarjeta de aseguradora - repetir para cada aseguradora */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="bg-blue-600 h-3"></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Seguros Atlas</h2>
              </div>
              <p className="text-gray-600 mb-4">Ofrece coberturas para automóviles, hogar y vida.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Autos</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Hogar</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Vida</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">15 productos</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Ver productos</button>
              </div>
            </div>
          </div>
  
          {/* Otras aseguradoras... */}
        </div>
  
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Productos por Aseguradora</h2>
          <div className="h-64">
            {/* Aquí iría un gráfico de barras con Chart.js o similar */}
            <div className="flex items-center justify-center h-full bg-gray-100 rounded">
              <p className="text-gray-500">Gráfico de productos por aseguradora</p>
            </div>
          </div>
        </div>
      </div>
    );
  }