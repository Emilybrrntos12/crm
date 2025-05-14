import { FaCheckCircle, FaClock, FaTimesCircle, FaUserCircle, FaFileAlt, FaHome } from 'react-icons/fa';
import Link from 'next/link';

export default function PolizaPendientePage() {
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
              <h1 className="text-2xl font-bold text-gray-800">Póliza #POL-2023-00234</h1>
              <p className="text-gray-600 mt-1">Vida Individual - Mapfre</p>
            </div>
            <span className="px-4 py-2 rounded-full bg-amber-100 text-amber-800 flex items-center gap-2">
              <FaClock className="h-4 w-4" />
              <span className="font-semibold">Pendiente</span>
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Información principal */}
        <div className="lg:col-span-2">
          {/* Alerta de estado pendiente */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6 rounded-r-xl">
            <div className="flex items-center">
              <FaClock className="h-5 w-5 text-amber-400" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-amber-800">Póliza en Proceso</h3>
                <p className="text-sm text-amber-700 mt-1">
                  Esta póliza está pendiente de aprobación. Por favor, complete la documentación requerida para continuar con el proceso.
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
                <h3 className="text-lg font-semibold text-gray-800">María Pérez</h3>
                <p className="text-gray-600">maria@example.com</p>
                <p className="text-gray-600">+52 555 123 4567</p>
              </div>
            </div>
          </div>

          {/* Detalles de la solicitud */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Detalles de la Solicitud</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600">Fecha de Solicitud</p>
                <p className="text-base font-medium text-gray-800">10 Mayo 2025</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Tipo de Seguro</p>
                <p className="text-base font-medium text-gray-800">Vida Individual</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Prima Anual</p>
                <p className="text-base font-medium text-amber-600">$1,200.00</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Aseguradora</p>
                <p className="text-base font-medium text-gray-800">Mapfre</p>
              </div>
            </div>
          </div>

          {/* Requisitos pendientes */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Requisitos Pendientes</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <FaCheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-800">Identificación Oficial</p>
                    <p className="text-xs text-green-600">Aprobado - 10 Mayo 2025</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <FaTimesCircle className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-red-800">Comprobante de Domicilio</p>
                    <p className="text-xs text-red-600">Pendiente de envío</p>
                  </div>
                </div>
                <button className="px-3 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full hover:bg-red-200">
                  Subir documento
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <FaClock className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Cuestionario Médico</p>
                    <p className="text-xs text-amber-600">En revisión por la aseguradora</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel lateral */}
        <div className="lg:col-span-1 space-y-6">
          {/* Estado del proceso */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Estado del Proceso</h2>
            <div className="space-y-6">
              <div className="relative">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                    <FaCheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-800">Registro de Solicitud</h3>
                    <p className="text-xs text-gray-500">10 Mayo 2025 - 10:30 AM</p>
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
                    <h3 className="text-sm font-medium text-gray-800">Validación de Documentos</h3>
                    <p className="text-xs text-gray-500">En proceso</p>
                  </div>
                </div>
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200"></div>
              </div>

              <div className="relative">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                    <FaClock className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-400">Evaluación Médica</h3>
                    <p className="text-xs text-gray-500">Pendiente</p>
                  </div>
                </div>
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200"></div>
              </div>

              <div className="relative">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                    <FaCheckCircle className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-400">Aprobación Final</h3>
                    <p className="text-xs text-gray-500">Pendiente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Próximos pasos */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Próximos Pasos</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="text-sm font-medium text-blue-800">Completar Documentación</h3>
                <p className="text-xs text-blue-600 mt-1">
                  Envíe los documentos pendientes para continuar con el proceso.
                </p>
              </div>
            </div>
          </div>

          {/* Acciones */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Acciones</h2>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-2">
                <FaFileAlt className="h-4 w-4" />
                <span>Subir Documentos</span>
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200">
                Contactar Agente
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200">
                Ver Instrucciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
