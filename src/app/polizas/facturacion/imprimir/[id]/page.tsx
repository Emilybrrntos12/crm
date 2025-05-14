'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { FiPrinter } from 'react-icons/fi';

export default function ImprimirFacturaPage({ }: { params: { id: string } }) {
  // Simulamos obtener la factura basada en el ID
  const factura = {
    numero: 'FAC-2025-0158',
    fecha: '2025-05-14',
    concepto: 'Prima mensual Mayo 2025',
    subtotal: 850.00,
    iva: 136.00,
    total: 986.00,
    estado: 'Pendiente',
    vencimiento: '2025-05-30',
    cliente: {
      nombre: 'Juan López',
      direccion: 'Calle Principal #123',
      rfc: 'LOPJ850512ABC',
      email: 'juan.lopez@email.com'
    },
    poliza: {
      numero: 'POL-2023-00158',
      producto: 'Auto Todo Riesgo',
      vehiculo: {
        marca: 'Toyota',
        modelo: 'Corolla',
        año: 2023,
        placa: 'ABC-123'
      }
    }
  };

  if (!factura) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Botón de imprimir */}
      <div className="fixed top-4 right-4 print:hidden">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FiPrinter className="h-5 w-5" />
          <span>Imprimir</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">FACTURA</h1>
          <p className="text-gray-600">Seguros XYZ, S.A. de C.V.</p>
          <p className="text-sm text-gray-500">RFC: SXY980825ABC</p>
          <p className="text-sm text-gray-500">Av. Aseguradora 789, Col. Centro</p>
          <p className="text-sm text-gray-500">Ciudad de México, CP 06000</p>
        </div>

        {/* Información de factura */}
        <div className="border-t border-b border-gray-200 py-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-semibold mb-2 text-black">Factura No:</p>
              <p className="font-semibold text-gray-500">{factura.numero}</p>
            </div>
            <div>
              <p className="text-lg font-semibold mb-2 text-black">Fecha:</p>
              <p className="font-semibold text-gray-500">{new Date(factura.fecha).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* Información del cliente */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-black">Cliente</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p><span className="text-gray-800">Nombre:</span> <span className="text-gray-500">{factura.cliente.nombre}</span></p>
            <p><span className="text-gray-800">Dirección:</span> <span className="text-gray-500">{factura.cliente.direccion}</span></p>
            <p><span className="text-gray-800">RFC:</span> <span className="text-gray-500">{factura.cliente.rfc}</span></p>
            <p><span className="text-gray-800">Email:</span> <span className="text-gray-500">{factura.cliente.email}</span></p>
          </div>
        </div>

        {/* Información de la póliza */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-black">Detalles de la Póliza</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p><span className="text-gray-800">Número de Póliza:</span> <span className= "text-gray-500">{factura.poliza.numero} </span></p>
            <p><span className="text-gray-800">Producto:</span> <span className= "text-gray-500">{factura.poliza.producto}</span></p>
            <p><span className="text-gray-800">Vehículo:</span> <span className= "text-gray-500">{factura.poliza.vehiculo.marca} {factura.poliza.vehiculo.modelo} {factura.poliza.vehiculo.año}</span></p>
            <p><span className="text-gray-800">Placa:</span> <span className= "text-gray-500">{factura.poliza.vehiculo.placa}</span></p>
          </div>
        </div>

        {/* Detalles de facturación */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-black">Detalles de Facturación</h2>
          <table className="w-full">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2 text-gray-500">Concepto</td>
                <td className="py-2 text-right text-gray-500">{factura.concepto}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 text-gray-500">Subtotal</td>
                <td className="py-2 text-right text-gray-500">${factura.subtotal.toFixed(2)}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2 text-gray-500">IVA (16%)</td>
                <td className="py-2 text-right text-gray-500">${factura.iva.toFixed(2)}</td>
              </tr>
              <tr className="font-bold">
                <td className="py-2 text-black">Total</td>
                <td className="py-2 text-right text-black">${factura.total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pie de página */}
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>Este documento es una representación impresa de un CFDI</p>
          <p className="mt-2">Fecha de vencimiento: {new Date(factura.vencimiento).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
