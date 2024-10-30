import localFont from "next/font/local";
import "./globals.css";
import DrawerMenu from "./components/DrawerMenu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "My Stery",
  description: "Welcome To our site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="wireframe">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DrawerMenu />
        {children}
      </body>
    </html>
  );
}
