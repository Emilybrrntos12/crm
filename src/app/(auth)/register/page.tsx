// src/app/(auth)/register/page.tsx
export default function RegisterPage() {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6">Crear Cuenta</h1>
          <form>
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Confirmar contraseña"
              className="w-full p-2 mb-4 border rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Registrarse
            </button>
          </form>
          
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              ¿Ya tienes cuenta?{' '}
              <a href="/login" className="text-blue-600 hover:underline">
                Inicia sesión
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }