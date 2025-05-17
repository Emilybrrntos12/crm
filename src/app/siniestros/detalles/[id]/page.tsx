'use client';

import { FaChevronLeft, FaFileAlt, FaHistory, FaUserMd, FaCarCrash, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFileContract, FaFileMedical, FaFileInvoice, FaFileSignature, FaCamera, FaFilePdf, FaFileImage } from 'react-icons/fa';
import Link from 'next/link';
import { useState, use } from 'react';

const siniestrosData = [
  {
    id: 'SIN-2023-0042',
    cliente: {
      nombre: 'Juan López',
      telefono: '+52 555-123-4567',
      email: 'juan.lopez@email.com'
    },
    poliza: {
      numero: 'POL-2023-00158',
      tipo: 'Auto - Cobertura Amplia',
      vigencia: '01/01/2023 - 31/12/2023',
      vehiculo: {
        marca: 'Toyota',
        modelo: 'Camry',
        año: '2022',
        placa: 'ABC-123'
      }
    },
    siniestro: {
      tipo: 'Auto - Colisión',
      fecha: '10/03/2023',
      hora: '14:30',
      ubicacion: 'Av. Principal #123, Col. Centro',
      descripcion: 'Colisión en la avenida principal con daños menores al vehículo. Impacto lateral derecho.',
      detalles: 'El vehículo fue impactado mientras estaba estacionado. Daños en puerta y salpicadera derecha.'
    },
    proceso: {
      estado: 'reportado',
      fechaReporte: '10/03/2023 14:45',
      pasos: [
        {
          fecha: '10/03/2023 14:45',
          estado: 'Reporte inicial',
          descripcion: 'Cliente reportó el siniestro vía telefónica'
        },
        {
          fecha: '10/03/2023 15:30',
          estado: 'Asignación de ajustador',
          descripcion: 'Se asignó al Lic. Carlos Ramírez como ajustador'
        }
      ]
    },
    ajustador: {
      nombre: 'Lic. Carlos Ramírez',
      telefono: '+52 555-987-6543',
      email: 'carlos.ramirez@seguros.com'
    },
    evaluacion: {
      monto: '$8,500.00',
      desglose: [
        { concepto: 'Reparación de puerta', monto: '$3,500.00' },
        { concepto: 'Reparación de salpicadera', monto: '$2,800.00' },
        { concepto: 'Pintura y acabados', monto: '$2,200.00' }
      ],
      deducible: '$850.00'
    },
    documentos: [
      { 
        tipo: 'Reporte inicial', 
        estado: 'Completado',
        url: '/documentos/reporte-inicial-SIN-2023-0042.png'
      },
      { 
        tipo: 'Fotos del siniestro', 
        estado: 'Pendiente',
        url: null
      },
      { 
        tipo: 'Declaración del asegurado', 
        estado: 'Pendiente',
        url: null
      },
      { 
        tipo: 'Evaluación del ajustador', 
        estado: 'En proceso',
        url: null
      }
    ]
  },
  {
    id: 'SIN-2023-0165',
    cliente: {
      nombre: 'María González',
      telefono: '+52 555-765-4321',
      email: 'maria.gonzalez@email.com'
    },
    poliza: {
      numero: 'POL-2023-00142',
      tipo: 'Hogar - Cobertura Básica',
      vigencia: '15/02/2023 - 14/02/2024',
      inmueble: {
        tipo: 'Casa habitación',
        direccion: 'Calle Falsa #456, Col. Ejemplo',
        valor: '$1,200,000.00'
      }
    },
    siniestro: {
      tipo: 'Hogar - Inundación',
      fecha: '28/02/2023',
      hora: '10:00',
      ubicacion: 'Calle Falsa #456, Col. Ejemplo',
      descripcion: 'Inundación causada por lluvias torrenciales, afectando muebles y electrodomésticos.',
      detalles: 'Se requiere evaluación de daños por parte de un ajustador. Posible pérdida total de contenidos.'
    },
    proceso: {
      estado: 'en_evaluacion',
      fechaReporte: '28/02/2023 10:30',
      pasos: [
        {
          fecha: '28/02/2023 10:30',
          estado: 'Reporte inicial',
          descripcion: 'Cliente reportó el siniestro a través de la app'
        },
        {
          fecha: '28/02/2023 11:00',
          estado: 'Asignación de ajustador',
          descripcion: 'Se asignó a la ajustadora Lic. Ana Torres'
        },
        {
          fecha: '01/03/2023 09:00',
          estado: 'Visita de inspección',
          descripcion: 'Ajustadora realizó visita para evaluar daños'
        }
      ]
    },
    ajustador: {
      nombre: 'Lic. Ana Torres',
      telefono: '+52 555-654-3210',
      email: 'ana.torres@seguros.com'
    },
    evaluacion: {
      monto: '$12,300.00',
      desglose: [
        { concepto: 'Reparación de daños por agua', monto: '$5,000.00' },
        { concepto: 'Reemplazo de muebles', monto: '$4,500.00' },
        { concepto: 'Reparación de electrodomésticos', monto: '$2,800.00' }
      ],
      deducible: '$1,230.00'
    },
    documentos: [
      { tipo: 'Reporte inicial', estado: 'Completado' },
      { tipo: 'Fotos del siniestro', estado: 'Completado' },
      { tipo: 'Declaración del asegurado', estado: 'Pendiente' },
      { tipo: 'Evaluación del ajustador', estado: 'En proceso' }
    ]
  },
  {
    id: 'SIN-2023-0182',
    cliente: {
      nombre: 'Carlos Martínez',
      telefono: '+52 555-234-5678',
      email: 'carlos.martinez@email.com'
    },
    poliza: {
      numero: 'POL-2023-00155',
      tipo: 'Salud - Cobertura Plus',
      vigencia: '01/03/2023 - 28/02/2024',
      cobertura: {
        tipo: 'Hospitalización',
        limite: '$100,000.00',
        deducible: '10%'
      }
    },
    siniestro: {
      tipo: 'Salud - Hospitalización',
      fecha: '08/03/2023',
      hora: '09:15',
      ubicacion: 'Hospital San José',
      descripcion: 'Hospitalización por procedimiento quirúrgico programado.',
      detalles: 'Intervención quirúrgica de apendicitis. Se requiere documentación médica completa.'
    },
    proceso: {
      estado: 'documentacion_pendiente',
      fechaReporte: '08/03/2023 09:30',
      pasos: [
        {
          fecha: '08/03/2023 09:30',
          estado: 'Reporte inicial',
          descripcion: 'Ingreso a hospitalización reportado'
        },
        {
          fecha: '08/03/2023 10:00',
          estado: 'Documentación solicitada',
          descripcion: 'Se requiere historial médico y estudios previos'
        }
      ]
    },
    ajustador: {
      nombre: 'Dra. Patricia Mendoza',
      telefono: '+52 555-876-5432',
      email: 'patricia.mendoza@seguros.com'
    },
    evaluacion: {
      monto: '$5,750.00',
      desglose: [
        { concepto: 'Honorarios médicos', monto: '$2,500.00' },
        { concepto: 'Hospitalización', monto: '$2,750.00' },
        { concepto: 'Medicamentos', monto: '$500.00' }
      ],
      deducible: '$575.00'
    },
    documentos: [
      { tipo: 'Reporte inicial', estado: 'Completado' },
      { tipo: 'Historial médico', estado: 'Pendiente' },
      { tipo: 'Estudios previos', estado: 'Pendiente' },
      { tipo: 'Recetas médicas', estado: 'Pendiente' }
    ]
  },
  {
    id: 'SIN-2023-0195',
    cliente: {
      nombre: 'Ana Rodríguez',
      telefono: '+52 555-345-6789',
      email: 'ana.rodriguez@email.com'
    },
    poliza: {
      numero: 'POL-2023-00132',
      tipo: 'Vida - Cobertura Total',
      vigencia: '01/01/2023 - 31/12/2023',
      beneficiarios: [
        { nombre: 'Luis Rodríguez', parentesco: 'Hijo', porcentaje: '50%' },
        { nombre: 'María Rodríguez', parentesco: 'Hija', porcentaje: '50%' }
      ]
    },
    siniestro: {
      tipo: 'Vida - Fallecimiento',
      fecha: '20/02/2023',
      hora: '15:45',
      ubicacion: 'Domicilio particular',
      descripcion: 'Fallecimiento por causas naturales.',
      detalles: 'Fallecimiento debido a complicaciones cardíacas. Documentación completa proporcionada por beneficiarios.'
    },
    proceso: {
      estado: 'aprobado',
      fechaReporte: '21/02/2023 09:00',
      pasos: [
        {
          fecha: '21/02/2023 09:00',
          estado: 'Reporte inicial',
          descripcion: 'Beneficiarios reportaron el fallecimiento'
        },
        {
          fecha: '22/02/2023 10:00',
          estado: 'Documentación recibida',
          descripcion: 'Se recibió acta de defunción y documentos de identidad'
        },
        {
          fecha: '25/02/2023 14:00',
          estado: 'Verificación completada',
          descripcion: 'Se verificó toda la documentación'
        },
        {
          fecha: '28/02/2023 11:00',
          estado: 'Aprobación',
          descripcion: 'Reclamo aprobado para pago'
        }
      ]
    },
    ajustador: {
      nombre: 'Lic. Roberto Méndez',
      telefono: '+52 555-789-0123',
      email: 'roberto.mendez@seguros.com'
    },
    evaluacion: {
      monto: '$50,000.00',
      desglose: [
        { concepto: 'Suma asegurada', monto: '$50,000.00' }
      ],
      deducible: '$0.00'
    },
    documentos: [
      { tipo: 'Acta de defunción', estado: 'Completado' },
      { tipo: 'Identificación de beneficiarios', estado: 'Completado' },
      { tipo: 'Certificado médico', estado: 'Completado' },
      { tipo: 'Póliza original', estado: 'Completado' }
    ]
  },
  {
    id: 'SIN-2023-0201',
    cliente: {
      nombre: 'Roberto Sánchez',
      telefono: '+52 555-456-7890',
      email: 'roberto.sanchez@email.com'
    },
    poliza: {
      numero: 'POL-2023-00125',
      tipo: 'Auto - Cobertura Total',
      vigencia: '01/01/2023 - 31/12/2023',
      vehiculo: {
        marca: 'BMW',
        modelo: 'X5',
        año: '2021',
        placa: 'XYZ-789'
      }
    },
    siniestro: {
      tipo: 'Auto - Robo total',
      fecha: '15/02/2023',
      hora: '23:30',
      ubicacion: 'Estacionamiento Centro Comercial',
      descripcion: 'Robo total del vehículo en estacionamiento público.',
      detalles: 'El vehículo fue sustraído del estacionamiento. Se cuenta con reporte policial y videos de seguridad.'
    },
    proceso: {
      estado: 'pagado',
      fechaReporte: '16/02/2023 08:00',
      pasos: [
        {
          fecha: '16/02/2023 08:00',
          estado: 'Reporte inicial',
          descripcion: 'Cliente reportó el robo del vehículo'
        },
        {
          fecha: '16/02/2023 10:00',
          estado: 'Documentación recibida',
          descripcion: 'Se recibió denuncia y documentación'
        },
        {
          fecha: '20/02/2023 15:00',
          estado: 'Investigación completada',
          descripcion: 'Se verificó la documentación y evidencias'
        },
        {
          fecha: '25/02/2023 12:00',
          estado: 'Aprobación',
          descripcion: 'Reclamo aprobado'
        },
        {
          fecha: '28/02/2023 14:00',
          estado: 'Pago realizado',
          descripcion: 'Se realizó la transferencia al asegurado'
        }
      ]
    },
    ajustador: {
      nombre: 'Ing. Fernando Castro',
      telefono: '+52 555-890-1234',
      email: 'fernando.castro@seguros.com'
    },
    evaluacion: {
      monto: '$35,000.00',
      desglose: [
        { concepto: 'Valor comercial del vehículo', monto: '$35,000.00' }
      ],
      deducible: '$3,500.00'
    },
    documentos: [
      { tipo: 'Denuncia ante MP', estado: 'Completado' },
      { tipo: 'Factura original', estado: 'Completado' },
      { tipo: 'Llaves del vehículo', estado: 'Completado' },
      { tipo: 'Baja de placas', estado: 'Completado' }
    ]
  },
  {
    id: 'SIN-2023-0210',
    cliente: {
      nombre: 'Laura Díaz',
      telefono: '+52 555-567-8901',
      email: 'laura.diaz@email.com'
    },
    poliza: {
      numero: 'POL-2023-00118',
      tipo: 'Responsabilidad Civil',
      vigencia: '01/01/2023 - 31/12/2023',
      cobertura: {
        limite: '$50,000.00',
        tipo: 'Profesional'
      }
    },
    siniestro: {
      tipo: 'Responsabilidad Civil',
      fecha: '10/02/2023',
      hora: '16:20',
      ubicacion: 'Consultorio Dental',
      descripcion: 'Reclamo por complicaciones post-tratamiento dental.',
      detalles: 'Paciente reportó complicaciones después de un procedimiento dental. Se rechazó por falta de evidencia de negligencia.'
    },
    proceso: {
      estado: 'rechazado',
      fechaReporte: '12/02/2023 09:00',
      pasos: [
        {
          fecha: '12/02/2023 09:00',
          estado: 'Reporte inicial',
          descripcion: 'Se recibió el reclamo del paciente'
        },
        {
          fecha: '15/02/2023 11:00',
          estado: 'Investigación iniciada',
          descripcion: 'Revisión de expediente médico'
        },
        {
          fecha: '20/02/2023 14:00',
          estado: 'Evaluación médica',
          descripcion: 'Perito médico realizó evaluación'
        },
        {
          fecha: '25/02/2023 10:00',
          estado: 'Rechazo',
          descripcion: 'Se determinó que el procedimiento fue correcto'
        }
      ]
    },
    ajustador: {
      nombre: 'Dr. Miguel Ángel Torres',
      telefono: '+52 555-901-2345',
      email: 'miguel.torres@seguros.com'
    },
    evaluacion: {
      monto: '$15,000.00',
      desglose: [
        { concepto: 'Monto reclamado', monto: '$15,000.00' }
      ],
      deducible: '$1,500.00'
    },
    documentos: [
      { tipo: 'Expediente médico', estado: 'Completado' },
      { tipo: 'Evaluación pericial', estado: 'Completado' },
      { tipo: 'Reclamación formal', estado: 'Completado' },
      { tipo: 'Documentación de seguimiento', estado: 'Completado' }
    ]
  },
  {
    id: 'SIN-2023-0218',
    cliente: {
      nombre: 'Pedro Vargas',
      telefono: '+52 555-678-9012',
      email: 'pedro.vargas@email.com'
    },
    poliza: {
      numero: 'POL-2023-00110',
      tipo: 'Auto - Cobertura Amplia',
      vigencia: '01/01/2023 - 31/12/2023',
      vehiculo: {
        marca: 'Mercedes-Benz',
        modelo: 'Clase C',
        año: '2022',
        placa: 'MNP-456'
      }
    },
    siniestro: {
      tipo: 'Fraude - Investigación',
      fecha: '05/02/2023',
      hora: '03:15',
      ubicacion: 'Carretera Federal km 45',
      descripcion: 'Reporte de robo con inconsistencias en la declaración.',
      detalles: 'Se detectaron discrepancias en el reporte del asegurado y las evidencias recolectadas. Caso en investigación por posible fraude.'
    },
    proceso: {
      estado: 'en_disputa',
      fechaReporte: '05/02/2023 08:00',
      pasos: [
        {
          fecha: '05/02/2023 08:00',
          estado: 'Reporte inicial',
          descripcion: 'Cliente reportó robo del vehículo'
        },
        {
          fecha: '06/02/2023 10:00',
          estado: 'Inconsistencias detectadas',
          descripcion: 'Se encontraron contradicciones en la declaración'
        },
        {
          fecha: '08/02/2023 15:00',
          estado: 'Investigación especial',
          descripcion: 'Caso derivado a unidad de investigación de fraudes'
        },
        {
          fecha: '10/02/2023 11:00',
          estado: 'En disputa',
          descripcion: 'Caso en revisión legal'
        }
      ]
    },
    ajustador: {
      nombre: 'Lic. Diana Ortiz',
      telefono: '+52 555-012-3456',
      email: 'diana.ortiz@seguros.com'
    },
    evaluacion: {
      monto: '$0.00',
      desglose: [
        { concepto: 'Pendiente por investigación', monto: '$0.00' }
      ],
      deducible: '$0.00'
    },
    documentos: [
      { tipo: 'Denuncia inicial', estado: 'Completado' },
      { tipo: 'Reporte de investigación', estado: 'En proceso' },
      { tipo: 'Peritaje especial', estado: 'En proceso' },
      { tipo: 'Documentación legal', estado: 'Pendiente' }
    ]
  }
];

const getDocumentIcon = (tipo: string) => {
  const iconProps = { className: "text-gray-400 mr-2" };
  
  switch (tipo.toLowerCase()) {
    case 'reporte inicial':
      return <FaFileContract {...iconProps} />;
    case 'fotos del siniestro':
      return <FaCamera {...iconProps} />;
    case 'declaración del asegurado':
      return <FaFileSignature {...iconProps} />;
    case 'evaluación del ajustador':
      return <FaFileMedical {...iconProps} />;
    case 'acta de defunción':
      return <FaFilePdf {...iconProps} />;
    case 'identificación de beneficiarios':
      return <FaFileAlt {...iconProps} />;
    case 'certificado médico':
      return <FaFileMedical {...iconProps} />;
    case 'póliza original':
      return <FaFileContract {...iconProps} />;
    case 'denuncia ante mp':
      return <FaFileSignature {...iconProps} />;
    case 'factura original':
      return <FaFileInvoice {...iconProps} />;
    case 'historial médico':
      return <FaFileMedical {...iconProps} />;
    case 'estudios previos':
      return <FaFileImage {...iconProps} />;
    case 'recetas médicas':
      return <FaFileMedical {...iconProps} />;
    case 'expediente médico':
      return <FaFileMedical {...iconProps} />;
    case 'evaluación pericial':
      return <FaFileContract {...iconProps} />;
    case 'reclamación formal':
      return <FaFileSignature {...iconProps} />;
    case 'documentación de seguimiento':
      return <FaFileAlt {...iconProps} />;
    case 'peritaje especial':
      return <FaFileMedical {...iconProps} />;
    case 'documentación legal':
      return <FaFileContract {...iconProps} />;
    default:
      return <FaFileAlt {...iconProps} />;
  }
};

// Agregamos un tipo para los documentos
type Documento = {
  tipo: string;
  estado: string;
  url?: string | null; // URL de la imagen o documento
};

interface PageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default function DetalleSiniestro({ params }: PageProps) {
  const [documentoSeleccionado, setDocumentoSeleccionado] = useState<Documento | null>(null);
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = (documento: Documento) => {
    setDocumentoSeleccionado(documento);
    setModalAbierto(true);
  };
  const cerrarModal = () => {
    setDocumentoSeleccionado(null);
    setModalAbierto(false);
  };
  
  const resolvedParams = use(params);
  const siniestro = siniestrosData.find((s) => s.id === resolvedParams.id);

  if (!siniestro) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Siniestro no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="flex items-center mb-6">
        <Link href="/siniestros">
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">
            <FaChevronLeft className="text-gray-600 h-5 w-5" />
          </button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 ml-4">Detalle del Siniestro {siniestro.id}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Columna 1: Información Principal */}
        <div className="lg:col-span-2 space-y-6">
          {/* Estado Actual */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Estado del Siniestro</h2>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                siniestro.proceso.estado === 'reportado' 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-gray-100 text-gray-800'
              }`}>
                {siniestro.proceso.estado.replace(/_/g, ' ').toUpperCase()}
              </span>
            </div>
            <div className="space-y-4">
              {siniestro.proceso.pasos.map((paso, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <FaHistory className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{paso.estado}</p>
                    <p className="text-sm text-gray-600">{paso.descripcion}</p>
                    <p className="text-xs text-gray-600 mt-1">{paso.fecha}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detalles del Incidente */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Detalles del Incidente</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center mb-4">
                  <FaCarCrash className="text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-600">Tipo de Siniestro</p>
                    <p className="text-base font-medium text-gray-900">{siniestro.siniestro.tipo}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-600">Ubicación</p>
                    <p className="text-base font-medium text-gray-900">{siniestro.siniestro.ubicacion}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <FaHistory className="text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-600">Fecha y Hora</p>
                    <p className="text-base font-medium text-gray-900">{siniestro.siniestro.fecha} - {siniestro.siniestro.hora}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">Descripción Detallada</p>
              <p className="text-base mt-2 text-gray-900">{siniestro.siniestro.detalles}</p>
            </div>
          </div>

          {/* Evaluación y Costos */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Evaluación y Costos</h2>
            <div className="space-y-4">
              {siniestro.evaluacion.desglose.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-600">{item.concepto}</span>
                  <span className="font-medium text-gray-900">{item.monto}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2">
                <span className="font-medium text-gray-600">Deducible</span>
                <span className="font-medium text-red-600">{siniestro.evaluacion.deducible}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-medium text-gray-600">Total</span>
                <span className="font-bold text-gray-900">{siniestro.evaluacion.monto}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Columna 2: Información Secundaria */}
        <div className="space-y-6">
          {/* Información del Cliente */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Información del Cliente</h2>
            <div className="space-y-4">
              <p className="text-lg font-medium text-gray-900">{siniestro.cliente.nombre}</p>
              <div className="flex items-center text-gray-600">
                <FaPhone className="mr-2" />
                <span>{siniestro.cliente.telefono}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaEnvelope className="mr-2" />
                <span>{siniestro.cliente.email}</span>
              </div>
            </div>
          </div>

          {/* Información de la Póliza */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Información de la Póliza</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Número de Póliza</p>
                <p className="text-base font-medium text-gray-900">{siniestro.poliza.numero}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Tipo de Cobertura</p>
                <p className="text-base font-medium text-gray-900">{siniestro.poliza.tipo}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Vigencia</p>
                <p className="text-base font-medium text-gray-900">{siniestro.poliza.vigencia}</p>
              </div>
              <div className="pt-3 border-t border-gray-100">
                {siniestro.poliza.vehiculo ? (
                  <>
                    <p className="text-sm text-gray-600">Vehículo Asegurado</p>
                    <p className="text-base font-medium text-gray-900">
                      {siniestro.poliza.vehiculo.marca} {siniestro.poliza.vehiculo.modelo} {siniestro.poliza.vehiculo.año}
                    </p>
                    <p className="text-sm text-gray-600">Placa: <span className="text-gray-900">{siniestro.poliza.vehiculo.placa}</span></p>
                  </>
                ) : siniestro.poliza.inmueble ? (
                  <>
                    <p className="text-sm text-gray-600">Inmueble Asegurado</p>
                    <p className="text-base font-medium text-gray-900">{siniestro.poliza.inmueble.tipo}</p>
                    <p className="text-sm text-gray-600">Dirección: <span className="text-gray-900">{siniestro.poliza.inmueble.direccion}</span></p>
                    <p className="text-sm text-gray-600">Valor del inmueble: <span className="text-gray-900">{siniestro.poliza.inmueble.valor}</span></p>
                  </>
                ) : null}
              </div>
            </div>
          </div>

          {/* Documentos Requeridos */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Documentos Requeridos</h2>
            <div className="space-y-4">
              {siniestro.documentos.map((doc, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <div 
                      className="flex items-center cursor-pointer hover:text-blue-600 transition-colors"
                      onClick={() => abrirModal(doc)}
                    >
                      {getDocumentIcon(doc.tipo)}
                      <span className="font-medium text-gray-900 hover:text-blue-600">{doc.tipo}</span>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      doc.estado === 'Completado' 
                      ? 'bg-green-100 text-green-800' 
                      : doc.estado === 'En proceso'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                    }`}>
                      {doc.estado}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {siniestro.proceso.estado === 'documentacion_pendiente' && doc.estado === 'Pendiente' && (
                      "Este documento es necesario para continuar con el proceso. Por favor, envíelo lo antes posible."
                    )}
                    {siniestro.proceso.estado === 'en_evaluacion' && doc.estado === 'En proceso' && (
                      "Documento en revisión por el equipo de evaluación. Tiempo estimado: 24-48 horas."
                    )}
                    {siniestro.proceso.estado === 'aprobado' && doc.estado === 'Completado' && (
                      "Documento verificado y aprobado por el equipo de evaluación."
                    )}
                    {siniestro.proceso.estado === 'pagado' && doc.estado === 'Completado' && (
                      "Documento archivado en expediente. Disponible para consulta."
                    )}
                    {siniestro.proceso.estado === 'rechazado' && (
                      doc.estado === 'Completado' 
                        ? 'Documento revisado. Se encontraron inconsistencias que llevaron al rechazo.'
                        : 'Documento no cumple con los requisitos establecidos.'
                    )}
                    {siniestro.proceso.estado === 'en_disputa' && (
                      "Documento bajo revisión especial por el departamento legal."
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* Modal para visualizar documentos */}
            {modalAbierto && documentoSeleccionado && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 max-w-3xl w-full mx-4 relative">
                  <button
                    onClick={cerrarModal}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h3 className="text-xl font-semibold mb-4">{documentoSeleccionado.tipo}</h3>
                  
                  {documentoSeleccionado.url ? (
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      {documentoSeleccionado.estado === 'Completado' ? (
                        <img
                          src={documentoSeleccionado.url}
                          alt={documentoSeleccionado.tipo}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                          <p>Documento pendiente de carga</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Vista previa no disponible</p>
                    </div>
                  )}
                  
                  <div className="mt-4 flex justify-end space-x-3">
                    {documentoSeleccionado.estado === 'Completado' && documentoSeleccionado.url && (
                      <button
                        onClick={() => {
                          if (typeof documentoSeleccionado.url === 'string') {
                            window.open(documentoSeleccionado.url, '_blank');
                          }
                        }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Descargar
                      </button>
                    )}
                    <button
                      onClick={cerrarModal}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Mensaje de estado general */}
            <div className="mt-6 p-4 rounded-lg bg-gray-50">
              <h3 className="font-medium text-gray-900 mb-2">Estado de la documentación</h3>
              <p className="text-sm text-gray-600">
                {siniestro.proceso.estado === 'documentacion_pendiente' && (
                  "Se requiere completar la documentación faltante para proceder con la evaluación del siniestro. La falta de documentos puede retrasar el proceso."
                )}
                {siniestro.proceso.estado === 'en_evaluacion' && (
                  "Los documentos están siendo revisados por nuestro equipo de evaluación. Este proceso puede tomar de 2 a 3 días hábiles."
                )}
                {siniestro.proceso.estado === 'aprobado' && (
                  "Toda la documentación ha sido verificada y aprobada. El caso procederá a la fase de pago."
                )}
                {siniestro.proceso.estado === 'pagado' && (
                  "Documentación completa y archivada. El siniestro ha sido liquidado satisfactoriamente."
                )}
                {siniestro.proceso.estado === 'rechazado' && (
                  "La documentación presentada no cumple con los requisitos o se encontraron inconsistencias que llevaron al rechazo del siniestro."
                )}
                {siniestro.proceso.estado === 'en_disputa' && (
                  "La documentación está siendo analizada por el departamento legal debido a inconsistencias detectadas."
                )}
                {siniestro.proceso.estado === 'reportado' && (
                  "Se ha iniciado el proceso de recopilación de documentos. Por favor, prepare la documentación requerida."
                )}
              </p>
            </div>
          </div>

          {/* Información del Ajustador */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Ajustador Asignado</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <FaUserMd className="text-gray-600 text-xl" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">{siniestro.ajustador.nombre}</p>
                  <p className="text-sm text-gray-600">{siniestro.ajustador.telefono}</p>
                  <p className="text-sm text-gray-600">{siniestro.ajustador.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
