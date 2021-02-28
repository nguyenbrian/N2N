import Fullpage from "../components/Fullpage";
import Layout from "../components/Layout";
import ResultsSection from "../components/ResultsSection";

export default function Results() {
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
