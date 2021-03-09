import Fullpage from "../components/Fullpage";
import HalfImage from "../components/HalfImage";
import Layout from "../components/Layout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "enterprise-ai"])),
  },
});

export default function EnterpriseAI() {
  const { t } = useTranslation("enterprise-ai");

  return (
    <Layout>
      <Fullpage scrollOverflow={true}>
        <div className="section content" id="section0">
          <HalfImage variant="left" src="images/enterprise-ai.jpg">
            <h1 className="uk-heading-medium">{t("section0-h1")}</h1>
            <p>{t("section0-p")}</p>
          </HalfImage>
        </div>
        <div className="section content" id="section1">
          <HalfImage variant="right" src="images/enterprise-ai-experience.jpg">
            <h1>{t("section1-h1")}</h1>
            <p>{t("section1-p")}</p>
          </HalfImage>
        </div>

        <div className="section content" id="section2">
          <HalfImage variant="left" src="images/enterprise-ai-network.jpg">
            <h1>{t("section2-h1")}</h1>
            <p>{t("section2-p")}</p>
          </HalfImage>
        </div>
      </Fullpage>
      {/* <div className="uk-padding-large uk-padding-large-left uk-padding-large-right"></div> */}
    </Layout>
  );
}
