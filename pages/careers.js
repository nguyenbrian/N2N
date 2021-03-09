import Layout from "../components/Layout";
import Fullpage from "../components/Fullpage";
import HalfImage from "../components/HalfImage";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "careers"])),
  },
});

export default function Careers() {
  const { t } = useTranslation("careers");
  return (
    <Layout>
      <Fullpage>
        <div
          style={{
            backgroundImage: `url(/images/careers_2.jpg)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="section frontpage uk-background-blend-hard-light"
          id="section0"
        >
          <div className="uk-padding">
            <h1 className="uk-heading-medium">{t("section0-h1")}</h1>
            <h2>{t("section0-p")}</h2>
          </div>
        </div>
        <div className="section content" id="section1">
          <HalfImage variant="left" src="images/careers_1.jpg">
            <h1>{t("section1-h1")}</h1>
            <p>{t("section1-p")}</p>
          </HalfImage>
        </div>
      </Fullpage>
    </Layout>
  );
}
