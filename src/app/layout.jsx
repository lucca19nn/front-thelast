import Header from './components/Header/Header'; 
import './globals.css';

export const metadata = {
  title: 'The Last of Us Fan Site',
  description: 'Criado com Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}