import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={`${inter.className} bg-slate-100`}>
        <ChakraProvider>
          <NavBar/>
            {children}
          <Footer/>
        </ChakraProvider>
      </body>
    </html>
  );
}
