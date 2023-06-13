import { Metadata } from "next"
import { siteConfig } from "~/config/site"
import { fontSans } from "~/utils/fonts"
import { cn } from "~/utils/lib"
import { SiteHeader } from "~/components/site-header"
import { TailwindIndicator } from "~/components/tailwind-indicator"
import { ThemeProvider } from "~/components/theme-provider"
import Head from "next/head"

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
    <Head>
      <title>Jikan</title>
      <meta name="description" content="Personal Time Tracking App."/>
    </Head>
        <div
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </div>
    </>
  )
}

export default RootLayout