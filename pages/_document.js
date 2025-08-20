import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Nuvana" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Nuvana" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Cloudflare Turnstile - conditionally loaded */}
        {process.env.NEXT_PUBLIC_ENABLE_TURNSTILE === 'true' && (
          <script 
            src="https://challenges.cloudflare.com/turnstile/v0/api.js" 
            async 
            defer
          ></script>
        )}

        {/* Google Analytics & Google Ads with Consent Management */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-75Z7QBM99R"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Initialize with denied consent
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied'
            });
            
            gtag('config', 'G-75Z7QBM99R', {
              'anonymize_ip': true,
              'allow_google_signals': false,
              'allow_ad_personalization_signals': false
            });
            gtag('config', 'AW-16853281502');

            // Page view conversion event
            gtag('event', 'conversion', {'send_to': 'AW-16853281502/o2m1CPfAqKwaEN7VouQ-'});
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
