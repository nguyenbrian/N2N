import dynamic from "next/dynamic";

const NoSSRComponent = dynamic(() => import("../components/Mainpage"), {
  ssr: false,
});

export default function Home() {
  return <NoSSRComponent />;
}
