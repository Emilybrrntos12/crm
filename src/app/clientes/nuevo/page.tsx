import Link from 'next/link';
import { FiHome } from 'react-icons/fi';

export default function NuevoPage() {
  return (
    
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Botón de Home en la esquina superior izquierda */}
<div className="flex justify-start mb-4">
  <Link href="/">
    <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition duration-200">
      <FiHome className="text-gray-600 h-5 w-5" />
    </button>
  </Link>
</div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
            <h2 className="text-xl font-bold text-white">Nuevo Cliente</h2>
          </div>
          
          <form className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                  placeholder="Ej: Juan"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Apellido <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                  placeholder="Ej: Pérez"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                placeholder="Ej: cliente@example.com"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                  placeholder="Ej: 555-1234567"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Fecha de Nacimiento <span className="text-red-500">*</span>
                </label>
                <input 
                  type="date" 
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Dirección
              </label>
              <input 
                type="text" 
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                placeholder="Ej: Av. Principal #123"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Compañía Aseguradora <span className="text-red-500">*</span>
              </label>
              <select 
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                required
              >
                <option value="">Seleccione una compañía</option>
                <option value="vidaSegura">Vida Segura S.A.</option>
                <option value="proteccionTotal">Protección Total</option>
                <option value="segurosDelFuturo">Seguros del Futuro</option>
              </select>
            </div>

            {/* Nuevo campo: Tipo de Seguro */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Tipo de Seguro <span className="text-red-500">*</span>
              </label>
              <select 
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                required
              >
                <option value="">Seleccione un tipo de seguro</option>
                <option value="auto">Seguro para Auto</option>
                <option value="vivienda">Seguro para Vivienda</option>
                <option value="vida">Seguro de Vida</option>
              </select>
            </div>

            {/* Nuevo campo: Planes */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Plan <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <input
                    id="plan-basico"
                    name="plan"
                    type="radio"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    required
                  />
                  <label htmlFor="plan-basico" className="ml-2 block text-sm text-gray-800">
                    Básico
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="plan-estandar"
                    name="plan"
                    type="radio"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    required
                  />
                  <label htmlFor="plan-estandar" className="ml-2 block text-sm text-gray-800">
                    Estándar
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="plan-premium"
                    name="plan"
                    type="radio"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    required
                  />
                  <label htmlFor="plan-premium" className="ml-2 block text-sm text-gray-800">
                    Premium
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-800">
                Acepto los términos y condiciones del seguro
              </label>
            </div>
            
            <div className="flex justify-end pt-6">
              <button
                type="button"
                className="mr-4 px-6 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
              >
                Registrar Cliente
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}