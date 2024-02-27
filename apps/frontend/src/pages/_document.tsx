import Document, { Head, Html, Main, NextScript } from "next/document";

class DocumentPage extends Document {
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
