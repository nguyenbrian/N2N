//import dynamic from "next/dynamic";
import Mainpage from "../components/Mainpage";

// const NoSSRComponent = dynamic(() => import("../components/Mainpage"), {
//   ssr: false,
// });

export default function Home() {
  return <Mainpage />;
}
