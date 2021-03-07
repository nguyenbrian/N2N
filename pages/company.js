import Layout from "../components/Layout";
import Fullpage from "../components/Fullpage";
import HalfImage from "../components/HalfImage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "company"])),
  },
});

export default function Company() {
  const { t } = useTranslation("company");

  return (
    <Layout>
      <Fullpage scrollOverflow={true}>
        <div className="section" id="section0">
          <div
            style={{ alignItems: "flex-start" }}
            className="uk-flex uk-flex-center"
          >
            <img
              width="450px"
              height="450px"
              src="/images/logo_display.png"
              alt=""
            />
          </div>
        </div>
        <div className="section content" id="section1">
          <HalfImage variant="left" src="images/company.jpg">
            <h1>{t("section0-h1")}</h1>
            <p>{t("section0-p")}</p>
          </HalfImage>
        </div>
        <div className="section content" id="section2">
          <HalfImage variant="right" src="images/company2.jpg">
            <h1>{t("section1-h1")}</h1>
            <p>{t("section1-p")}</p>
          </HalfImage>
        </div>
      </Fullpage>
    </Layout>
  );
}
