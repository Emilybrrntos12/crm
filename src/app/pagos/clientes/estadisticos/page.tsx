import React from 'react';

export default function EstadisticosPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Estadísticas de Pagos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Total Pagos</h2>
          <p className="text-2xl font-bold text-blue-600">$50,000.00</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Por Pagar</h2>
          <p className="text-2xl font-bold text-yellow-600">$15,000.00</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-gray-700">Vencidos</h2>
          <p className="text-2xl font-bold text-red-600">$5,000.00</p>
        </div>
      </div>
    </div>
  );
}