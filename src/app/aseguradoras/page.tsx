import { 
  FaShieldAlt, 
  FaHome, 
  FaChartBar,
  FaSearch,
  FaFilter,
  FaPlus,
  FaPhone,
  FaGlobe,
  FaStar
} from 'react-icons/fa';
import Link from 'next/link';

export default function AseguradorasPage() {
  // Datos de aseguradoras
  const aseguradoras = [
    {
      id: 1,
      nombre: 'Seguros Atlas',
      descripcion: 'Líder en seguros de automóviles con cobertura nacional',
      productos: ['Autos', 'Hogar', 'Vida'],
      productosCount: 15,
      rating: 4.5,
      telefono: '800 123 4567',
      website: 'www.segurosatlas.com',
      color: 'bg-blue-600',
      icon: <FaShieldAlt className="text-blue-600" />
    }
  ];

  // Colores para etiquetas de productos
  const tagColors = {
    'Autos': 'bg-blue-100 text-blue-800',
    'Hogar': 'bg-green-100 text-green-800',
    'Vida': 'bg-purple-100 text-purple-800',
    'Empresas': 'bg-yellow-100 text-yellow-800',
    'Salud': 'bg-pink-100 text-pink-800',
    'Responsabilidad Civil': 'bg-gray-100 text-gray-800',
    'Accidentes': 'bg-red-100 text-red-800',
    'Electrodomésticos': 'bg-orange-100 text-orange-800',
    'Joyas': 'bg-amber-100 text-amber-800',
    'Motos': 'bg-lime-100 text-lime-800',
    'Flotillas': 'bg-emerald-100 text-emerald-800',
    'Viajes': 'bg-cyan-100 text-cyan-800',
    'Marítimo': 'bg-indigo-100 text-indigo-800'
  };

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
            <FaFilter className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 text-gray-600">
            <FaSearch className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Header principal */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Catálogo de Aseguradoras</h1>
          <p className="text-gray-600 mt-1">Explora nuestras compañías aseguradoras aliadas</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm">
          <FaPlus />
          <span>Agregar Aseguradora</span>
        </button>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar aseguradoras..."
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaFilter className="text-gray-400" />
            </div>
            <select className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-sm">
              <option>Todos los tipos</option>
              <option>Autos</option>
              <option>Hogar</option>
              <option>Vida</option>
              <option>Empresas</option>
            </select>
          </div>
          
          <select className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
            <option>Calificación: Todas</option>
            <option>5 estrellas</option>
            <option>4+ estrellas</option>
            <option>3+ estrellas</option>
          </select>
          
          <button className="px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 text-sm">
            <FaFilter />
            <span>Filtros avanzados</span>
          </button>
        </div>
      </div>

      {/* Grid de aseguradoras */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {aseguradoras.map((aseguradora) => (
          <div key={aseguradora.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            {/* Barra superior de color */}
            <div className={`h-2 ${aseguradora.color}`}></div>
            
            <div className="p-6">
              {/* Header de la tarjeta */}
              <div className="flex items-start mb-4">
                <div className={`bg-white p-3 rounded-lg shadow-sm border border-gray-200 mr-4 ${aseguradora.color.replace('bg-', 'text-')}`}>
                  {aseguradora.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{aseguradora.nombre}</h2>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(aseguradora.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">({aseguradora.rating})</span>
                  </div>
                </div>
              </div>
              
              {/* Descripción */}
              <p className="text-gray-600 mb-4">{aseguradora.descripcion}</p>
              
              {/* Productos */}
              <div className="flex flex-wrap gap-2 mb-4">
                {aseguradora.productos.map((producto) => (
                  <span key={producto} className={`text-xs px-2 py-1 rounded ${tagColors[producto as keyof typeof tagColors] || 'bg-gray-100 text-gray-800'}`}>
                    {producto}
                  </span>
                ))}
              </div>
              
              {/* Información de contacto */}
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <FaPhone className="mr-2 text-gray-400" />
                  <span>{aseguradora.telefono}</span>
                </div>
                <div className="flex items-center">
                  <FaGlobe className="mr-2 text-gray-400" />
                  <a href={`https://${aseguradora.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {aseguradora.website}
                  </a>
                </div>
              </div>
                {/* Footer */}
              <div className="flex justify-end items-center pt-3 border-t border-gray-100">
                <span className="text-sm text-gray-500">{aseguradora.productosCount} productos</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gráfico de productos */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="p-5 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Productos por Aseguradora</h2>
        </div>
        <div className="p-6">
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <FaChartBar className="mx-auto text-gray-300 h-12 w-12 mb-2" />
              <p className="text-gray-500">Gráfico de productos por aseguradora</p>
              <p className="text-sm text-gray-400 mt-1">Visualización de datos interactiva</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-50 rounded-xl p-6 text-center">
        <h3 className="text-lg font-medium text-gray-800 mb-2">¿No encuentras lo que buscas?</h3>
        <p className="text-gray-600 mb-4">Contáctanos para ayudarte a encontrar la aseguradora perfecta para tus necesidades</p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Solicitar asesoría
        </button>
      </div>
    </div>
  );
}