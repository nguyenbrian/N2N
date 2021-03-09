import IndustryPage from "../../components/IndustryPage";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "smart-cities"])),
  },
});

export default function SmartCities() {
  const { t } = useTranslation("smart-cities");
  return (
    <IndustryPage
      src="/images/article_smart-cities.jpg"
      title={t("title")}
      tagline={t("tagline")}
    >
      <p className="uk-text-lead">{t("lead")}</p>
      <p>{t("p1")}</p>
      <p>{t("p2")}</p>
      <p>{t("p3")}</p>
      <p>{t("p4")}</p>
    </IndustryPage>
  );
}
