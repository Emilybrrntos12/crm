import Link from 'next/link';
import { FaHeartbeat, FaShieldAlt, FaUserShield, FaPiggyBank, FaHandshake, FaChartLine, FaHeadset, FaMoneyBillWave, FaPercentage, FaClinicMedical } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-2 rounded-full w-24 h-24 mx-auto shadow-md flex items-center justify-center mb-6">
            <FaHeartbeat className="text-blue-600 text-4xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Seguro de Vida <span className="text-blue-600">Acme Corp</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            La protección más completa para tu familia con coberturas ampliadas y beneficios exclusivos.
          </p>
        </div>
      </div>

      {/* Beneficios Principales */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-blue-600 p-8 text-center">
            <h2 className="text-2xl font-bold text-white">Beneficios Integrales de tu Seguro PREMIUM</h2>
          </div>
          
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Columna de Beneficios */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Coberturas Principales</h3>
              <ul className="space-y-5 text-gray-800">
                <li className="flex items-start">
                  <FaShieldAlt className="text-blue-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                  <div>
                    <strong className="block">Fallecimiento por cualquier causa</strong>
                    <span>100% del capital asegurado (Q500,000)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaUserShield className="text-blue-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                  <div>
                    <strong className="block">Invalidez Total y Permanente</strong>
                    <span>70% del capital asegurado (Q350,000)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaClinicMedical className="text-blue-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                  <div>
                    <strong className="block">Gastos Médicos Mayores</strong>
                    <span>Hasta 20% del capital (Q100,000)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaHeartbeat className="text-blue-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                  <div>
                    <strong className="block">Enfermedades Graves</strong>
                    <span>30% del capital (Q150,000) para 15 padecimientos</span>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Columna de Detalles Financieros */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Detalles del Plan</h3>
              <div className="space-y-5">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <FaMoneyBillWave className="text-blue-500 text-xl" />
                    <div>
                      <div className="font-medium text-gray-800">Prima Mensual</div>
                      <div className="text-2xl font-bold text-gray-900">Q450 <span className="text-sm text-gray-600"></span></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <FaPercentage className="text-blue-500 text-xl" />
                    <div>
                      <div className="font-medium text-gray-800">Deducible</div>
                      <div className="text-xl font-bold text-gray-900">5% del monto reclamado</div>
                      <div className="text-sm text-gray-600">(Mínimo Q2,500)</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <FaChartLine className="text-blue-500 text-xl" />
                    <div>
                      <div className="font-medium text-gray-800">Cobertura Adicional</div>
                      <div className="text-gray-900">
                        <span className="font-bold">10% extra</span> por accidente
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <FaPiggyBank className="text-blue-500 text-xl" />
                    <div>
                      <div className="font-medium text-gray-800">Ahorro Incluido</div>
                      <div className="text-gray-900">
                        <span className="font-bold">15% de tu prima</span> se acumula como valor de rescate
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beneficios Adicionales */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Beneficios Complementarios</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Asistencia Funeraria</h3>
              <p className="text-gray-700">Servicio completo de funeraria hasta por Q50,000</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaHeadset />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Asesoría Legal</h3>
              <p className="text-gray-700">5 horas de asesoría legal gratuita anual</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="text-blue-600 text-3xl mb-4">
                <FaClinicMedical />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Seguro de Gastos Médicos</h3>
              <p className="text-gray-700">Q25,000 adicionales para hospitalización</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
    </div>
  );
}