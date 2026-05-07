import './globals.css';

export const metadata = {
  title: 'Everhaul Junk Removal | Los Angeles Hauling Services',
  description: 'Everhaul Solutions LLC provides junk removal, construction debris hauling, dirt hauling, concrete hauling, and dump truck services in Los Angeles and surrounding areas.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
