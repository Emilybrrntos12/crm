'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { FiPrinter } from 'react-icons/fi';

export default function ImprimirFacturaPage() {
  // Simulamos obtener la factura basada en el ID
  const factura = {
    numero: 'FAC-2025-0158',
    fecha: '2025-05-14',
    concepto: 'Prima mensual Mayo 2025',
    subtotal: 1875.00,
    iva: 225.00,
    total: 2100.00,
    estado: 'Pendiente',
    vencimiento: '2025-05-30',
    serie: 'A',
    regimenFiscal: 'Pequeño Contribuyente',
    cliente: {
      nombre: 'Juan López Ramírez',
      direccion: '8a. Calle 15-63, Zona 10, Ciudad de Guatemala',
      nit: '1234567-8',
      email: 'juan.lopez@email.com'
    },
    poliza: {
      numero: 'POL-2023-00158',
      producto: 'Auto Todo Riesgo',
      vehiculo: {
        marca: 'Toyota',
        modelo: 'Corolla',
        año: 2023,
        placa: 'P-123ABC'
      }
    }
  };

  if (!factura) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white p-4 text-sm">
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
        <div className="text-center mb-4">
          <h1 className="text-xl font-bold text-gray-800">FACTURA ELECTRÓNICA</h1>
          <p className="text-base text-gray-800">Seguros GT, S.A.</p>
          <p className="text-xs text-gray-600">NIT: 12345678-9</p>
          <p className="text-xs text-gray-600">Diagonal 6, 10-50 Zona 10</p>
          <p className="text-xs text-gray-600">Ciudad de Guatemala, Guatemala</p>
          <p className="text-xs text-gray-600">Tel: (502) 2222-3333</p>
          <p className="mt-1 text-xs text-gray-600">Serie: {factura.serie} No. {factura.numero}</p>
          <p className="text-xs text-gray-600">Régimen: {factura.regimenFiscal}</p>
        </div>

        {/* Información de factura */}
        <div className="border-t border-b border-gray-200 py-3 mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-base font-semibold mb-1 text-black">Factura No:</p>
              <p className="font-semibold text-gray-500">{factura.numero}</p>
            </div>
            <div>
              <p className="text-base font-semibold mb-1 text-black">Fecha:</p>
              <p className="font-semibold text-gray-500">{new Date(factura.fecha).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* Información del cliente */}
        <div className="mb-4">
          <h2 className="text-base font-semibold mb-2 text-black">Cliente</h2>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p><span className="text-gray-800">Nombre:</span> <span className="text-gray-500">{factura.cliente.nombre}</span></p>
            <p><span className="text-gray-800">Dirección:</span> <span className="text-gray-500">{factura.cliente.direccion}</span></p>
            <p><span className="text-gray-800">NIT:</span> <span className="text-gray-500">{factura.cliente.nit}</span></p>
            <p><span className="text-gray-800">Email:</span> <span className="text-gray-500">{factura.cliente.email}</span></p>
          </div>
        </div>

        {/* Información de la póliza */}
        <div className="mb-4">
          <h2 className="text-base font-semibold mb-2 text-black">Detalles de la Póliza</h2>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p><span className="text-gray-800">Número de Póliza:</span> <span className="text-gray-500">{factura.poliza.numero}</span></p>
            <p><span className="text-gray-800">Producto:</span> <span className="text-gray-500">{factura.poliza.producto}</span></p>
            <p><span className="text-gray-800">Vehículo:</span> <span className="text-gray-500">{factura.poliza.vehiculo.marca} {factura.poliza.vehiculo.modelo} {factura.poliza.vehiculo.año}</span></p>
            <p><span className="text-gray-800">Placa:</span> <span className="text-gray-500">{factura.poliza.vehiculo.placa}</span></p>
          </div>
        </div>

        {/* Detalles de facturación */}
        <div className="mb-4">
          <h2 className="text-base font-semibold mb-2 text-black">Detalles de Facturación</h2>
          <table className="w-full">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-1.5 text-gray-500">Concepto</td>
                <td className="py-1.5 text-right text-gray-500">{factura.concepto}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-1.5 text-gray-500">Subtotal</td>
                <td className="py-1.5 text-right text-gray-500">Q {factura.subtotal.toFixed(2)}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-1.5 text-gray-500">IVA (12%)</td>
                <td className="py-1.5 text-right text-gray-500">Q {factura.iva.toFixed(2)}</td>
              </tr>
              <tr className="font-bold">
                <td className="py-1.5 text-black">Total</td>
                <td className="py-1.5 text-right text-black">Q {factura.total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pie de página */}
        <div className="text-center text-xs text-gray-500 mt-4">
          <p>Este documento es una representación impresa de una Factura Electrónica (FEL)</p>
          <p>Autorizada según resolución de la SAT No. 2023-5-432109-8</p>
          <p className="mt-1">Fecha de vencimiento: {new Date(factura.vencimiento).toLocaleDateString()}</p>
          <p className="mt-2">Sujeto a pagos trimestrales de IVA</p>
        </div>
      </div>
    </div>
  );
}
