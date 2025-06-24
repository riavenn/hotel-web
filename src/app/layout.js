import './globals.css';
import Navbar from './navbar';

export const metadata = {
  title: 'Hotel Website',
  description: 'A modern hotel website design',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
