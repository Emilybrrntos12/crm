'use client';

import React from 'react';
import Link from 'next/link';
import { FiHome } from 'react-icons/fi';
import { FaCheckCircle, FaClock, FaTimesCircle, FaPauseCircle, FaExclamationTriangle, FaHistory } from 'react-icons/fa';

export default function DetallesPolizaPage() {
  // Datos de ejemplo de la póliza
  const poliza = {
    numero: 'POL-2023-00158',
    estado: 'Activa',
    historialEstados: [
      {
        estado: 'Activa',
        fecha: '2023-01-01',
        motivo: 'Pago inicial realizado',
        descripcion: 'Póliza activada después de la verificación del pago inicial',
        usuario: 'Ana Gómez'
      },
      {
        estado: 'Pendiente',
        fecha: '2022-12-28',
        motivo: 'Documentación en revisión',
        descripcion: 'Esperando verificación de documentos del vehículo',
        usuario: 'Carlos Ruiz'
      }
    ]
  };

  // Función para obtener el color y el ícono según el estado
  const getEstadoStyles = (estado: string) => {
    switch (estado.toLowerCase()) {
      case 'activa':
        return {
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
          icon: FaCheckCircle
        };
      case 'pendiente':
        return {
          bgColor: 'bg-amber-100',
          textColor: 'text-amber-800',
          icon: FaClock
        };
      case 'vencida':
        return {
          bgColor: 'bg-red-100',
          textColor: 'text-red-800',
          icon: FaTimesCircle
        };
      case 'suspendida':
        return {
          bgColor: 'bg-orange-100',
          textColor: 'text-orange-800',
          icon: FaPauseCircle
        };
      case 'siniestro':
        return {
          bgColor: 'bg-purple-100',
          textColor: 'text-purple-800',
          icon: FaExclamationTriangle
        };
      default:
        return {
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          icon: FaHistory
        };
    }
  };

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
          <h1 className="text-3xl font-bold text-gray-800">Detalles de la Póliza</h1>
        </div>

        {/* Estado actual */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Estado Actual</h2>
              <p className="text-sm text-gray-600">Póliza número: {poliza.numero}</p>
            </div>
            <span className={`px-4 py-2 inline-flex items-center text-sm font-semibold rounded-lg ${
              getEstadoStyles(poliza.estado).bgColor
            } ${getEstadoStyles(poliza.estado).textColor}`}>
              {React.createElement(getEstadoStyles(poliza.estado).icon, { className: "mr-2" })}
              {poliza.estado}
            </span>
          </div>
        </div>

        {/* Historial de estados */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Historial de Estados</h2>
          </div>
          <div className="p-6">
            <div className="flow-root">
              <ul className="-mb-8">
                {poliza.historialEstados.map((evento, index) => {
                  const estadoStyles = getEstadoStyles(evento.estado);
                  const isLast = index === poliza.historialEstados.length - 1;

                  return (
                    <li key={index}>
                      <div className="relative pb-8">
                        {!isLast && (
                          <span
                            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                            aria-hidden="true"
                          />
                        )}
                        <div className="relative flex space-x-3">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full ${estadoStyles.bgColor} ${estadoStyles.textColor}`}>
                            {React.createElement(estadoStyles.icon, { className: "h-5 w-5" })}
                          </div>
                          <div className="flex min-w-0 flex-1 justify-between space-x-4">
                            <div>
                              <p className="text-sm font-medium text-gray-900">{evento.motivo}</p>
                              <p className="text-sm text-gray-500 mt-1">{evento.descripcion}</p>
                            </div>
                            <div className="whitespace-nowrap text-right text-sm">
                              <p className="font-medium text-gray-900">
                                {new Date(evento.fecha).toLocaleDateString()}
                              </p>
                              <p className="text-gray-500">{evento.usuario}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
