import React from 'react';
import Link from 'next/link';
import { FiHome } from 'react-icons/fi';
import { FaMoneyBillWave, FaFileInvoice, FaCreditCard, FaHistory, FaExclamationCircle } from 'react-icons/fa';

export default function EstadoFinancieroPage() {
  // Datos de ejemplo
  const estadoFinanciero = {
    poliza: 'POL-2023-00158',
    cliente: 'Juan López',
    primaTotal: 10200.00,
    primaMensual: 850.00,
    fechaUltimoPago: '2025-04-15',
    proximoPago: '2025-05-15',
    estadoPago: 'Al día',
    historialPagos: [
      { fecha: '2025-04-15', monto: 850.00, estado: 'Pagado', referencia: 'REF-2025-0415' },
      { fecha: '2025-03-15', monto: 850.00, estado: 'Pagado', referencia: 'REF-2025-0315' },
      { fecha: '2025-02-15', monto: 850.00, estado: 'Pagado', referencia: 'REF-2025-0215' },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">      {/* Botones de navegación */}
      <div className="flex justify-start gap-2 mb-4">
        <Link href="/polizas">
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition duration-200">
            <FiHome className="text-gray-600 h-5 w-5" />
          </button>
        </Link>
            <Link href="/polizas/facturacion">
            <button className="flex items-center gap-2 p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition duration-200">
                <FaFileInvoice className="text-gray-600 h-5 w-5" />
                <span className="text-gray-600">Facturación</span>
            </button>
            </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Estado Financiero de Póliza</h1>
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Resumen de la póliza */}
            <div className="col-span-full">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{estadoFinanciero.poliza}</h2>
                  <p className="text-gray-600">{estadoFinanciero.cliente}</p>
                </div>
                <span className={`px-4 py-2 rounded-full ${
                  estadoFinanciero.estadoPago === 'Al día' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {estadoFinanciero.estadoPago}
                </span>
              </div>
            </div>

            {/* Tarjetas de información */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <FaMoneyBillWave className="text-blue-600 text-xl" />
                <h3 className="text-gray-700 font-medium">Prima Total</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">${estadoFinanciero.primaTotal.toFixed(2)}</p>
              <p className="text-sm text-gray-600">Anual</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <FaCreditCard className="text-green-600 text-xl" />
                <h3 className="text-gray-700 font-medium">Prima Mensual</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">${estadoFinanciero.primaMensual.toFixed(2)}</p>
              <p className="text-sm text-gray-600">Mensual</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <FaHistory className="text-purple-600 text-xl" />
                <h3 className="text-gray-700 font-medium">Último Pago</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">{new Date(estadoFinanciero.fechaUltimoPago).toLocaleDateString()}</p>
              <p className="text-sm text-gray-600">Recibido</p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <FaExclamationCircle className="text-amber-600 text-xl" />
                <h3 className="text-gray-700 font-medium">Próximo Pago</h3>
              </div>
              <p className="text-2xl font-bold text-gray-800">{new Date(estadoFinanciero.proximoPago).toLocaleDateString()}</p>
              <p className="text-sm text-gray-600">Pendiente</p>
            </div>
          </div>
        </div>

        {/* Historial de pagos */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Historial de Pagos</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Referencia</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {estadoFinanciero.historialPagos.map((pago, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(pago.fecha).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {pago.referencia}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${pago.monto.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2.5 py-1 inline-flex items-center text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        {pago.estado}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
