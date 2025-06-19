import './globals.css';

export const metadata = {
  title: 'Hotel Website',
  description: 'A modern hotel website design',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
