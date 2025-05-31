'use client';
import React from 'react';
import { 
  FaShieldAlt,
  FaPhone,
  FaGlobe,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStar,
  FaChartLine,
  FaFileContract,
  FaUserShield,
  FaChevronLeft
} from 'react-icons/fa';
import Link from 'next/link';

export default function DetallesAseguradoraPage({ params }: { params: { id: string } }) {
  // Datos de ejemplo de la aseguradora
  const aseguradora = {
    id: params.id,
    nombre: 'Seguros Atlas',
    descripcion: 'Líder en seguros de automóviles con cobertura nacional y más de 50 años de experiencia brindando seguridad y confianza a nuestros asegurados.',
    productos: ['Autos', 'Hogar', 'Vida', 'Salud', 'Empresas'],
    rating: 4.5,
    telefono: '800 123 4567',
    email: 'contacto@segurosatlas.com',
    website: 'www.segurosatlas.com',
    direccion: 'Av. Reforma 250, Zona 9, Ciudad de Guatemala',
    fundacion: '1975',
    empleados: '1,200+',
    sucursales: '25',
    asegurados: '100,000+',
    color: 'bg-blue-600',
    estadisticas: {
      polizasActivas: 45000,
      siniestrosPagados: 2500,
      satisfaccionCliente: 92,
      tiempoRespuesta: '24h'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Barra superior con color de la aseguradora */}
      <div className={`${aseguradora.color} h-32 relative`}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex justify-between items-center h-16">            <Link href="/aseguradoras">
              <button className="p-2 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors">
                <FaChevronLeft className="text-white h-5 w-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 md:px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna izquierda */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tarjeta de información principal */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start mb-6">
                <div className={`p-4 rounded-xl shadow-sm bg-white border border-gray-100 mr-4`}>
                  <FaShieldAlt className={`h-8 w-8 ${aseguradora.color.replace('bg-', 'text-')}`} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{aseguradora.nombre}</h1>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(aseguradora.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-2 text-gray-600">({aseguradora.rating})</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{aseguradora.descripcion}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-600">{aseguradora.direccion}</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-600">{aseguradora.telefono}</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-gray-600">{aseguradora.email}</span>
                </div>
                <div className="flex items-center">
                  <FaGlobe className="h-5 w-5 text-gray-400 mr-3" />
                  <a href={`https://${aseguradora.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {aseguradora.website}
                  </a>
                </div>
              </div>

              {/* Estadísticas rápidas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{aseguradora.fundacion}</div>
                  <div className="text-sm text-gray-500">Año fundación</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{aseguradora.empleados}</div>
                  <div className="text-sm text-gray-500">Empleados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{aseguradora.sucursales}</div>
                  <div className="text-sm text-gray-500">Sucursales</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{aseguradora.asegurados}</div>
                  <div className="text-sm text-gray-500">Asegurados</div>
                </div>
              </div>
            </div>

            {/* Tarjeta de productos */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Productos y Servicios</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aseguradora.productos.map((producto) => (
                  <div key={producto} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <FaFileContract className="h-6 w-6 text-blue-600 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-800">{producto}</h3>
                      <p className="text-sm text-gray-500">Ver planes disponibles</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="space-y-6">
            {/* Tarjeta de rendimiento */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Rendimiento</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Pólizas Activas</span>
                    <span className="font-medium text-gray-800">{aseguradora.estadisticas.polizasActivas.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Siniestros Pagados</span>
                    <span className="font-medium text-gray-800">{aseguradora.estadisticas.siniestrosPagados.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Satisfacción Cliente</span>
                    <span className="font-medium text-gray-800">{aseguradora.estadisticas.satisfaccionCliente}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Tiempo Respuesta</span>
                    <span className="font-medium text-gray-800">{aseguradora.estadisticas.tiempoRespuesta}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>            {/* Tarjeta de Agentes */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Agentes</h2>
              <Link href={`/aseguradoras/${aseguradora.id}/agentes`}>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                  <span>Ver todos los agentes</span>
                </button>
              </Link>
            </div>

            {/* Tarjeta de acreditaciones */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Acreditaciones</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center">
                  <FaUserShield className="h-8 w-8 text-gray-400" />
                </div>
                <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center">
                  <FaChartLine className="h-8 w-8 text-gray-400" />
                </div>
                <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center">
                  <FaShieldAlt className="h-8 w-8 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
