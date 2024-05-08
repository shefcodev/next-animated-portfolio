import { Inter } from 'next/font/google';
import './globals.css';
import TransitionProvider from '../components/TransitionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shefco',
  description: 'Sherif Jimoh Portfoilio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}></body>
      <TransitionProvider>{children}</TransitionProvider>
    </html>
  );
}
