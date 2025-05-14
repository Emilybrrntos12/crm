import React from 'react';
import Link from 'next/link';
import { FiHome } from 'react-icons/fi';
import { FaCreditCard, FaMoneyCheckAlt, FaPrint, FaDownload } from 'react-icons/fa';

export default function FacturacionPage() {
  // Datos de ejemplo de facturación
  const facturas = [
    {
      numero: 'FAC-2025-0158',
      fecha: '2025-05-14',
      concepto: 'Prima mensual Mayo 2025',
      subtotal: 850.00,
      iva: 136.00,
      total: 986.00,
      estado: 'Pendiente',
      vencimiento: '2025-05-30'
    },
    {
      numero: 'FAC-2025-0145',
      fecha: '2025-04-15',
      concepto: 'Prima mensual Abril 2025',
      subtotal: 850.00,
      iva: 136.00,
      total: 986.00,
      estado: 'Pagada',
      vencimiento: '2025-04-30'
    },
    {
      numero: 'FAC-2025-0132',
      fecha: '2025-03-15',
      concepto: 'Prima mensual Marzo 2025',
      subtotal: 850.00,
      iva: 136.00,
      total: 986.00,
      estado: 'Pagada',
      vencimiento: '2025-03-30'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Botón de Home */}
      <div className="flex justify-start mb-4">
        <Link href="/polizas">
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition duration-200">
            <FiHome className="text-gray-600 h-5 w-5" />
          </button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Facturación de Póliza</h1>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <FaCreditCard className="h-5 w-5" />
              <span>Realizar Pago</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <FaDownload className="h-5 w-5" />
              <span>Descargar Todo</span>
            </button>
          </div>
        </div>

        {/* Datos de la póliza */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h2 className="text-sm font-medium text-gray-600 mb-1">Número de Póliza</h2>
              <p className="text-lg font-semibold text-gray-900">POL-2023-00158</p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-600 mb-1">Cliente</h2>
              <p className="text-lg font-semibold text-gray-900">Juan López</p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-600 mb-1">Producto</h2>
              <p className="text-lg font-semibold text-gray-900">Auto Todo Riesgo</p>
            </div>
          </div>
        </div>

        {/* Lista de facturas */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Facturas</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Número</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Concepto</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vencimiento</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {facturas.map((factura, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-blue-600">{factura.numero}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(factura.fecha).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{factura.concepto}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(factura.vencimiento).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ${factura.total.toFixed(2)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 inline-flex items-center text-xs font-semibold rounded-full ${
                        factura.estado === 'Pagada' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {factura.estado}
                      </span>
                    </td>                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end items-center gap-2">
                        <Link href={`/polizas/facturacion/imprimir/${factura.numero}`}>
                          <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
                            <FaPrint className="h-4 w-4" />
                          </button>
                        </Link>
                        <Link href={`/polizas/facturacion/descargar/${factura.numero}`}>
                          <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
                            <FaDownload className="h-4 w-4" />
                          </button>
                        </Link>
                        {factura.estado === 'Pendiente' && (
                          <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600">
                            <FaMoneyCheckAlt className="h-4 w-4" />
                          </button>
                        )}
                      </div>
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
