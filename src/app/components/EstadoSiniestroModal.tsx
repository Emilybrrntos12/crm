import { useState } from 'react';
import { 
  FaExclamationTriangle, 
  FaSearch, 
  FaFileAlt, 
  FaMoneyBillWave, 
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaUserShield,
  FaTimes 
} from 'react-icons/fa';

type EstadoInfo = {
  titulo: string;
  descripcion: string;
  siguientesPasos: string[];
  documentosRequeridos?: string[];
  tiempoEstimado?: string;
  icon: any;
  color: string;
};

const estadosInfo: { [key: string]: EstadoInfo } = {
  reportado: {
    titulo: "Siniestro Reportado",
    descripcion: "El siniestro ha sido reportado y está pendiente de asignación a un ajustador.",
    siguientesPasos: [
      "Asignación de ajustador",
      "Programación de primera evaluación",
      "Solicitud de documentación inicial"
    ],
    documentosRequeridos: [
      "Formato de declaración de siniestro",
      "Identificación oficial",
      "Póliza de seguro vigente"
    ],
    tiempoEstimado: "24-48 horas",
    icon: FaExclamationTriangle,
    color: "bg-blue-100 text-blue-800"
  },
  en_evaluacion: {
    titulo: "En Evaluación",
    descripcion: "El ajustador está evaluando los daños y circunstancias del siniestro.",
    siguientesPasos: [
      "Inspección física del bien asegurado",
      "Entrevista con los involucrados",
      "Elaboración del informe preliminar"
    ],
    tiempoEstimado: "3-5 días hábiles",
    icon: FaSearch,
    color: "bg-amber-100 text-amber-800"
  },
  documentacion_pendiente: {
    titulo: "Documentación Pendiente",
    descripcion: "Se requiere documentación adicional para continuar con el proceso.",
    siguientesPasos: [
      "Revisión de documentos faltantes",
      "Envío de documentación",
      "Validación de información"
    ],
    documentosRequeridos: [
      "Facturas originales",
      "Fotografías del daño",
      "Reporte de autoridades (si aplica)"
    ],
    tiempoEstimado: "Depende del asegurado",
    icon: FaFileAlt,
    color: "bg-orange-100 text-orange-800"
  },
  aprobado: {
    titulo: "Aprobado",
    descripcion: "El siniestro ha sido aprobado y está en proceso de pago.",
    siguientesPasos: [
      "Generación de orden de pago",
      "Validación por tesorería",
      "Notificación al asegurado"
    ],
    tiempoEstimado: "3-5 días hábiles",
    icon: FaCheckCircle,
    color: "bg-purple-100 text-purple-800"
  },
  pagado: {
    titulo: "Pagado",
    descripcion: "La indemnización ha sido pagada al asegurado.",
    siguientesPasos: [
      "Confirmación de recepción del pago",
      "Encuesta de satisfacción",
      "Cierre del expediente"
    ],
    icon: FaMoneyBillWave,
    color: "bg-green-100 text-green-800"
  },
  rechazado: {
    titulo: "Rechazado",
    descripcion: "El siniestro ha sido rechazado por incumplimiento de condiciones.",
    siguientesPasos: [
      "Revisión de motivos de rechazo",
      "Período de apelación (15 días)",
      "Cierre del caso"
    ],
    icon: FaTimesCircle,
    color: "bg-red-100 text-red-800"
  },
  en_disputa: {
    titulo: "En Disputa",
    descripcion: "El caso está bajo investigación especial o en proceso de arbitraje.",
    siguientesPasos: [
      "Investigación detallada",
      "Recopilación de evidencias",
      "Proceso de arbitraje"
    ],
    tiempoEstimado: "Indeterminado",
    icon: FaUserShield,
    color: "bg-pink-100 text-pink-800"
  }
};

interface EstadoSiniestroModalProps {
  estado: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function EstadoSiniestroModal({ estado, isOpen, onClose }: EstadoSiniestroModalProps) {
  if (!isOpen) return null;

  const info = estadosInfo[estado];
  if (!info) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-xl bg-white">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${info.color}`}>
              <info.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{info.titulo}</h3>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4">
          <p className="text-gray-600 mb-4">{info.descripcion}</p>

          {info.tiempoEstimado && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-1">Tiempo Estimado</h4>
              <p className="text-sm text-gray-600">{info.tiempoEstimado}</p>
            </div>
          )}

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Siguientes Pasos</h4>
            <ul className="space-y-2">
              {info.siguientesPasos.map((paso, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <FaClock className="h-4 w-4 text-blue-500" />
                  {paso}
                </li>
              ))}
            </ul>
          </div>

          {info.documentosRequeridos && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Documentos Requeridos</h4>
              <ul className="space-y-2">
                {info.documentosRequeridos.map((doc, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <FaFileAlt className="h-4 w-4 text-blue-500" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
