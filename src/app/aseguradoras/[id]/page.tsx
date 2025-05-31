import React from 'react';

export default function DetallesAseguradoraPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center flex-col gap-4">
      <h1 className="text-4xl font-bold text-gray-800">Detalles de la Aseguradora</h1>
      <p className="text-gray-600">ID de la aseguradora: {params.id}</p>
    </div>
  );
}