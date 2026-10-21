import { DM_Sans, Sora, Syne, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ThemeProviders from "@/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { ToastContainer } from "react-toastify";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const sora = Sora({
  subsets: ['latin']
})

export const dm_sans = DM_Sans({
  subsets: ['latin']
});

export const syne = Syne({
  subsets: ['latin']
});


export const metadata = {
  title: {
    default: "IdeaVault — Share, Discover & Explore Ideas",
    template: "%s | IdeaVault",
  },
  description:
    "IdeaVault is a platform to share your ideas, discover creative thoughts, and connect with others through meaningful discussions.",
  keywords: [
    "IdeaVault",
    "Share Ideas",
    "Discover Ideas",
    "Creative Ideas",
    "Idea Sharing Platform",
    "Innovation",
    "Community",
  ],
  applicationName: "IdeaVault",
  openGraph: {
    title: "IdeaVault — Where Ideas Come to Life",
    description:
      "Share your ideas, explore new perspectives, and connect with a community of creative thinkers.",
    siteName: "IdeaVault",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IdeaVault — Where Ideas Come to Life",
    description:
      "Discover, share, and discuss ideas with creative minds.",
  },
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", "bg-[#0b0d14]", "text-[#e8eaf0]", sora.className, "font-sans", geist.variable)}
    >
      <body className="bg-background text-foreground min-h-full flex flex-col">
        <ThemeProviders>
          <Navbar />

          <main>
            {children}
          </main>

          <ToastContainer
            position="top-center"
            autoClose={4000}
          />

          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}
