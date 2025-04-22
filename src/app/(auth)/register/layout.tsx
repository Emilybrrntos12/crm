// src/app/(auth)/register/layout.tsx
export default function RegisterLayout({
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