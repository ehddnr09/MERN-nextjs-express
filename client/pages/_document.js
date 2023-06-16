import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  const API_KEY = ''
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src="https://maps.googleapis.com/maps/api/js?key={API_KEY}"
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
