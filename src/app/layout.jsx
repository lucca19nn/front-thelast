import Header from "./components/header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header title="The Last of Us" />
        <main>{children}</main>
      </body>
    </html>
  );
}