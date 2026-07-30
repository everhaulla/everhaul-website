import Script from "next/script";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18352022232"
        strategy="afterInteractive"
      />

      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18352022232');
        `}
      </Script>

      <Script id="google-ads-call-tracking" strategy="afterInteractive">
        {`
          gtag('config', 'AW-18352022232/2bUGCI3hq9kcENjF9q5E', {
            phone_conversion_number: '8185381072'
          });
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
