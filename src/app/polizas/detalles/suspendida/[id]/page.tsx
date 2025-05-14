import { FaExclamationTriangle, FaUserCircle, FaCheckCircle, FaClock, FaHome } from 'react-icons/fa';
import Link from 'next/link';

export default function PolizaSuspendidaPage() {
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
              <h1 className="text-2xl font-bold text-gray-800">Póliza #POL-2023-00235</h1>
              <p className="text-gray-600 mt-1">Vida Individual - Mapfre</p>
            </div>
            <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-800 flex items-center gap-2">
              <FaExclamationTriangle className="h-4 w-4" />
              <span className="font-semibold">Suspendida</span>
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Información principal */}
        <div className="lg:col-span-2">
          {/* Alerta de suspensión */}
          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6 rounded-r-xl">
            <div className="flex items-center">
              <FaExclamationTriangle className="h-5 w-5 text-orange-400" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-orange-800">Póliza Suspendida</h3>
                <p className="text-sm text-orange-700 mt-1">
                  Esta póliza ha sido suspendida por falta de pago. Para reactivarla, es necesario realizar el pago pendiente.
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
                <h3 className="text-lg font-semibold text-gray-800">José García</h3>
                <p className="text-gray-600">jose@example.com</p>
                <p className="text-gray-600">+52 555 987 6543</p>
              </div>
            </div>
          </div>

          {/* Detalles de la suspensión */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Detalles de la Suspensión</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600">Fecha de Suspensión</p>
                <p className="text-base font-medium text-gray-800">15 Mayo 2025</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Motivo</p>
                <p className="text-base font-medium text-gray-800">Falta de Pago</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Monto Adeudado</p>
                <p className="text-base font-medium text-red-600">$1,200.00</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Días de Gracia Restantes</p>
                <p className="text-base font-medium text-orange-600">15 días</p>
              </div>
            </div>
          </div>

          {/* Pagos pendientes */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Pagos Pendientes</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-800">Prima Anual 2025</p>
                  <p className="text-xs text-gray-500">Vencimiento: 1 Mayo 2025</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-red-600">$1,200.00</p>
                  <p className="text-xs text-gray-500">Pendiente</p>
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
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100">
                    <FaExclamationTriangle className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-800">Suspensión</h3>
                    <p className="text-xs text-gray-500">15 Mayo 2025</p>
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
                    <h3 className="text-sm font-medium text-gray-800">Aviso de Suspensión</h3>
                    <p className="text-xs text-gray-500">1 Mayo 2025</p>
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
                    <p className="text-xs text-gray-500">1 Enero 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Acciones */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Acciones</h2>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                Realizar Pago
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200">
                Solicitar Plan de Pagos
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
