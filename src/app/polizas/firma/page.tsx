import React from 'react';
import Link from 'next/link';
import { FiHome } from 'react-icons/fi';
import { FaFileSignature, FaDownload, FaPrint, FaCheck, FaClock, FaTimesCircle, FaUpload } from 'react-icons/fa';

export default function FirmaPolizaPage() {
  // Datos de ejemplo
  const documentos = [
    {
      id: 'DOC-2025-001',
      nombre: 'Contrato de Póliza',
      tipo: 'Contrato Principal',
      fechaCreacion: '2025-05-14',
      estado: 'Pendiente de Firma',
      prioridad: 'Alta',
      vencimiento: '2025-05-21'
    },
    {
      id: 'DOC-2025-002',
      nombre: 'Condiciones Particulares',
      tipo: 'Anexo',
      fechaCreacion: '2025-05-14',
      estado: 'Firmado',
      prioridad: 'Media',
      vencimiento: '2025-05-28'
    },
    {
      id: 'DOC-2025-003',
      nombre: 'Declaración de Beneficiarios',
      tipo: 'Formulario',
      fechaCreacion: '2025-05-14',
      estado: 'Rechazado',
      prioridad: 'Alta',
      vencimiento: '2025-05-21'
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
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Firma de Documentos</h1>
            <p className="text-gray-600 mt-1">Gestión y firma de documentos de la póliza</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <FaUpload className="h-5 w-5" />
              <span>Subir Documento</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <FaDownload className="h-5 w-5" />
              <span>Descargar Todo</span>
            </button>
          </div>
        </div>

        {/* Tarjetas de estado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pendientes de Firma</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">3</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <FaFileSignature className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Firmados</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">8</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <FaCheck className="text-green-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Expirados</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">1</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <FaTimesCircle className="text-red-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabla de documentos */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Documentos para Firma</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documento</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha Creación</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vencimiento</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {documentos.map((doc, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-blue-600">{doc.id}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{doc.nombre}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{doc.tipo}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(doc.fechaCreacion).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(doc.vencimiento).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 inline-flex items-center text-xs font-semibold rounded-full ${
                        doc.estado === 'Firmado' 
                          ? 'bg-green-100 text-green-800'
                          : doc.estado === 'Pendiente de Firma'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {doc.estado === 'Firmado' && <FaCheck className="mr-1.5 h-3 w-3" />}
                        {doc.estado === 'Pendiente de Firma' && <FaClock className="mr-1.5 h-3 w-3" />}
                        {doc.estado === 'Rechazado' && <FaTimesCircle className="mr-1.5 h-3 w-3" />}
                        {doc.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end items-center gap-2">
                        {doc.estado === 'Pendiente de Firma' && (
                          <button className="p-2 rounded-lg hover:bg-blue-50 text-blue-600">
                            <FaFileSignature className="h-4 w-4" />
                          </button>
                        )}
                        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
                          <FaPrint className="h-4 w-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
                          <FaDownload className="h-4 w-4" />
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
