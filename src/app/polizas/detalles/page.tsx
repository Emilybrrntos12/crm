import React from 'react';
import Link from 'next/link';
import { FiHome } from 'react-icons/fi';

export default function DetallesPolizaPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Botón de Home */}
      <div className="flex justify-start mb-4">
        <Link href="/polizas">
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition duration-200">
            <FiHome className="text-gray-600 h-5 w-5" />
          </button>
        </Link>
      </div>
      
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800">Hola mundo</h1>
      </div>
    </div>
  );
}
