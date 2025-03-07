import { Tajawal } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Nav from "@/components/nav";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Lexnes ai",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Tajawal({
  display: "swap",
  subsets: ["arabic"],
  weight: ["400"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-primary-foreground text-foreground ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col justify-center items-center w-full ">
            <div className="w-full flex flex-col justify-normal items-center max-w-screen-xl min-h-screen p-3">
              <Nav />
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
