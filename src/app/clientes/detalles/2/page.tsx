import Link from 'next/link';
import { FiHome, FiUser, FiMail, FiPhone, FiCreditCard, FiEdit, FiCalendar, FiMapPin } from 'react-icons/fi';
import { FaCar, FaCarCrash, FaTools, FaShieldAlt, FaUserShield, FaFileContract, FaMoneyBillWave } from 'react-icons/fa';

export default function ClientAutoInsuranceProfile() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Botón de regreso */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/">
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition duration-200">
            <FiHome className="text-gray-600 h-5 w-5" />
          </button>
        </Link>
        <button className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition duration-200 flex items-center">
          <FiEdit className="mr-2" /> Editar
        </button>
      </div>

      {/* Contenedor principal */}
      <div className="container mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Perfil del Cliente
          </h1>
          <p className="text-lg text-gray-600">
            Información personal y detalles de la póliza de auto
          </p>
        </div>

        {/* Grid de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna izquierda - Información del cliente */}
          <div className="lg:col-span-1 space-y-6">
            {/* Tarjeta de foto y datos básicos */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-400 p-6 text-center">
                <div className="w-32 h-32 rounded-full bg-white border-4 border-white shadow-md mx-auto flex items-center justify-center overflow-hidden">
                  <FiUser className="text-emerald-500 text-5xl" />
                </div>
                <h2 className="text-xl font-bold text-white mt-4">María José García López</h2>
                <p className="text-emerald-100">Cliente desde: Ene 2022</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FiCreditCard className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700">Número de cliente</p>
                      <p className="font-medium text-gray-600">AUT-789456</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FiMail className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700">Correo electrónico</p>
                      <p className="font-medium text-gray-500">maria.garcia@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FiPhone className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700">Teléfonos</p>
                      <p className="font-medium text-gray-600">+502 1234 5678</p>
                      <p className="font-medium text-gray-600">+502 8765 4321</p>
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

                    <div className="flex items-start">
                    <FiUser className="text-gray-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700 font-medium">Estado del cliente</p>
                      <select className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800">
                        <option value="activo">Activo</option>
                        <option value="inactivo">Inactivo</option>
                      </select>
                    </div>
                
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Columna derecha - Información del seguro */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tarjeta de información del vehículo */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
                <h2 className="text-2xl font-bold flex items-center">
                  <FaCar className="mr-3" />
                  Vehículo Asegurado
                </h2>
              </div>
              
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Marca/Modelo</p>
                  <p className="font-medium text-lg text-gray-600">Toyota RAV4 2021</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Placas</p>
                  <p className="font-medium text-lg text-gray-600">P 789ABC</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Color</p>
                  <p className="font-medium text-lg text-gray-600">Rojo</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">VIN</p>
                  <p className="font-medium text-gray-600">JTMBFREV80D123456</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Uso</p>
                  <p className="font-medium text-gray-600">Particular</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Kilometraje</p>
                  <p className="font-medium text-gray-600">35,000 km</p>
                </div>
              </div>
            </div>

            {/* Tarjeta de información de la póliza */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-6 text-white">
                <h2 className="text-2xl font-bold flex items-center">
                  <FaFileContract className="mr-3" />
                  Póliza de Seguro
                </h2>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                    <p className="text-sm text-emerald-800 font-medium">Número de póliza</p>
                    <p className="text-xl font-bold text-black">AUT-2023-789456</p>
                  </div>
                  
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                    <p className="text-sm text-emerald-800 font-medium">Estado</p>
                    <p className="text-xl font-bold text-emerald-600">Activa</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-800 font-medium">Vigencia</p>
                    <p className="text-lg font-medium text-gray-600">15/01/2023 - 15/01/2024</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-800 font-medium">Forma de pago</p>
                    <p className="text-lg font-medium text-gray-600">Débito automático</p>
                  </div>
                </div>
                
                {/* Coberturas */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <FaShieldAlt className="text-emerald-500 mr-2" />
                  Coberturas Contratadas
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <FaCarCrash className="text-emerald-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                    <div>
                      <strong className="block text-gray-800">Daños Materiales</strong>
                      <p className="text-gray-600">Valor comercial completo (Q150,000)</p>
                      <p className="text-sm text-gray-600 mt-1">Deducible: 5% (mínimo Q2,500)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <FaUserShield className="text-emerald-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                    <div>
                      <strong className="block text-gray-800">Responsabilidad Civil</strong>
                      <p className="text-gray-600">Hasta Q5,000,000 por daños a terceros</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <FaTools className="text-emerald-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                    <div>
                      <strong className="block text-gray-800">Asistencia Vial</strong>
                      <p className="text-gray-600">Servicios ilimitados 24/7</p>
                      <p className="text-sm text-gray-600 mt-1">Incluye grúa, paso de corriente, cerrajería</p>
                    </div>
                  </div>
                </div>
                
                {/* Detalles de pago */}
                <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
                  <FaMoneyBillWave className="text-emerald-500 mr-2" />
                  Información de Pagos
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                    <p className="text-sm text-emerald-800 font-medium">Prima mensual</p>
                    <p className="text-2xl font-bold text-black">Q850.00</p>
                    <p className="text-sm text-gray-600">+ IVA</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-800 font-medium">Próximo pago</p>
                    <p className="text-xl font-medium text-gray-600">15/11/2023</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-800 font-medium">Método de pago</p>
                    <p className="text-xl font-medium text-gray-600">Mensual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}