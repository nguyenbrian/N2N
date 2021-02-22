import Head from "next/head";
import styles from "../styles/Home.module.css";
import Fullpage from "../components/Fullpage";
import Layout from "../components/Layout";
import Link from "next/link";
import ResultsSection from "../components/ResultsSection";
import dynamic from "next/dynamic";

const NoSSRComponent = dynamic(() => import("../components/Mainpage"), {
  ssr: false,
});

export default function Home() {
  return <NoSSRComponent />;
}
