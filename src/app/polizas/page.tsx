"use client";
import { useState } from "react";
import {
  FaFileSignature,
  FaHome,
  FaSearch,
  FaFilter,
  FaDownload,
  FaEllipsisV,
} from "react-icons/fa";
import Link from "next/link";

export default function PolizasPage() {
  // Datos simulados
  const polizasData = [
    {
      id: "POL-2023-00158",
      cliente: "Juan López",
      correo: "juan@example.com",
      producto: "Auto Todo Riesgo",
      aseguradora: "Seguros Atlas",
      inicio: "01/01/2023",
      fin: "31/12/2023",
      prima: "$850.00",
      frecuencia: "Mensual",
      estado: "Activa",
      color: "green",
      iniciales: "JL",
    },
    {
      id: "POL-2023-00234",
      cliente: "María Pérez",
      correo: "maria@example.com",
      producto: "Vida Individual",
      aseguradora: "Mapfre",
      inicio: "-",
      fin: "-",
      prima: "$1,200.00",
      frecuencia: "Anual",
      estado: "Pendiente",
      color: "amber",
      iniciales: "MP",
    },
    {
      id: "POL-2022-00345",
      cliente: "Carlos Gómez",
      correo: "carlos@example.com",
      producto: "Hogar Completo",
      aseguradora: "AXA",
      inicio: "01/06/2022",
      fin: "31/05/2023",
      prima: "$620.00",
      frecuencia: "Trimestral",
      estado: "Vencida",
      color: "red",
      iniciales: "CG",
    },
    {
      id: "POL-2023-00456",
      cliente: "Ana Martínez",
      correo: "ana@example.com",
      producto: "Salud Premium",
      aseguradora: "Seguros Atlas",
      inicio: "01/03/2023",
      fin: "28/02/2024",
      prima: "$1,050.00",
      frecuencia: "Mensual",
      estado: "Suspendida",
      color: "orange",
      iniciales: "AM",
    },
    {
      id: "POL-2023-00567",
      cliente: "Roberto Sánchez",
      correo: "roberto@example.com",
      producto: "Auto Básico",
      aseguradora: "Mapfre",
      inicio: "15/02/2023",
      fin: "14/02/2024",
      prima: "$720.00",
      frecuencia: "Mensual",
      estado: "Siniestro",
      color: "purple",
      iniciales: "RS",
    },
  ];

  // Estados de filtros
  const [busqueda, setBusqueda] = useState("");
  const [aseguradora, setAseguradora] = useState("Todas las aseguradoras");
  const [estado, setEstado] = useState("Todos los estados");

  // Filtrado dinámico
  const polizasFiltradas = polizasData.filter((p) => {
    const coincideBusqueda =
      p.id.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.cliente.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.correo.toLowerCase().includes(busqueda.toLowerCase());

    const coincideAseguradora =
      aseguradora === "Todas las aseguradoras" || p.aseguradora === aseguradora;

    const coincideEstado =
      estado === "Todos los estados" || p.estado === estado;

    return coincideBusqueda && coincideAseguradora && coincideEstado;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header superior */}
      <div className="flex justify-between items-center mb-6">
        <Link href="/">
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition duration-200">
            <FaHome className="text-gray-600 h-5 w-5" />
          </button>
        </Link>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:bg-gray-50 text-gray-600">
            <FaDownload className="h-5 w-5" />
          </button>
          <Link href="/polizas/documentos">
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600">
              <FaEllipsisV className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>

      {/* Header principal */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            Administración de Pólizas
          </h1>
          <p className="text-gray-600 mt-1">
            Gestión integral de pólizas de seguros
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Link href="/polizas/nueva">
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm">
              <FaFileSignature />
              <span>Nueva Póliza</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Panel de filtros funcional */}
      <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Buscar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar póliza, cliente..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* Aseguradora */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaFilter className="text-gray-400" />
            </div>
            <select
              value={aseguradora}
              onChange={(e) => setAseguradora(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option>Todas las aseguradoras</option>
              <option>Seguros Atlas</option>
              <option>Mapfre</option>
              <option>AXA</option>
            </select>
          </div>

          {/* Estado */}
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className="block w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option>Todos los estados</option>
            <option>Activa</option>
            <option>Pendiente</option>
            <option>Vencida</option>
            <option>Suspendida</option>
            <option>Siniestro</option>
          </select>

          <button
            onClick={() => {
              setBusqueda("");
              setAseguradora("Todas las aseguradoras");
              setEstado("Todos los estados");
            }}
            className="px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2 text-sm"
          >
            <FaFilter />
            <span>Limpiar filtros</span>
          </button>
        </div>
      </div>

      {/* Tabla de resultados filtrados */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-5 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Listado de Pólizas
          </h2>
          <div className="text-sm text-gray-500">
            {polizasFiltradas.length > 0 ? (
              <>
                Mostrando{" "}
                <span className="font-medium text-gray-700">
                  {polizasFiltradas.length}
                </span>{" "}
                resultado(s)
              </>
            ) : (
              "No se encontraron pólizas"
            )}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  N° Póliza
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliente
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Producto
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vigencia
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prima
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {polizasFiltradas.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-blue-600 font-medium">
                    {p.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div
                        className={`h-9 w-9 rounded-full bg-${p.color}-100 flex items-center justify-center mr-3`}
                      >
                        <span
                          className={`text-${p.color}-600 font-medium text-xs`}
                        >
                          {p.iniciales}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {p.cliente}
                        </div>
                        <div className="text-xs text-gray-500">{p.correo}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{p.producto}</div>
                    <div className="text-xs text-gray-500">
                      {p.aseguradora}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{p.inicio}</div>
                    <div className="text-xs text-gray-500">{p.fin}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {p.prima}
                    </div>
                    <div className="text-xs text-gray-500">{p.frecuencia}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 inline-flex items-center text-xs font-semibold rounded-full bg-${p.color}-100 text-${p.color}-800`}
                    >
                      {p.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
