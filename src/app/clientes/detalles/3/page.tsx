import { FaHome, FaShieldAlt, FaFire, FaTools, FaStar } from 'react-icons/fa';
import { GiHouseKeys, GiWaterDrop } from 'react-icons/gi';
import { IoMdFlash } from 'react-icons/io';

export default function CreativeHomeInsurance() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Tarjeta principal con efecto 3D */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
        {/* Encabezado con efecto de luz */}
        <div className="relative bg-blue-700 p-8 text-center text-white overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-30"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center mb-4 bg-white/20 p-5 rounded-full backdrop-blur-sm">
              <FaHome className="text-3xl text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Escudo Hogar</h2>
            <p className="text-blue-100 font-medium">Protección 360° para tu patrimonio</p>
          </div>
        </div>

        {/* Contenido con diseño de burbujas */}
        <div className="p-8 bg-white/90 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Beneficios con iconos creativos */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span>Protecciones Destacadas</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-red-100 rounded-full opacity-70"></div>
                    <FaFire className="relative text-2xl text-red-500 p-2" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Incendio Total</h4>
                    <p className="text-gray-600 text-sm">Valor completo de tu vivienda</p>
                    <div className="mt-1 text-xs font-medium text-red-500 bg-red-50 px-2 py-1 rounded-full inline-block">
                      + Daños por humo
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-blue-100 rounded-full opacity-70"></div>
                    <GiWaterDrop className="relative text-2xl text-blue-500 p-2" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Inundación Express</h4>
                    <p className="text-gray-600 text-sm">Hasta Q300,000</p>
                    <div className="mt-1 text-xs font-medium text-blue-500 bg-blue-50 px-2 py-1 rounded-full inline-block">
                      + Filtraciones cubiertas
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-purple-100 rounded-full opacity-70"></div>
                    <GiHouseKeys className="relative text-2xl text-purple-500 p-2" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Robo Plus</h4>
                    <p className="text-gray-600 text-sm">Contenido + estructura</p>
                    <div className="mt-1 text-xs font-medium text-purple-500 bg-purple-50 px-2 py-1 rounded-full inline-block">
                      + Reposición de llaves
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Precio con diseño de etiqueta */}
            <div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg">Plan Estelar</h3>
                  <div className="bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                    RECOMENDADO
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-4xl font-bold mb-1">Q2,900<span className="text-lg font-normal opacity-80">/año</span></div>
                  <div className="text-sm opacity-90">+ IVA incluido</div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <IoMdFlash className="text-yellow-300 text-xs" />
                    </div>
                    <span>Deducible: 5% (mín Q1,500)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <FaShieldAlt className="text-blue-200 text-xs" />
                    </div>
                    <span>Asistencia legal incluida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <FaTools className="text-white text-xs" />
                    </div>
                    <span>6 servicios de emergencia anuales</span>
                  </div>
                </div>
              </div>

              {/* Nota importante con efecto */}
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg animate-pulse">
                <div className="flex items-start gap-2">
                  <div className="text-yellow-500 mt-0.5">
                    <FaShieldAlt />
                  </div>
                  <div className="text-sm text-yellow-800">
                    <strong>Importante:</strong> Cobertura activa inmediatamente al aprobarse tu pago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pie de tarjeta con efecto de luz */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-4 text-center text-white/80 text-sm">
          <div className="inline-flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Cobertura disponible en todo el territorio nacional</span>
          </div>
        </div>
      </div>
    </div>
  );
}