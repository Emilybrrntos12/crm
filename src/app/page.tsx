import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">CRM Seguros</h1>
          <div className="flex space-x-4">
            <Link href="/login" className="hover:underline">Iniciar Sesión</Link>
            <Link href="/register" className="hover:underline">Registrarse</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Gestión Integral de Seguros</h2>
          <p className="text-xl">Administra clientes, pólizas, siniestros y más en un solo lugar.</p>
        </div>
      </header>

      {/* Módulos Principales */}
      <main className="container mx-auto py-12 px-4">
        <h3 className="text-2xl font-semibold mb-8 text-gray-800">Módulos</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tarjeta Clientes */}
          <ModuleCard 
            title="Clientes" 
            description="Gestión de información de clientes y contactos."
            icon="👥"
            href="/clientes"
          />
          
          {/* Tarjeta Pólizas */}
          <ModuleCard 
            title="Pólizas" 
            description="Administración de pólizas y renovaciones."
            icon="📄"
            href="/polizas"
          />
          
          {/* Tarjeta Siniestros */}
          <ModuleCard 
            title="Siniestros" 
            description="Seguimiento de siniestros y reclamos."
            icon="⚠️"
            href="/siniestros"
          />
          
          {/* Tarjeta Aseguradoras */}
          <ModuleCard 
            title="Aseguradoras" 
            description="Catálogo de aseguradoras y productos."
            icon="🏢"
            href="/aseguradoras"
          />
          
          {/* Tarjeta Pagos */}
          <ModuleCard 
            title="Pagos" 
            description="Registro y seguimiento de pagos."
            icon="💳"
            href="/pagos"
          />
          
          {/* Tarjeta Reportes */}
          <ModuleCard 
            title="Reportes" 
            description="Generación de reportes y análisis."
            icon="📊"
            href="/reportes"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} CRM Seguros. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

// Componente reutilizable para tarjetas de módulo
type ModuleCardProps = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

function ModuleCard({ title, description, icon, href }: ModuleCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200">
        <div className="text-4xl mb-4">{icon}</div>
        <h4 className="text-xl font-semibold mb-2 text-blue-800">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}