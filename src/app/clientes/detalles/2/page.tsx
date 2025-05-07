import Link from 'next/link';
import { FaCar, FaCarCrash, FaTools, FaShieldAlt, FaGasPump, FaRoad, FaPhoneAlt, FaUserShield, FaMoneyBillWave, FaPercentage, FaHeadset } from 'react-icons/fa';

export default function AutoInsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section - Color verde esmeralda */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-20 p-2 rounded-full w-24 h-24 mx-auto shadow-md flex items-center justify-center mb-6">
              <FaCar className="text-white text-4xl" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Seguro de Auto <span className="text-emerald-200">Total Protect</span>
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Protección integral para tu vehículo con las mejores coberturas y asistencia las 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/cotizar" className="bg-white hover:bg-gray-100 text-emerald-600 font-medium py-3 px-8 rounded-lg transition duration-300 shadow-lg">
                Cotizar Ahora
              </Link>
              <Link href="/coberturas" className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white font-medium py-3 px-8 rounded-lg border border-white transition duration-300">
                Ver Coberturas
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Coberturas Principales - Color azul oscuro */}
      <div className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Coberturas Incluidas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-700 p-6 rounded-lg border border-slate-600">
              <div className="text-3xl mb-4 text-emerald-400">
                <FaCarCrash />
              </div>
              <h3 className="text-xl font-semibold mb-3">Daños Materiales</h3>
              <p className="text-slate-300">Reparación de tu auto por accidente o colisión</p>
              <div className="mt-4 font-bold text-emerald-400">100% del valor comercial</div>
            </div>
            
            <div className="bg-slate-700 p-6 rounded-lg border border-slate-600">
              <div className="text-3xl mb-4 text-emerald-400">
                <FaUserShield />
              </div>
              <h3 className="text-xl font-semibold mb-3">Responsabilidad Civil</h3>
              <p className="text-slate-300">Daños a terceros en sus bienes o personas</p>
              <div className="mt-4 font-bold text-emerald-400">Hasta Q5,000,000</div>
            </div>
            
            <div className="bg-slate-700 p-6 rounded-lg border border-slate-600">
              <div className="text-3xl mb-4 text-emerald-400">
                <FaTools />
              </div>
              <h3 className="text-xl font-semibold mb-3">Asistencia Vial</h3>
              <p className="text-slate-300">Grúa, paso de corriente, servicio de cerrajería</p>
              <div className="mt-4 font-bold text-emerald-400">Ilimitado 24/7</div>
            </div>
          </div>
        </div>
      </div>

      {/* Detalles del Plan - Color blanco */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-slate-800 p-8 text-center">
            <h2 className="text-2xl font-bold text-white">Detalles del Plan PREMIUM</h2>
          </div>
          
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Columna de Beneficios Adicionales */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Beneficios Extra</h3>
              <ul className="space-y-5 text-gray-800">
                <li className="flex items-start">
                  <FaGasPump className="text-emerald-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                  <div>
                    <strong className="block">Gasolina de emergencia</strong>
                    <span>Hasta 10 litros gratis por año</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaRoad className="text-emerald-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                  <div>
                    <strong className="block">Auto sustituto</strong>
                    <span>5 días por reparación mayor</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaPhoneAlt className="text-emerald-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                  <div>
                    <strong className="block">Asistencia médica</strong>
                    <span>Telemedicina incluida</span>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Columna de Detalles Financieros */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Información Financiera</h3>
              <div className="space-y-5">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <FaMoneyBillWave className="text-emerald-500 text-xl" />
                    <div>
                      <div className="font-medium text-gray-800">Prima Mensual</div>
                      <div className="text-2xl font-bold text-gray-900">Q750 <span className="text-sm text-gray-600">+ IVA</span></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <FaPercentage className="text-emerald-500 text-xl" />
                    <div>
                      <div className="font-medium text-gray-800">Deducible</div>
                      <div className="text-xl font-bold text-gray-900">10% del monto reclamado</div>
                      <div className="text-sm text-gray-600">(Mínimo Q3,000)</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <FaShieldAlt className="text-emerald-500 text-xl" />
                    <div>
                      <div className="font-medium text-gray-800">Descuento por no siniestros</div>
                      <div className="text-gray-900">
                        <span className="font-bold">15% menos</span> al renovar
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beneficios Adicionales - Color verde claro */}
      <div className="bg-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Ventajas Exclusivas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
              <div className="text-emerald-600 text-3xl mb-4">
                <FaUserShield />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Protección Legal</h3>
              <p className="text-gray-700">Defensa jurídica en caso de accidente</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
              <div className="text-emerald-600 text-3xl mb-4">
                <FaCar />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Vidrios y Cerraduras</h3>
              <p className="text-gray-700">Reposición sin costo adicional</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-emerald-100">
              <div className="text-emerald-600 text-3xl mb-4">
                <FaHeadset />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Asistencia Personalizada</h3>
              <p className="text-gray-700">Asesor dedicado las 24 horas</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final - Color verde esmeralda */}
          </div>
  );
}