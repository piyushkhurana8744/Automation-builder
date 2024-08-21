import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import {DM_Sans} from "next/font/google"
import {
  ClerkProvider,
} from '@clerk/nextjs'


// const inter = Inter({ subsets: ["latin"] });

const font = DM_Sans({subsets:['latin']})

export const metadata: Metadata = {
  title: "Fuzzie",
  description: "Automate your work with fuzzie",
};
console.log(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,"process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY")
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
    <html lang="en">
      <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        
        </body>
    </html>
    </ClerkProvider>
  );
}
