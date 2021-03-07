import IndustryPage from "../../components/IndustryPage";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "oil-and-gas"])),
  },
});

export default function OilAndGas() {
  const { t } = useTranslation("oil-and-gas");

  return (
    <IndustryPage
      title={t("title")}
      tagline={t("tagline")}
      src="/images/article_oil-and-gas.jpg"
    >
      <p>{t("p1")}</p>

      <p>{t("p2")}</p>

      <p>{t("p3")}</p>

      <p>{t("p4")}</p>
    </IndustryPage>
  );
}
