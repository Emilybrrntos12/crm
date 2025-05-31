'use client';

import React from 'react';
import Link from 'next/link';
import { FiHome, FiCheck, FiX } from 'react-icons/fi';
import { FaCreditCard, FaMoneyBillWave, FaUniversity } from 'react-icons/fa';

export default function PagoPolizaPage() {
  const [metodoPago, setMetodoPago] = React.useState('');
  const [paso, setPaso] = React.useState(1);
  const [formData, setFormData] = React.useState({
    numeroTarjeta: '',
    nombreTitular: '',
    fechaExp: '',
    cvv: '',
    monto: 986.00
  });
  const [procesando, setProcesando] = React.useState(false);
  const [exito, setExito] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcesando(true);
    // Simulamos el procesamiento del pago
    setTimeout(() => {
      setProcesando(false);
      setExito(true);
      setPaso(3);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Botón de Home */}
      <div className="flex justify-start mb-4">
        <Link href="/polizas/facturacion">
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition duration-200">
            <FiHome className="text-gray-600 h-5 w-5" />
          </button>
        </Link>
      </div>
      
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Realizar Pago</h1>
          <p className="text-gray-600">Complete los detalles del pago de su póliza</p>
        </div>

        {/* Pasos de pago */}
        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            <div className="w-full absolute top-1/2 h-0.5 bg-gray-200 -z-10"></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              paso >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
            }`}>
              1
            </div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              paso >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
            }`}>
              2
            </div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              paso >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
            }`}>
              3
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-600">Método</span>
            <span className="text-sm text-gray-600">Detalles</span>
            <span className="text-sm text-gray-600">Confirmación</span>
          </div>
        </div>

        {/* Contenido según el paso */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          {paso === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Seleccione el método de pago</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => {
                    setMetodoPago('tarjeta');
                    setPaso(2);
                  }}
                  className={`p-6 border-2 rounded-xl flex flex-col items-center gap-3 transition-colors ${
                    metodoPago === 'tarjeta' 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <FaCreditCard className="h-8 w-8 text-blue-600" />
                  <span className="font-medium">Tarjeta de Crédito</span>
                </button>
                <button
                  onClick={() => {
                    setMetodoPago('efectivo');
                    setPaso(2);
                  }}
                  className={`p-6 border-2 rounded-xl flex flex-col items-center gap-3 transition-colors ${
                    metodoPago === 'efectivo' 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <FaMoneyBillWave className="h-8 w-8 text-blue-600" />
                  <span className="font-medium">Efectivo</span>
                </button>
                <button
                  onClick={() => {
                    setMetodoPago('transferencia');
                    setPaso(2);
                  }}
                  className={`p-6 border-2 rounded-xl flex flex-col items-center gap-3 transition-colors ${
                    metodoPago === 'transferencia' 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <FaUniversity className="h-8 w-8 text-blue-600" />
                  <span className="font-medium">Transferencia</span>
                </button>
              </div>
            </div>
          )}

          {paso === 2 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Detalles del pago</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">Q850.00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">IVA (12%)</span>
                    <span className="text-gray-900">Q136.00</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span className="text-gray-800">Total a pagar</span>
                    <span className="text-gray-900">Q986.00</span>
                  </div>
                </div>

                {metodoPago === 'tarjeta' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Número de Tarjeta
                      </label>
                      <input
                        type="text"
                        maxLength={19}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="1234 5678 9012 3456"
                        value={formData.numeroTarjeta}
                        onChange={(e) => {
                          let value = e.target.value.replace(/\D/g, '');
                          value = value.replace(/(\d{4})/g, '$1 ').trim();
                          setFormData({ ...formData, numeroTarjeta: value });
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre del Titular
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Como aparece en la tarjeta"
                        value={formData.nombreTitular}
                        onChange={(e) => setFormData({ ...formData, nombreTitular: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Fecha de Expiración
                        </label>
                        <input
                          type="text"
                          maxLength={5}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="MM/YY"
                          value={formData.fechaExp}
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, '');
                            if (value.length >= 2) {
                              value = value.slice(0, 2) + '/' + value.slice(2);
                            }
                            setFormData({ ...formData, fechaExp: value });
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          maxLength={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '');
                            setFormData({ ...formData, cvv: value });
                          }}
                        />
                      </div>
                    </div>
                  </>
                )}

                {metodoPago === 'efectivo' && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-800 mb-2">Instrucciones de Pago</h3>
                    <p className="text-blue-600 mb-4">
                      Visite cualquiera de nuestras agencias para realizar el pago en efectivo.
                      Presente el siguiente código:
                    </p>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <span className="text-2xl font-mono font-bold text-blue-600">2025-0158-EF</span>
                    </div>
                  </div>
                )}

                {metodoPago === 'transferencia' && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-blue-800 mb-2">Datos Bancarios</h3>
                    <div className="space-y-2">
                      <p className="flex justify-between">
                        <span className="text-blue-600">Banco:</span>
                        <span className="font-medium">Banco Industrial</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-blue-600">Cuenta:</span>
                        <span className="font-medium">123-456789-0</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-blue-600">Tipo:</span>
                        <span className="font-medium">Monetaria</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-blue-600">Nombre:</span>
                        <span className="font-medium">Seguros GT, S.A.</span>
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-6">
                  <button
                    type="button"
                    onClick={() => setPaso(1)}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Anterior
                  </button>
                  <button
                    type="submit"
                    disabled={procesando}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300"
                  >
                    {procesando ? 'Procesando...' : 'Pagar Q986.00'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {paso === 3 && (
            <div className="text-center py-8">
              {exito ? (
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <FiCheck className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">¡Pago Exitoso!</h2>
                  <p className="text-gray-600">
                    Su pago ha sido procesado correctamente. 
                    Recibirá un correo electrónico con la confirmación.
                  </p>
                  <Link href="/polizas/facturacion">
                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Volver a Facturación
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <FiX className="h-8 w-8 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">Error en el Pago</h2>
                  <p className="text-gray-600">
                    Ha ocurrido un error al procesar su pago. 
                    Por favor, intente nuevamente.
                  </p>
                  <button
                    onClick={() => setPaso(1)}
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Intentar Nuevamente
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
