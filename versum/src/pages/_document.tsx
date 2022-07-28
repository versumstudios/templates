/* eslint-disable react/no-danger */
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { getCssText } from '@styles/stitches';

class MyDocument extends Document {
  render() {
    const setInitialTheme = `function getTheme(){var e=window.localStorage.getItem("--versum-theme");if("system"!==e)return e}var theme=getTheme();theme&&(document.documentElement.dataset.theme=theme);`;

    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Material+Icons&display=swap"
            rel="stylesheet"
          />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
