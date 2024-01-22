import Document, { Head, Html, Main, NextScript } from "next/document";
import type { DocumentContext } from "next/document";
import { cache, createStylesServer, ServerStyles } from "@ui/theme";

// optional: you can provide your cache as a first argument in createStylesServer function
const stylesServer = createStylesServer(cache);

class DocumentPage extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    // Add your app specific logic here

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
          key="styles"
        />,
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocumentPage;
