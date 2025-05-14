'use client';

import { useState } from 'react';
import { 
  FaHome, 
  FaUser, 
  FaBuilding, 
  FaCar,  
  FaDollarSign,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowLeft
} from 'react-icons/fa';
import Link from 'next/link';

export default function NuevaPolizaPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tipo: '',
    aseguradora: '',
    cliente: {
      nombre: '',
      email: '',
      telefono: ''
    },
    poliza: {
      producto: '',
      cobertura: '',
      inicioVigencia: '',
      finVigencia: '',
      primaAnual: '',
      formaPago: 'mensual'
    },
    beneficiarios: []
  });

  const handleInputChange = (section: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [section]: section === 'cliente' || section === 'poliza' 
        ? { ...prev[section], [field]: value }
        : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <Link href="/polizas">
            <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition duration-200">
              <FaArrowLeft className="text-gray-600 h-5 w-5" />
            </button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-800">Nueva Póliza</h1>
        </div>
      </div>

      {/* Progreso */}
      <div className="mb-8">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
            }`}>
              <FaShieldAlt className="h-4 w-4" />
            </div>
            <div className="ml-3">
              <p className={`text-sm font-medium ${step >= 1 ? 'text-blue-600' : 'text-gray-500'}`}>
                Tipo de Seguro
              </p>
            </div>
          </div>
          <div className={`flex-1 h-px mx-4 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
            }`}>
              <FaUser className="h-4 w-4" />
            </div>
            <div className="ml-3">
              <p className={`text-sm font-medium ${step >= 2 ? 'text-blue-600' : 'text-gray-500'}`}>
                Datos del Cliente
              </p>
            </div>
          </div>
          <div className={`flex-1 h-px mx-4 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`} />
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
            }`}>
              <FaDollarSign className="h-4 w-4" />
            </div>
            <div className="ml-3">
              <p className={`text-sm font-medium ${step >= 3 ? 'text-blue-600' : 'text-gray-500'}`}>
                Detalles de Póliza
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido del formulario */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Selecciona el tipo de seguro</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                  onClick={() => {
                    handleInputChange('tipo', '', 'auto');
                    setStep(2);
                  }}
                  className={`p-6 rounded-xl border-2 hover:border-blue-600 hover:bg-blue-50 transition-colors ${
                    formData.tipo === 'auto' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                  }`}
                >
                  <FaCar className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-medium text-gray-900">Seguro de Auto</h3>
                  <p className="text-sm text-gray-500 mt-1">Protección completa para tu vehículo</p>
                </button>
                <button 
                  onClick={() => {
                    handleInputChange('tipo', '', 'vivienda');
                    setStep(2);
                  }}
                  className={`p-6 rounded-xl border-2 hover:border-blue-600 hover:bg-blue-50 transition-colors ${
                    formData.tipo === 'vivienda' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                  }`}
                >
                  <FaHome className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-medium text-gray-900">Seguro de Hogar</h3>
                  <p className="text-sm text-gray-500 mt-1">Protege tu casa y sus contenidos</p>
                </button>
                <button 
                  onClick={() => {
                    handleInputChange('tipo', '', 'vida');
                    setStep(2);
                  }}
                  className={`p-6 rounded-xl border-2 hover:border-blue-600 hover:bg-blue-50 transition-colors ${
                    formData.tipo === 'vida' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                  }`}
                >
                  <FaUser className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-medium text-gray-900">Seguro de Vida</h3>
                  <p className="text-sm text-gray-500 mt-1">Protección para ti y tu familia</p>
                </button>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Selecciona la aseguradora</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button 
                    onClick={() => handleInputChange('aseguradora', '', 'Mapfre')}
                    className={`p-4 rounded-xl border-2 hover:border-blue-600 hover:bg-blue-50 transition-colors ${
                      formData.aseguradora === 'Mapfre' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <FaBuilding className="h-6 w-6 text-blue-600 mb-2" />
                    <h3 className="font-medium text-gray-900">Mapfre</h3>
                  </button>
                  <button 
                    onClick={() => handleInputChange('aseguradora', '', 'AXA')}
                    className={`p-4 rounded-xl border-2 hover:border-blue-600 hover:bg-blue-50 transition-colors ${
                      formData.aseguradora === 'AXA' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <FaBuilding className="h-6 w-6 text-blue-600 mb-2" />
                    <h3 className="font-medium text-gray-900">AXA</h3>
                  </button>
                  <button 
                    onClick={() => handleInputChange('aseguradora', '', 'Atlas')}
                    className={`p-4 rounded-xl border-2 hover:border-blue-600 hover:bg-blue-50 transition-colors ${
                      formData.aseguradora === 'Atlas' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <FaBuilding className="h-6 w-6 text-blue-600 mb-2" />
                    <h3 className="font-medium text-gray-900">Seguros Atlas</h3>
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Información del Cliente</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre completo</label>
                  <input
                    type="text"
                    value={formData.cliente.nombre}
                    onChange={(e) => handleInputChange('cliente', 'nombre', e.target.value)}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Ej: Juan Pérez López"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                  <input
                    type="email"
                    value={formData.cliente.email}
                    onChange={(e) => handleInputChange('cliente', 'email', e.target.value)}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="cliente@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <input
                    type="tel"
                    value={formData.cliente.telefono}
                    onChange={(e) => handleInputChange('cliente', 'telefono', e.target.value)}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="55 1234 5678"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Detalles de la Póliza</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Producto</label>
                  <select
                    value={formData.poliza.producto}
                    onChange={(e) => handleInputChange('poliza', 'producto', e.target.value)}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Selecciona un producto</option>
                    <option value="basico">Básico</option>
                    <option value="estandar">Estándar</option>
                    <option value="premium">Premium</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Cobertura</label>
                  <select
                    value={formData.poliza.cobertura}
                    onChange={(e) => handleInputChange('poliza', 'cobertura', e.target.value)}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Selecciona la cobertura</option>
                    <option value="limitada">Limitada</option>
                    <option value="amplia">Amplia</option>
                    <option value="total">Total</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Inicio de vigencia</label>
                  <input
                    type="date"
                    value={formData.poliza.inicioVigencia}
                    onChange={(e) => handleInputChange('poliza', 'inicioVigencia', e.target.value)}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Fin de vigencia</label>
                  <input
                    type="date"
                    value={formData.poliza.finVigencia}
                    onChange={(e) => handleInputChange('poliza', 'finVigencia', e.target.value)}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Prima anual</label>
                  <div className="mt-1 relative rounded-lg shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      type="text"
                      value={formData.poliza.primaAnual}
                      onChange={(e) => handleInputChange('poliza', 'primaAnual', e.target.value)}
                      className="block w-full rounded-lg border-gray-300 pl-7 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Forma de pago</label>
                  <select
                    value={formData.poliza.formaPago}
                    onChange={(e) => handleInputChange('poliza', 'formaPago', e.target.value)}
                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="mensual">Mensual</option>
                    <option value="trimestral">Trimestral</option>
                    <option value="semestral">Semestral</option>
                    <option value="anual">Anual</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Botones de navegación */}
          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Anterior
              </button>
            )}
            <div className="ml-auto">
              {step < 3 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  disabled={
                    (step === 1 && (!formData.tipo || !formData.aseguradora)) ||
                    (step === 2 && (!formData.cliente.nombre || !formData.cliente.email || !formData.cliente.telefono))
                  }
                >
                  Siguiente
                </button>
              ) : (
                <button
                  onClick={() => {
                    // Aquí iría la lógica para enviar el formulario
                    console.log('Formulario enviado:', formData);
                  }}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
                >
                  <FaCheckCircle />
                  <span>Crear Póliza</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
