import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "MightyWings Esports",
  description: "Official MightyWings Website"
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
