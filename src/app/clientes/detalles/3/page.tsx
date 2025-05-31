import { FaShieldAlt, FaFire, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaIdCard, FaFileAlt, FaMoneyBillWave } from 'react-icons/fa';
import { GiHouse, GiWaterFlask, GiPadlock } from 'react-icons/gi';
import Link from 'next/link';
import { FiHome, FiEdit2 } from 'react-icons/fi';

export default function ClientHomeInsuranceProfile() {
  return (
    <div className="min-h-screen bg-slate-50 p-0">
      {/* Barra superior */}
      <div className="bg-white shadow-sm p-4 md:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition duration-200 text-slate-600">
              <FiHome className="h-5 w-5" />
            </button>
          </Link>
          <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-800">
            <FiEdit2 /> Editar perfil
          </button>
        </div>
      </div>

      {/* Contenedor principal */}
      <div className="w-full max-w-none mx-0">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(300px,400px)_1fr] gap-6 px-4 md:px-6 py-6">
          {/* Columna izquierda - Perfil del cliente */}
          <div className="space-y-6">
            {/* Tarjeta de perfil */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 w-full">
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-inner">
                    <FaUser className="text-slate-700 text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Ana Lucía Ramírez</h2>
                    <p className="text-slate-300 text-sm">Cliente desde Junio 2020</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                      <FaIdCard />
                    </div>
                    <div>
                      <p className="text-xs text-slate-700 uppercase font-medium">Identificación</p>
                      <p className="font-medium text-slate-500">2389 45673 0101</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-xs text-slate-800 uppercase font-medium">Correo</p>
                      <p className="font-medium text-slate-500">ana.ramirez@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-50 rounded-lg text-green-600">
                      <FaPhone />
                    </div>
                    <div>
                      <p className="text-xs text-slate-800 uppercase font-medium">Teléfonos</p>
                      <p className="font-medium text-slate-500">+502 7890 1234</p>
                      <p className="font-medium text-slate-500">+502 7890 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <p className="text-xs text-slate-800 uppercase font-medium">Dirección</p>
                      <p className="font-medium text-slate-500">8a. Calle 15-63, Zona 10</p>
                      <p className="font-medium text-slate-500">Ciudad de Guatemala</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta de información adicional */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 w-full">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <FaFileAlt className="text-slate-600" />
                <span>Detalles Adicionales</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-800 uppercase font-medium">Estado Civil</p>
                  <p className="font-medium text-slate-500">Soltera</p>
                </div>
                
                <div>
                  <p className="text-xs text-slate-800 uppercase font-medium">Ocupación</p>
                  <p className="font-medium text-slate-500">Diseñadora Gráfica</p>
                </div>
                
                <div>
                  <p className="text-xs text-slate-800 uppercase font-medium">Nacimiento</p>
                  <p className="font-medium text-slate-500">14/09/1988</p>
                </div>
                
                <div>
                  <p className="text-xs text-slate-800 uppercase font-medium">Tipo de Cliente</p>
                  <p className="font-medium text-slate-500">Residencial Premium</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Información del seguro */}
          <div className="space-y-6">
            {/* Tarjeta de propiedad con diseño de ficha técnica */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100">
              <div className="border-b border-slate-100 p-6">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                  <GiHouse className="text-2xl text-amber-500" />
                  <span>Vivienda Asegurada</span>
                </h2>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-xs text-slate-800 uppercase font-medium">Dirección</p>
                    <p className="font-medium text-slate-500">8a. Calle 15-63, Zona 10</p>
                    <p className="font-medium text-slate-500">Ciudad de Guatemala</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-xs text-slate-800 uppercase font-medium">Tipo de Propiedad</p>
                    <p className="font-medium text-slate-500">Apartamento</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-xs text-slate-800 uppercase font-medium">Área Construida</p>
                    <p className="font-medium text-slate-500">95 m²</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-xs text-slate-800 uppercase font-medium">Año Construcción</p>
                    <p className="font-medium text-slate-500">2018</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-xs text-slate-500 uppercase font-medium">Valor Asegurado</p>
                    <p className="font-medium text-lg text-slate-800">Q1,750,000</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-xs text-slate-800 uppercase font-medium">Uso</p>
                    <p className="font-medium text-slate-500">Habitación permanente</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta de póliza con diseño de documento */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100">
              <div className="border-b border-slate-100 p-6 bg-slate-50">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                  <FaFileAlt className="text-slate-600" />
                  <span>Póliza de Seguro</span>
                </h2>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-xs text-slate-800 uppercase font-medium">Número</p>
                    <p className="font-medium text-slate-500">HOG-2023-789012</p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-xs text-slate-800 uppercase font-medium">Estado</p>
                    <p className="font-medium text-green-600">Vigente</p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-xs text-slate-800 uppercase font-medium">Vigencia</p>
                    <p className="font-medium text-slate-500">01/05/2023 - 01/05/2024</p>
                  </div>
                </div>
                
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <FaShieldAlt className="text-blue-500" />
                  <span>Coberturas Principales</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className="p-3 bg-red-100 rounded-lg text-red-500">
                      <FaFire className="text-lg" />
                    </div>
                    <div>                      <h4 className="font-bold text-slate-800">Incendio y Rayo</h4>
                      <p className="text-slate-600 text-sm">Cobertura total del valor asegurado (Q1,750,000)</p>
                      <p className="text-xs text-slate-500 mt-1">Deducible: 1% del valor asegurado (mínimo Q2,500)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-500">
                      <GiWaterFlask className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Daños por Agua</h4>
                      <p className="text-slate-600 text-sm">Hasta Q525,000 (30% del valor asegurado)</p>
                      <p className="text-xs text-slate-500 mt-1">Deducible: 10% del valor del reclamo (mínimo Q3,500)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className="p-3 bg-purple-100 rounded-lg text-purple-500">
                      <GiPadlock className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Robo y Asalto</h4>
                      <p className="text-slate-600 text-sm">Hasta Q350,000 (20% del valor asegurado)</p>
                      <p className="text-xs text-slate-500 mt-1">Deducible: 15% del valor del reclamo (mínimo Q5,000)</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-bold text-slate-800 mt-8 mb-4 flex items-center gap-2">
                  <FaMoneyBillWave className="text-green-500" />
                  <span>Detalles de Pago</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <p className="text-xs text-green-800 uppercase font-medium">Prima Anual</p>
                    <p className="text-xl font-bold text-slate-800">Q7,875</p>
                    <p className="text-sm text-green-600">Q656.25 mensual</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <p className="text-xs text-blue-800 uppercase font-medium">Próximo Pago</p>
                    <p className="font-medium text-slate-600">01/06/2025</p>
                    <p className="text-sm text-blue-600">Frecuencia: Mensual</p>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                    <p className="text-xs text-amber-800 uppercase font-medium">Método de Pago</p>
                    <p className="font-medium text-slate-600">Tarjeta de crédito</p>
                    <p className="text-sm text-amber-600">****-4582</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}