import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Expires" content="-1" />
          <meta charSet="UTF-8" />
          <meta name="format-detection" content="telephone=no" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="" />
          <meta property="og:title" content="김반장웹" />
          <meta name="Description" content="김반장웹" />
          <meta name="Keywords" content="김반장웹,웹김반장" />
          <meta property="og:url" content="" />
          <meta property="og:description" content="김반장웹" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
