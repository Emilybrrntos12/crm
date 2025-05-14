'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FiDownload, FiHome } from 'react-icons/fi';
import { FaFilePdf, FaFileExcel, FaFileWord } from 'react-icons/fa';

export default function DescargarFacturaPage({ }: { params: { id: string } }) {
  // Simulamos obtener la factura basada en el ID
  const factura = {
    numero: 'FAC-2025-0158',
    fecha: '2025-05-14',
    concepto: 'Prima mensual Mayo 2025',
    subtotal: 850.00,
    iva: 136.00,
    total: 986.00,
    estado: 'Pendiente',
    vencimiento: '2025-05-30'
  };

  if (!factura) {
    notFound();
  }

  const documentos = [
    {
      nombre: 'Factura PDF',
      descripcion: 'Versión PDF de la factura para imprimir o archivar',
      icono: FaFilePdf,
      color: 'text-red-500',
      tipo: 'PDF',
      tamaño: '245 KB'
    },
    {
      nombre: 'Factura Excel',
      descripcion: 'Versión Excel para análisis y registro contable',
      icono: FaFileExcel,
      color: 'text-green-500',
      tipo: 'XLSX',
      tamaño: '127 KB'
    },
    {
      nombre: 'Carta Factura',
      descripcion: 'Documento Word con carta de presentación',
      icono: FaFileWord,
      color: 'text-blue-500',
      tipo: 'DOCX',
      tamaño: '182 KB'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Botón de Home */}
      <div className="flex justify-start mb-4">
        <Link href="/polizas/facturacion">
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition duration-200">
            <FiHome className="text-gray-600 h-5 w-5" />
          </button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Descargar Factura</h1>
        </div>

        {/* Información de la factura */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h2 className="text-sm font-medium text-gray-600 mb-1">Número</h2>
              <p className="text-lg font-semibold text-gray-900">{factura.numero}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-600 mb-1">Fecha</h2>
              <p className="text-lg font-semibold text-gray-900">
                {new Date(factura.fecha).toLocaleDateString()}
              </p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-600 mb-1">Total</h2>
              <p className="text-lg font-semibold text-gray-900">${factura.total.toFixed(2)}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-600 mb-1">Estado</h2>
              <span className={`px-2.5 py-1 inline-flex text-sm font-semibold rounded-full ${
                factura.estado === 'Pagada' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-amber-100 text-amber-800'
              }`}>
                {factura.estado}
              </span>
            </div>
          </div>
        </div>

        {/* Lista de documentos descargables */}
        <div className="space-y-4">
          {documentos.map((doc, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 ${doc.color}`}>
                  <doc.icono className="h-8 w-8" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">{doc.nombre}</h3>
                  <p className="text-sm text-gray-500">{doc.descripcion}</p>
                  <div className="mt-2 flex items-center space-x-4">
                    <span className="text-xs text-gray-500">Formato: {doc.tipo}</span>
                    <span className="text-xs text-gray-500">Tamaño: {doc.tamaño}</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button 
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    onClick={() => {
                      // Aquí iría la lógica de descarga
                      alert(`Descargando ${doc.nombre}`);
                    }}
                  >
                    <FiDownload className="h-4 w-4" />
                    <span>Descargar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
