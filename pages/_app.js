import UIKit from "../components/UIKit";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }) => {
  return (
    <UIKit>
      <Component {...pageProps} />
    </UIKit>
  );
};

export default appWithTranslation(MyApp);
