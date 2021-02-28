//import dynamic from "next/dynamic";
import Mainpage from "../components/Mainpage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

// const NoSSRComponent = dynamic(() => import("../components/Mainpage"), {
//   ssr: false,
// });

export default function Home() {
  return <Mainpage />;
}
