import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'SJF: The Last Process', description: 'An interactive RPG learning experience about CPU scheduling and AI.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
