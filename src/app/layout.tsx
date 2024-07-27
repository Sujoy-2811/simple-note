import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
// import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/Nav";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer/Footer";
import { FloatingButton } from "@/components/FloatingButton";
// const inter = Inter({ subsets: ["latin"] });
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal,
  note,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
  note: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased p-2 sm:p-4 lg:p-8 sm:flex sm:flex-col  ",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {note}
          {modal}
          <Nav />
          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
