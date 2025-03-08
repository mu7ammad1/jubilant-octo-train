import { Tajawal } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Nav from "@/components/nav";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Imagen Fly: Let Your Imagination Fly",
  description: "Create stunning images with Imagen Fly, the fastest AI image generator tool.",
  keywords: "AI image generator, creative AI, image creation tool",
  openGraph: {
    title: "Imagen Fly: Let Your Imagination Fly",
    description: "Unleash your creativity with AI-powered image generation.",
    images: ["/thumbnail.jpg"], // صورة افتراضية للمشاركة
  },
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
            <Nav />
            <div className="w-full flex flex-col justify-normal items-center max-w-screen-xl min-h-screen p-3">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
