import { FiUser, FiMail, FiPhone, FiCalendar, FiMapPin, FiBriefcase, FiCheckCircle } from 'react-icons/fi';

export default function EditarUsuarioPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            EDITAR USUARIO
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Actualice la información del cliente
          </p>
        </div>
        
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header con gradiente */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-16 w-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-4">
                <span className="text-white text-2xl font-medium">JL</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Juan López</h2>
                <p className="text-blue-100">ID: CLI-001</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nombre */}
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 flex items-center">
                  <FiUser className="mr-2 text-blue-600" /> Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  defaultValue="Juan López"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 flex items-center">
                  <FiMail className="mr-2 text-blue-600" /> Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="juan@example.com"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>

              {/* Teléfono */}
              <div className="space-y-1">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 flex items-center">
                  <FiPhone className="mr-2 text-blue-600" /> Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  defaultValue="+52 55 1234 5678"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>

              {/* Fecha de nacimiento */}
              <div className="space-y-1">
                <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 flex items-center">
                  <FiCalendar className="mr-2 text-blue-600" /> Fecha de nacimiento
                </label>
                <input
                  type="date"
                  id="birthdate"
                  defaultValue="1985-03-15"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>

              {/* Dirección */}
              <div className="md:col-span-2 space-y-1">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 flex items-center">
                  <FiMapPin className="mr-2 text-blue-600" /> Dirección
                </label>
                <input
                  type="text"
                  id="address"
                  defaultValue="Av. Reforma 123, CDMX"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>

              {/* Empresa */}
              <div className="space-y-1">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 flex items-center">
                  <FiBriefcase className="mr-2 text-blue-600" /> Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  defaultValue="Acme Corp"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>

              {/* Cliente desde */}
              <div className="space-y-1">
                <label htmlFor="since" className="block text-sm font-medium text-gray-700 flex items-center">
                  <FiCalendar className="mr-2 text-blue-600" /> Cliente desde
                </label>
                <input
                  type="date"
                  id="since"
                  defaultValue="2023-01-01"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
              </div>

              {/* Estado */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700 flex items-center">
                  <FiCheckCircle className="mr-2 text-blue-600" /> Estado
                </label>
                <div className="mt-1 flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="status"
                      value="active"
                      defaultChecked
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Activo</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="status"
                      value="inactive"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Inactivo</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-6 border-t border-gray-200 space-x-3">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-2 border border-transparent rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Guardar cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}