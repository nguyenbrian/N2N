import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>N2N.ai - Enterprise AI</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d72323" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff"></meta>

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        />

        {/* <!-- UIkit CSS --> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/css/uikit.min.css"
        />

        {/* <!-- UIkit JS --> */}
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.7/dist/js/uikit-icons.min.js"></script>
      </Head>

      <main>
        <Navbar />
        {props.children}
      </main>
    </div>
  );
}
