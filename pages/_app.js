import UIKit from "../components/UIKit";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UIKit>
      <Component {...pageProps} />
    </UIKit>
  );
}

export default MyApp;
