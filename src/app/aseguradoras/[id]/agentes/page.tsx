'use client';
import React, { useState } from 'react';
import { 
  FaUserTie,
  FaChartLine,
  FaChevronLeft,
  FaPhone,
  FaEnvelope,
  FaStar,
  FaCheckCircle,
  FaUserPlus,
  FaFilter,
  FaDownload,
  FaPrint
} from 'react-icons/fa';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function AgentesPage({ params }: { params: { id: string } }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('todos');
  const [showAgentDetail, setShowAgentDetail] = useState<number | null>(null);

  // Datos de ejemplo de los agentes
  const agentes = [
    {
      id: 1,
      nombre: "Carlos Rodríguez",
      foto: "https://i.pravatar.cc/150?img=1",
      cargo: "Agente Senior",
      experiencia: "8 años",
      telefono: "+502 5555-1234",
      email: "carlos.rodriguez@segurosatlas.com",
      rating: 4.8,
      ventas: {
        mes: 12,
        total: 156
      },
      comisiones: {
        auto: "5%",
        vida: "8%",
        hogar: "4%",
        empresarial: "6%"
      },
      especialidades: ["Seguros de Vida", "Seguros Empresariales"],
      rendimiento: {
        polizasActivas: 85,
        renovaciones: 92,
        satisfaccionCliente: 96
      }
    },
    {
      id: 2,
      nombre: "Ana Martínez",
      foto: "https://i.pravatar.cc/150?img=2",
      cargo: "Agente Ejecutivo",
      experiencia: "5 años",
      telefono: "+502 5555-5678",
      email: "ana.martinez@segurosatlas.com",
      rating: 4.6,
      ventas: {
        mes: 9,
        total: 98
      },
      comisiones: {
        auto: "5%",
        vida: "8%",
        hogar: "4%",
        empresarial: "6%"
      },
      especialidades: ["Seguros de Auto", "Seguros de Hogar"],
      rendimiento: {
        polizasActivas: 62,
        renovaciones: 88,
        satisfaccionCliente: 94
      }
    }
  ];

  const filteredAgentes = agentes.filter(agente => {
    const matchesSearch = agente.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'todos' || 
      (selectedFilter === 'top' && agente.rating >= 4.5) ||
      (selectedFilter === 'nuevos' && parseInt(agente.experiencia) <= 2);
    return matchesSearch && matchesFilter;
  });

  const rendimientoOptions = {
    chart: {
      type: 'bar' as const,
      height: 250
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    colors: ['#4F46E5'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    },
    yaxis: {
      title: {
        text: 'Pólizas'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return val + " pólizas"
        }
      }
    }
  };

  const rendimientoSeries = [{
    name: 'Pólizas Vendidas',
    data: [44, 55, 57, 56, 61, 58]
  }];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Barra superior */}
      <div className="bg-blue-600 h-32 relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex justify-between items-center h-16">
            <Link href={`/aseguradoras/${params.id}`}>
              <button className="p-2 rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors">
                <FaChevronLeft className="text-white h-5 w-5" />
              </button>
            </Link>
            <button className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors rounded-lg text-white">
              <FaUserPlus className="h-5 w-5" />
              <span>Agregar Agente</span>
            </button>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 md:px-6 -mt-16 relative z-20">
        {/* Header con estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Agentes</p>
                <p className="text-2xl font-bold text-gray-800">12</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <FaUserTie className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Ventas del Mes</p>
                <p className="text-2xl font-bold text-gray-800">45</p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <FaChartLine className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Comisiones Pagadas</p>
                <p className="text-2xl font-bold text-gray-800">Q25,420</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <FaCheckCircle className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filtros y búsqueda */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input 
                type="text" 
                placeholder="Buscar agente por nombre..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <select 
                value={selectedFilter} 
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="todos">Todos los Agentes</option>
                <option value="top">Top Agentes</option>
                <option value="nuevos">Nuevos Agentes</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                <FaFilter className="h-5 w-5" />
              </button>
              <button className="p-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors">
                <FaDownload className="h-5 w-5" />
              </button>
              <button className="p-3 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition-colors">
                <FaPrint className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Gráfico de rendimiento */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Rendimiento de Ventas</h2>
          <Chart 
            options={rendimientoOptions} 
            series={rendimientoSeries} 
            type="bar" 
            height={250} 
          />
        </div>

        {/* Tabla de comisiones */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tabla de Comisiones</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tipo de Seguro</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Comisión Base</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bonificación</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Meta Mensual</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Seguro de Vida</td>
                  <td className="px-6 py-4 text-sm text-gray-900">8%</td>
                  <td className="px-6 py-4 text-sm text-gray-900">+2% al superar 10 pólizas</td>
                  <td className="px-6 py-4 text-sm text-gray-900">8 pólizas</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Seguro de Auto</td>
                  <td className="px-6 py-4 text-sm text-gray-900">5%</td>
                  <td className="px-6 py-4 text-sm text-gray-900">+1.5% al superar 15 pólizas</td>
                  <td className="px-6 py-4 text-sm text-gray-900">12 pólizas</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Seguro de Hogar</td>
                  <td className="px-6 py-4 text-sm text-gray-900">4%</td>
                  <td className="px-6 py-4 text-sm text-gray-900">+1% al superar 8 pólizas</td>
                  <td className="px-6 py-4 text-sm text-gray-900">6 pólizas</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Seguro Empresarial</td>
                  <td className="px-6 py-4 text-sm text-gray-900">6%</td>
                  <td className="px-6 py-4 text-sm text-gray-900">+2.5% al superar 5 pólizas</td>
                  <td className="px-6 py-4 text-sm text-gray-900">4 pólizas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Lista de agentes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAgentes.map((agente) => (
            <div key={agente.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <img 
                    src={agente.foto} 
                    alt={agente.nombre}
                    className="h-16 w-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{agente.nombre}</h3>
                    <p className="text-sm text-gray-500">{agente.cargo}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(agente.rating) 
                              ? 'text-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-sm text-gray-600">({agente.rating})</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <FaPhone className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{agente.telefono}</span>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{agente.email}</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Ventas del mes:</span> {agente.ventas.mes}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Experiencia:</span> {agente.experiencia}
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Especialidades</h4>
                  <div className="flex flex-wrap gap-2">
                    {agente.especialidades.map((esp) => (
                      <span 
                        key={esp}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
                      >
                        {esp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-900">
                        {agente.rendimiento.polizasActivas}
                      </div>
                      <div className="text-xs text-gray-500">Pólizas Activas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-900">
                        {agente.rendimiento.renovaciones}%
                      </div>
                      <div className="text-xs text-gray-500">Renovaciones</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-900">
                        {agente.rendimiento.satisfaccionCliente}%
                      </div>
                      <div className="text-xs text-gray-500">Satisfacción</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
