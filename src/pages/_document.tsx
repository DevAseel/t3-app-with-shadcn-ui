import { Html, Head, Main, NextScript } from "next/document";
import { fontSans } from "~/utils/fonts";
import { cn } from "~/utils/lib";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
