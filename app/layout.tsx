import type { Metadata } from 'next';
import { Inter, Exo_2 } from 'next/font/google';
import '../app/globals.css';
const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'BodySync App',
  description: 'Powered by FusionCore',
};

const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children, }: { children: React.ReactNode; }) {

  return (
    <html lang="en">
      <>
        <>
          <link rel="manifest" href="/manifest.json" crossOrigin="anonymous" />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/icons/icon-512x512.png" />
          <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
        </>
        <body className={`${inter.className} ${exo2.className} overflow-y-scroll scrollbar-hidden bg-cover bg-center bg-no-repeat bg-fixed text-white`}>

          <div className="flex flex-col min-h-screen">
            <div className="w-full max-w-md mx-auto px-4 pt-3 pb-16">
              {children}
            </div>
          </div>

        </body>
      </>
    </html>
  );
}
