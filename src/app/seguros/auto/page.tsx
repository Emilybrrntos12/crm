export default function AutoSegurosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Planes de Seguro de Auto</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Plan Básico */}
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Plan Básico</h2>
          <p className="text-gray-600 mb-4">Cobertura mínima para cumplir con los requisitos legales.</p>
          <p className="text-2xl font-bold text-gray-800 mb-4">$500/mes</p>
          <ul className="text-left text-gray-600 mb-4">
            <li>- Responsabilidad civil</li>
            <li>- Asistencia vial básica</li>
            <li>- Cobertura limitada en daños a terceros</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Contratar</button>
        </div>

        {/* Plan Estandar */}
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Plan Estandar</h2>
          <p className="text-gray-600 mb-4">Cobertura completa con beneficios adicionales.</p>
          <p className="text-2xl font-bold text-gray-800 mb-4">$800/mes</p>
          <ul className="text-left text-gray-600 mb-4">
            <li>- Responsabilidad civil</li>
            <li>- Asistencia vial completa</li>
            <li>- Cobertura en daños a terceros y robo</li>
            <li>- Protección contra desastres naturales</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Contratar</button>
        </div>

        {/* Plan Premium */}
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Plan Premium</h2>
          <p className="text-gray-600 mb-4">Cobertura total con servicios exclusivos.</p>
          <p className="text-2xl font-bold text-gray-800 mb-4">$1,200/mes</p>
          <ul className="text-left text-gray-600 mb-4">
            <li>- Responsabilidad civil</li>
            <li>- Asistencia vial VIP</li>
            <li>- Cobertura total en daños y robo</li>
            <li>- Vehículo de reemplazo</li>
            <li>- Protección internacional</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Contratar</button>
        </div>
      </div>
    </div>
  );
}