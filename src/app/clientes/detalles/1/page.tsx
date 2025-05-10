import Link from "next/link";
import { FiHome, FiUser, FiMail, FiPhone, FiMapPin, FiCreditCard, FiCalendar } from 'react-icons/fi';
import { FaHeartbeat, FaShieldAlt, FaUserShield, FaPiggyBank, FaClinicMedical, FaIdCard } from 'react-icons/fa';

export default function ClientProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Botón de regreso */}
      <div className="flex justify-start mb-4">
        <Link href="/">
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition duration-200">
            <FiHome className="text-gray-600 h-5 w-5" />
          </button>
        </Link>
      </div>

      {/* Contenedor principal */}
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Información del Cliente
          </h1>
          <p className="text-lg text-gray-600">
            Detalles personales y póliza asignada
          </p>
        </div>

        {/* Grid de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna izquierda - Información del cliente */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Foto del cliente */}
              <div className="bg-gray-100 p-8 flex justify-center">
                <div className="w-40 h-40 rounded-full bg-blue-100 border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                  <FiUser className="text-blue-500 text-6xl" />
                </div>
              </div>

              {/* Datos personales */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaIdCard className="text-blue-500 mr-2" />
                  Datos Personales
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <FiUser className="text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700 font-medium">Nombre completo</p>
                      <p className="text-gray-600">Juan Carlos Pérez Martínez</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FiMail className="text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700 font-medium">Correo electrónico</p>
                      <p className="text-gray-600">juan.perez@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FiPhone className="text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700 font-medium">Teléfono</p>
                      <p className="text-gray-600">+502 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FiMapPin className="text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700 font-medium">Dirección</p>
                      <p className="text-gray-600">12 Calle 3-45, Zona 10, Ciudad de Guatemala</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FiCreditCard className="text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700 font-medium">DPI</p>
                      <p className="text-gray-600">1234 56789 0101</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FiCalendar className="text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700 font-medium">Fecha de nacimiento</p>
                      <p className="text-gray-600">15 de marzo de 1985</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FiUser className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700 font-medium">Estado civil</p>
                      <p className="text-gray-600">Casado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Información del seguro */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="bg-blue-600 p-6 text-white">
                <h2 className="text-2xl font-bold flex items-center">
                  <FaHeartbeat className="mr-3" />
                  Póliza de Seguro Asignada
                </h2>
                <p className="opacity-90">Seguro de Vida Premium - Acme Corp</p>
              </div>

              <div className="p-6">
                {/* Detalles de la póliza */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Número de póliza</h3>
                    <p className="text-xl font-mono text-gray-600">ACME-2023-789456</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Estado</h3>
                    <p className="text-xl font-semibold text-green-600">Activa</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Fecha de inicio</h3>
                    <p className="text-xl text-gray-600">15/01/2023</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Fecha de vencimiento</h3>
                    <p className="text-xl text-gray-600">15/01/2028</p>
                  </div>
                </div>

                {/* Coberturas */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaShieldAlt className="text-blue-500 mr-2" />
                  Coberturas Principales
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <FaUserShield className="text-blue-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                    <div>
                      <strong className="block text-gray-800">Fallecimiento por cualquier causa</strong>
                      <p className="text-gray-600">100% del capital asegurado (Q500,000)</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <FaUserShield className="text-blue-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                    <div>
                      <strong className="block text-gray-800">Invalidez Total y Permanente</strong>
                      <p className="text-gray-600">70% del capital asegurado (Q350,000)</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <FaClinicMedical className="text-blue-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                    <div>
                      <strong className="block text-gray-800">Gastos Médicos Mayores</strong>
                      <p className="text-gray-600">Hasta 20% del capital (Q100,000)</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <FaHeartbeat className="text-blue-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                    <div>
                      <strong className="block text-gray-800">Enfermedades Graves</strong>
                      <p className="text-gray-600">30% del capital (Q150,000) para 15 padecimientos</p>
                    </div>
                  </div>
                </div>

                {/* Detalles de pago */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaPiggyBank className="text-blue-500 mr-2" />
                  Información de Pagos
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium">Prima mensual</p>
                    <p className="text-2xl font-bold text-black">Q450.00</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium">Forma de pago</p>
                    <p className="text-xl font-medium text-black">Débito automático</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium">Próximo pago</p>
                    <p className="text-xl font-medium text-black">15/06/2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Beneficiarios */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-600 p-6 text-white">
                <h2 className="text-2xl font-bold ">Beneficiarios</h2>
              </div>

              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Nombre</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Parentesco</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Porcentaje</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">DPI</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-600">María Elena Pérez</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">Esposa</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">60%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">2345 67890 0202</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-600">Carlos Alfredo Pérez</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">Hijo</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">20%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">-</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-600">Ana Lucía Pérez</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">Hija</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">20%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}