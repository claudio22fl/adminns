import "./globals.css";
import { Inter } from "next/font/google";
import FotterPage from "./component/layout/Footer";
import Sidebar from "./component/layout/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>mi app</title>
      </head>

      <body className="bg-gray-200" suppressHydrationWarning>
        <Sidebar />
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow relative flex ml-20">
            <div className="flex-grow flex flex-col">{children}</div>
          </div>
          <FotterPage />
        </div>
      </body>
    </html>
  );
}
