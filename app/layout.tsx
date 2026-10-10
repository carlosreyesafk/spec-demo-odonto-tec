export const metadata = {
  title: 'Odonto-Tec | Centro odontológico especializado',
  description: 'Odonto-Tec es un centro odontológico con 3 sucursales en Santo Domingo: Arroyo Hondo, Naco y Haina. Reserva tu cita por WhatsApp con un clic.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
