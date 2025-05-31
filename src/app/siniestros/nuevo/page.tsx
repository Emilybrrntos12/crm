'use client';
import React, { useState } from 'react';
import { 
  FaHome, 
  FaUpload, 
  FaSave,
} from 'react-icons/fa';
import Link from 'next/link';

export default function NuevoReportePage() {
  const [formData, setFormData] = useState({
    tipo: '',
    subtipo: '',
    poliza: '',
    cliente: '',
    fecha: '',
    hora: '',
    descripcion: '',
    direccion: '',
    monto_estimado: '',
    archivos: []
  });

  const [paso, setPaso] = useState(1);

  const tiposSiniestro = {
    'auto': ['Colisión', 'Robo total', 'Robo parcial', 'Vandalismo', 'Desastre natural'],
    'hogar': ['Incendio', 'Robo', 'Inundación', 'Daños estructurales', 'Desastre natural'],
    'vida': ['Fallecimiento', 'Invalidez', 'Enfermedad grave', 'Hospitalización'],
    'otro': ['Responsabilidad Civil', 'Fraude', 'Otro']
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    setPaso(3);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Barra superior */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/siniestros">
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">
            <FaHome className="text-gray-600 h-5 w-5" />
          </button>
        </Link>
      </div>

      {/* Header principal */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Nuevo Reporte de Siniestro</h1>
        <p className="text-gray-600 mt-1">Complete la información del siniestro</p>
      </div>

      {/* Pasos del proceso */}
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
          <span className="text-sm text-gray-700">Información Básica</span>
          <span className="text-sm text-gray-700">Detalles y Evidencia</span>
          <span className="text-sm text-gray-700">Confirmación</span>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        {paso === 1 && (
          <form onSubmit={(e) => { e.preventDefault(); setPaso(2); }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Siniestro
                </label>                <select 
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  value={formData.tipo}
                  onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                  required
                >
                  <option value="">Seleccione un tipo</option>
                  <option value="auto">Automóvil</option>
                  <option value="hogar">Hogar</option>
                  <option value="vida">Vida</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {formData.tipo && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subtipo
                  </label>
                  <select 
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                    value={formData.subtipo}
                    onChange={(e) => setFormData({ ...formData, subtipo: e.target.value })}
                    required
                  >
                    <option value="">Seleccione un subtipo</option>
                    {tiposSiniestro[formData.tipo as keyof typeof tiposSiniestro].map((subtipo) => (
                      <option key={subtipo} value={subtipo}>{subtipo}</option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número de Póliza
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  placeholder="Ej: POL-2023-00158"
                  value={formData.poliza}
                  onChange={(e) => setFormData({ ...formData, poliza: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cliente
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  placeholder="Nombre del asegurado"
                  value={formData.cliente}
                  onChange={(e) => setFormData({ ...formData, cliente: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha del Incidente
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  value={formData.fecha}
                  onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hora del Incidente
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                  value={formData.hora}
                  onChange={(e) => setFormData({ ...formData, hora: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Siguiente
              </button>
            </div>
          </form>
        )}

        {paso === 2 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descripción detallada
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                placeholder="Describa detalladamente lo sucedido..."
                value={formData.descripcion}
                onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dirección del Incidente
              </label>
              <input
                type="text"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                placeholder="Dirección exacta donde ocurrió el incidente"
                value={formData.direccion}
                onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monto Estimado del Daño
              </label>
              <input
                type="number"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
                placeholder="0.00"
                value={formData.monto_estimado}
                onChange={(e) => setFormData({ ...formData, monto_estimado: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Evidencia Fotográfica
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                      <span>Subir archivos</span>
                      <input type="file" className="sr-only" multiple />
                    </label>
                    <p className="pl-1">o arrastrar y soltar</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                type="button"
                onClick={() => setPaso(1)}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Anterior
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enviar Reporte
              </button>
            </div>
          </form>
        )}

        {paso === 3 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaSave className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">¡Reporte Enviado!</h2>
            <p className="text-gray-600 mb-6">
              Su reporte de siniestro ha sido registrado correctamente.
              Le notificaremos cuando sea asignado a un ajustador.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/siniestros">
                <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Volver a Siniestros
                </button>
              </Link>
              <button
                onClick={() => {
                  setFormData({
                    tipo: '',
                    subtipo: '',
                    poliza: '',
                    cliente: '',
                    fecha: '',
                    hora: '',
                    descripcion: '',
                    direccion: '',
                    monto_estimado: '',
                    archivos: []
                  });
                  setPaso(1);
                }}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Nuevo Reporte
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
