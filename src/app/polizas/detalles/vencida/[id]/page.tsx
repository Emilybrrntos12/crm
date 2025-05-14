import { FaTimesCircle, FaUserCircle, FaCheckCircle, FaClock, FaHome, FaRedo } from 'react-icons/fa';
import Link from 'next/link';

export default function PolizaVencidaPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header con navegación */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/polizas">
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition duration-200">
            <FaHome className="text-gray-600 h-5 w-5" />
          </button>
        </Link>
      </div>

      {/* Encabezado de la póliza */}
      <div className="bg-white rounded-xl shadow-sm mb-6">
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Póliza #POL-2023-00236</h1>
              <p className="text-gray-600 mt-1">Vida Individual - Mapfre</p>
            </div>
            <span className="px-4 py-2 rounded-full bg-red-100 text-red-800 flex items-center gap-2">
              <FaTimesCircle className="h-4 w-4" />
              <span className="font-semibold">Vencida</span>
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Información principal */}
        <div className="lg:col-span-2">
          {/* Alerta de vencimiento */}
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-xl">
            <div className="flex items-center">
              <FaTimesCircle className="h-5 w-5 text-red-400" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Póliza Vencida</h3>
                <p className="text-sm text-red-700 mt-1">
                  Esta póliza ha vencido y ya no proporciona cobertura. Para restaurar la protección, es necesario renovar la póliza.
                </p>
              </div>
            </div>
          </div>

          {/* Información del cliente */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Información del Cliente</h2>
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0 h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                <FaUserCircle className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Ana López</h3>
                <p className="text-gray-600">ana@example.com</p>
                <p className="text-gray-600">+52 555 456 7890</p>
              </div>
            </div>
          </div>

          {/* Detalles del vencimiento */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Detalles del Vencimiento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600">Fecha de Vencimiento</p>
                <p className="text-base font-medium text-gray-800">1 Mayo 2025</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Último Día de Cobertura</p>
                <p className="text-base font-medium text-gray-800">30 Abril 2025</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Prima Anterior</p>
                <p className="text-base font-medium text-gray-800">$1,200.00 anual</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Días sin Cobertura</p>
                <p className="text-base font-medium text-red-600">15 días</p>
              </div>
            </div>
          </div>

          {/* Resumen de cobertura anterior */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Resumen de Cobertura Anterior</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-600">Suma Asegurada</p>
                  <p className="text-base font-medium text-gray-800">$500,000.00</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tipo de Cobertura</p>
                  <p className="text-base font-medium text-gray-800">Básica</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Beneficiarios</p>
                  <p className="text-base font-medium text-gray-800">2 registrados</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Vigencia</p>
                  <p className="text-base font-medium text-gray-800">1 año</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel lateral */}
        <div className="lg:col-span-1 space-y-6">
          {/* Historial de estado */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Historial de Estado</h2>
            <div className="space-y-6">
              <div className="relative">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
                    <FaTimesCircle className="w-4 h-4 text-red-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-800">Vencida</h3>
                    <p className="text-xs text-gray-500">1 Mayo 2025</p>
                  </div>
                </div>
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200"></div>
              </div>

              <div className="relative">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100">
                    <FaClock className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-800">Aviso de Vencimiento</h3>
                    <p className="text-xs text-gray-500">1 Abril 2025</p>
                  </div>
                </div>
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200"></div>
              </div>

              <div className="relative">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                    <FaCheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-800">Activa</h3>
                    <p className="text-xs text-gray-500">1 Mayo 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Opciones de renovación */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Opciones de Renovación</h2>
            <div className="space-y-4">
              <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                <h3 className="text-sm font-medium text-blue-800">Plan Recomendado</h3>
                <p className="text-xs text-blue-600 mt-1">Basado en tu historial</p>
                <div className="mt-3">
                  <p className="text-sm text-blue-800">
                    <span className="font-medium">$1,300.00</span> / año
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-blue-700">
                    <li>• Suma asegurada: $550,000.00</li>
                    <li>• Cobertura mejorada</li>
                    <li>• Sin período de espera</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Acciones */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Acciones</h2>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-2">
                <FaRedo className="h-4 w-4" />
                <span>Renovar Póliza</span>
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200">
                Ver Otras Opciones
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200">
                Contactar Agente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
