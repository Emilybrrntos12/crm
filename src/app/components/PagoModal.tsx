import React from 'react';
import { IoClose } from 'react-icons/io5';
import { FaCreditCard, FaMoneyBillWave } from 'react-icons/fa';

interface PagoModalProps {
  isOpen: boolean;
  onClose: () => void;
  factura: {
    numero: string;
    total: number;
    subtotal: number;
    iva: number;
  };
  onProcesarPago: (metodoPago: string) => Promise<void>;
}

export default function PagoModal({ isOpen, onClose, factura, onProcesarPago }: PagoModalProps) {
  const [metodoPago, setMetodoPago] = React.useState('tarjeta');
  const [procesando, setProcesando] = React.useState(false);

  if (!isOpen) return null;

  const handlePagar = async () => {
    setProcesando(true);
    try {
      await onProcesarPago(metodoPago);
      onClose();
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      // Aquí podrías mostrar un mensaje de error
    } finally {
      setProcesando(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Realizar Pago</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <IoClose className="h-6 w-6 text-gray-500" />
          </button>
        </div>        {/* Detalles de la factura */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Factura</span>
            <span className="text-gray-900 font-medium">{factura.numero}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Subtotal</span>
            <span className="text-gray-900">Q{factura.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">IVA (12%)</span>
            <span className="text-gray-900">Q{factura.iva.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span className="text-gray-800">Total</span>
            <span className="text-gray-900">Q{factura.total.toFixed(2)}</span>
          </div>
        </div>

        {/* Métodos de pago */}
        <div className="space-y-4 mb-6">
          <h3 className="font-medium text-gray-700">Método de pago</h3>
          <div className="grid grid-cols-2 gap-4">
            <button              className={`p-4 border-2 rounded-lg flex flex-col items-center gap-2 transition-colors ${
                metodoPago === 'tarjeta' 
                  ? 'border-blue-600 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50'
              }`}
              onClick={() => setMetodoPago('tarjeta')}
            >
              <FaCreditCard className={`h-6 w-6 ${metodoPago === 'tarjeta' ? 'text-blue-600' : 'text-gray-700'}`} />
              <div className="text-center">
                <span className={`font-medium ${metodoPago === 'tarjeta' ? 'text-blue-600' : 'text-gray-700'}`}>Tarjeta de Crédito</span>
              </div>
            </button>
            <button
              className={`p-4 border-2 rounded-lg flex flex-col items-center gap-2 transition-colors ${
                metodoPago === 'efectivo' 
                  ? 'border-blue-600 bg-blue-50' 
                  : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50'
              }`}
              onClick={() => setMetodoPago('efectivo')}
            >
              <FaMoneyBillWave className={`h-6 w-6 ${metodoPago === 'efectivo' ? 'text-blue-600' : 'text-gray-700'}`} />
              <div className="text-center">
                <span className={`font-medium ${metodoPago === 'efectivo' ? 'text-blue-600' : 'text-gray-700'}`}>Efectivo</span>
              </div>
            </button>
          </div>
        </div>

        {/* Botón de pago */}
        <button
          onClick={handlePagar}
          disabled={procesando}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors disabled:bg-blue-300"
        >
          {procesando ? 'Procesando...' : `Pagar Q${factura.total.toFixed(2)}`}
        </button>
      </div>
    </div>
  );
}
