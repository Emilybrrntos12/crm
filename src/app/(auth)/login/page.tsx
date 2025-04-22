// src/app/(auth)/login/page.tsx
export default function LoginPage() {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6">Iniciar Sesión</h1>
          <form>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full p-2 mb-4 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    ); 
  }


