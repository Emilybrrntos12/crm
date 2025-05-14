import { FaExclamationTriangle, FaUserCircle, FaFileAlt, FaCheckCircle, FaClock, FaHome, FaCarCrash, FaCalendarAlt, FaMapMarkerAlt, FaComments } from 'react-icons/fa';
import Link from 'next/link';

export default function PolizaSiniestroPage() {
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
              <h1 className="text-2xl font-bold text-gray-800">Póliza #POL-2023-00567</h1>
              <p className="text-gray-600 mt-1">Auto Básico - Mapfre</p>
            </div>
            <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-800 flex items-center gap-2">
              <FaExclamationTriangle className="h-4 w-4" />
              <span className="font-semibold">Siniestro</span>
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Información principal */}
        <div className="lg:col-span-2">
          {/* Alerta de siniestro */}
          <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6 rounded-r-xl">
            <div className="flex items-center">
              <FaExclamationTriangle className="h-5 w-5 text-purple-400" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-purple-800">Siniestro en Proceso</h3>
                <p className="text-sm text-purple-700 mt-1">
                  Este caso está siendo atendido por nuestro equipo de ajustadores. Se le mantendrá informado del progreso.
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
                <h3 className="text-lg font-semibold text-gray-800">Roberto Sánchez</h3>
                <p className="text-gray-600">roberto@example.com</p>
                <p className="text-gray-600">+52 555 123 4567</p>
              </div>
            </div>
          </div>

          {/* Detalles del siniestro */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Detalles del Siniestro</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600">Número de Siniestro</p>
                <p className="text-base font-medium text-gray-800">SIN-2025-123</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Fecha del Incidente</p>
                <p className="text-base font-medium text-gray-800">13 Mayo 2025</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Tipo de Incidente</p>
                <p className="text-base font-medium text-purple-600">Colisión Vehicular</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Ajustador Asignado</p>
                <p className="text-base font-medium text-gray-800">Luis Ramírez</p>
              </div>
            </div>
          </div>

          {/* Información del incidente */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Información del Incidente</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <FaCarCrash className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Descripción</p>
                    <p className="text-xs text-gray-600">Colisión lateral en intersección</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <FaMapMarkerAlt className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Ubicación</p>
                    <p className="text-xs text-gray-600">Av. Insurgentes Sur 1234, CDMX</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <FaCalendarAlt className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Hora del Incidente</p>
                    <p className="text-xs text-gray-600">15:30 hrs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Panel lateral */}
        <div className="lg:col-span-1 space-y-6">
          {/* Estado del siniestro */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Estado del Siniestro</h2>
            <div className="space-y-6">
              <div className="relative">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                    <FaCheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-800">Reporte Recibido</h3>
                    <p className="text-xs text-gray-500">13 Mayo 2025 - 16:00</p>
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
                    <h3 className="text-sm font-medium text-gray-800">Ajustador Asignado</h3>
                    <p className="text-xs text-gray-500">13 Mayo 2025 - 17:30</p>
                  </div>
                </div>
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-200"></div>
              </div>

              <div className="relative">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100">
                    <FaClock className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-800">Evaluación de Daños</h3>
                    <p className="text-xs text-gray-500">En proceso</p>
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
                    <h3 className="text-sm font-medium text-gray-400">Resolución</h3>
                    <p className="text-xs text-gray-500">Pendiente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Próxima inspección */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Próxima Inspección</h2>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <FaCalendarAlt className="h-4 w-4 text-blue-600" />
                <h3 className="text-sm font-medium text-blue-800">15 Mayo 2025 - 10:00 AM</h3>
              </div>
              <p className="text-xs text-blue-600">
                El ajustador visitará el taller para evaluar los daños del vehículo.
              </p>
            </div>
          </div>

          {/* Acciones */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Acciones</h2>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200 flex items-center justify-center gap-2">
                <FaFileAlt className="h-4 w-4" />
                <span>Subir Documentos</span>
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200 flex items-center justify-center gap-2">
                <FaComments className="h-4 w-4" />
                <span>Contactar Ajustador</span>
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200">
                Ver Estado de Reparación
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
