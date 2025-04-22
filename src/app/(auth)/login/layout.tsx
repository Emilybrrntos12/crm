// src/app/(auth)/login/layout.tsx
export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="es">
        <body className="min-h-screen bg-gray-100">
          {children}
        </body>
      </html>
    );
  }