import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDYEJpjZ3ffc1V-G_252niqCqEa5f9QTL0"
          ></script>
        </Head>
        <body>
          <Main />
          <div id="backdrop-hook" />
          <div id="modal-hook" />
          <div id="drawer-hook" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
