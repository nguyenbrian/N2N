import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>N2N.ai - Enterprise AI</title>
      </Head>
      <main>
        <Navbar />
        {props.children}
      </main>
    </div>
  );
}
