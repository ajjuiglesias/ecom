import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="AI Headphones"
            content="A site for buying headphone at cheap price"
          />
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="author" content="Ajju Iglesias" />
          <meta
            name="keywords"
            content="NextJS,GFG,custom document next,custom app next"
          />
          <link
            rel="shortcut icon"
            href="android-chrome-512x512.png"
            type="image/png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
