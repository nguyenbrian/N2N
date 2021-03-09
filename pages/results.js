import Fullpage from "../components/Fullpage";
import Layout from "../components/Layout";
import ResultsSection from "../components/ResultsSection";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "results"])),
  },
});

export default function Results() {
  const { t } = useTranslation(["results", "common"]);
  return (
    <Layout>
      <Fullpage
        scrollOverflow={true}
        anchors={["results", "contact"]}
        sectionsColor={["#fff"]}
      >
        <ResultsSection />
      </Fullpage>
    </Layout>
  );
}
