import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
          ></link>
        </Head>

        <body>
          <Main />

          <NextScript />

          <script
            data-cf-beacon='{"token": "f47ddfde9a164f9fabe6d0143a7f26be"}'
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
