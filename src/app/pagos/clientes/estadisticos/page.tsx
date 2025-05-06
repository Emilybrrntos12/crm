import React from 'react';
import { FiTrendingUp, FiClock, FiAlertCircle, FiDollarSign, FiPieChart, FiBarChart2 } from 'react-icons/fi';

export default function EstadisticosPage() {
  // Datos de ejemplo
  const stats = {
    totalPagos: 125000,
    porPagar: 32000,
    vencidos: 18000,
    crecimiento: 12.5,
    pagosCompletados: 87,
    pagosPendientes: 15,
    pagosVencidos: 8
  };

  const chartData = [
    { name: 'Ene', pagos: 12000, siniestros: 8000 },
    { name: 'Feb', pagos: 19000, siniestros: 12000 },
    { name: 'Mar', pagos: 15000, siniestros: 9000 },
    { name: 'Abr', pagos: 18000, siniestros: 11000 },
    { name: 'May', pagos: 21000, siniestros: 15000 },
    { name: 'Jun', pagos: 24000, siniestros: 18000 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Dashboard de Pagos</h1>
          <p className="text-gray-600 mt-2">Resumen estadístico de transacciones financieras</p>
        </div>
        <div className="mt-4 md:mt-0">
          <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Últimos 30 días</option>
            <option>Este mes</option>
            <option>Trimestre actual</option>
            <option>Este año</option>
          </select>
        </div>
      </div>

      {/* Main Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Pagos */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-500 mb-2">Total Recaudado</h3>
              <p className="text-3xl font-bold text-gray-800">${(stats.totalPagos / 1000).toFixed(1)}K</p>
              <div className="flex items-center mt-2">
                <FiTrendingUp className="text-green-500 mr-1" />
                <span className="text-sm text-green-500">+{stats.crecimiento}% vs período anterior</span>
              </div>
            </div>
            <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center">
              <FiDollarSign className="text-blue-600 text-xl" />
            </div>
          </div>
        </div>

        {/* Por Pagar */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-500 mb-2">Por Pagar</h3>
              <p className="text-3xl font-bold text-gray-800">${(stats.porPagar / 1000).toFixed(1)}K</p>
              <div className="flex items-center mt-2">
                <FiClock className="text-yellow-500 mr-1" />
                <span className="text-sm text-gray-500">{stats.pagosPendientes} pagos pendientes</span>
              </div>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full h-12 w-12 flex items-center justify-center">
              <FiClock className="text-yellow-600 text-xl" />
            </div>
          </div>
        </div>

        {/* Vencidos */}
        <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-red-500">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-500 mb-2">Vencidos</h3>
              <p className="text-3xl font-bold text-gray-800">${(stats.vencidos / 1000).toFixed(1)}K</p>
              <div className="flex items-center mt-2">
                <FiAlertCircle className="text-red-500 mr-1" />
                <span className="text-sm text-gray-500">{stats.pagosVencidos} pagos vencidos</span>
              </div>
            </div>
            <div className="bg-red-100 p-3 rounded-full h-12 w-12 flex items-center justify-center">
              <FiAlertCircle className="text-red-600 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Bar Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-gray-800">Flujo de Pagos Mensuales</h3>
            <FiBarChart2 className="text-gray-400" />
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-end justify-around p-4">
            {chartData.map((month, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="flex space-x-1 mb-2">
                  <div 
                    className="w-4 bg-blue-500 rounded-t-sm" 
                    style={{ height: `${month.pagos / 500}px` }}
                    title={`$${month.pagos} en pagos`}
                  ></div>
                  <div 
                    className="w-4 bg-green-500 rounded-t-sm" 
                    style={{ height: `${month.siniestros / 500}px` }}
                    title={`$${month.siniestros} en siniestros`}
                  ></div>
                </div>
                <span className="text-xs text-gray-500">{month.name}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Pagos recibidos</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Pagos por siniestros</span>
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-gray-800">Distribución de Pagos</h3>
            <FiPieChart className="text-gray-400" />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative w-48 h-48 mb-6 md:mb-0 md:mr-6">
              {/* Pie chart simulation */}
              <div className="absolute inset-0 rounded-full border-8 border-blue-500"></div>
              <div className="absolute inset-0 rounded-full border-8 border-green-500 clip-pie-70"></div>
              <div className="absolute inset-0 rounded-full border-8 border-yellow-500 clip-pie-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">100%</p>
                  <p className="text-sm text-gray-500">Total</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Seguros de Auto (45%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Seguros de Hogar (30%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Seguros de Vida (25%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-800">Actividad Reciente</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {[
            { id: 1, type: 'payment', client: 'Juan López', amount: '$8,750.00', date: 'Hoy, 10:45 AM', status: 'completed' },
            { id: 2, type: 'claim', client: 'María Pérez', amount: '$5,000.00', date: 'Ayer, 3:20 PM', status: 'pending' },
            { id: 3, type: 'payment', client: 'Carlos Gómez', amount: '$3,200.00', date: 'Ayer, 11:15 AM', status: 'completed' },
            { id: 4, type: 'claim', client: 'Ana Martínez', amount: '$12,750.00', date: '25/05/2025', status: 'completed' },
          ].map((activity) => (
            <div key={activity.id} className="p-4 hover:bg-gray-50 transition duration-150">
              <div className="flex items-center">
                <div className={`p-3 rounded-full mr-4 ${
                  activity.type === 'payment' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                }`}>
                  {activity.type === 'payment' ? <FiDollarSign /> : <FiAlertCircle />}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-800">{activity.client}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      activity.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {activity.status === 'completed' ? 'Completado' : 'Pendiente'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{activity.type === 'payment' ? 'Pago recibido' : 'Pago por siniestro'}: {activity.amount}</p>
                </div>
                <div className="ml-4 text-sm text-gray-500 whitespace-nowrap">{activity.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}