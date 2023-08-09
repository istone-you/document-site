import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="jp">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.css"
        />
      </Head>
      <body className="font-roboto text-base bg-gray-100 py-20 sm:px-12 md:px-20 lg:px-24 xl:px-96">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
