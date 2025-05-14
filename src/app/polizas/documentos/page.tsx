'use client';

import React from 'react';
import Link from 'next/link';
import { FiHome } from 'react-icons/fi';
import { FaFileAlt, FaDownload, FaEye, FaTrash } from 'react-icons/fa';

export default function DocumentosPage() {
  // Datos de ejemplo de documentos
  const documentos = [
    {
      id: 1,
      nombre: 'Póliza Original',
      tipo: 'PDF',
      fecha: '2025-05-14',
      tamaño: '2.5 MB',
      estado: 'Vigente'
    },
    {
      id: 2,
      nombre: 'Condiciones Generales',
      tipo: 'PDF',
      fecha: '2025-05-14',
      tamaño: '1.8 MB',
      estado: 'Vigente'
    },
    {
      id: 3,
      nombre: 'Identificación del Asegurado',
      tipo: 'JPG',
      fecha: '2025-05-14',
      tamaño: '524 KB',
      estado: 'Verificado'
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
          <h1 className="text-3xl font-bold text-gray-800">Documentos de la Póliza</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <FaFileAlt className="h-5 w-5" />
            <span>Subir Documento</span>
          </button>
        </div>

        {/* Lista de documentos */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Documentos Disponibles</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tamaño</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {documentos.map((documento) => (
                  <tr key={documento.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FaFileAlt className="h-5 w-5 text-gray-400 mr-3" />
                        <div className="text-sm font-medium text-gray-900">{documento.nombre}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{documento.tipo}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(documento.fecha).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{documento.tamaño}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 inline-flex text-xs font-semibold rounded-full ${
                        documento.estado === 'Vigente' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {documento.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end items-center gap-2">
                        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
                                onClick={() => alert(`Ver documento: ${documento.nombre}`)}>
                          <FaEye className="h-4 w-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
                                onClick={() => alert(`Descargar documento: ${documento.nombre}`)}>
                          <FaDownload className="h-4 w-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-red-50 text-red-600"
                                onClick={() => alert(`Eliminar documento: ${documento.nombre}`)}>
                          <FaTrash className="h-4 w-4" />
                        </button>
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