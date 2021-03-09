import IndustryPage from "../../components/IndustryPage";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "defense"])),
  },
});

export default function Defense() {
  const { t } = useTranslation("defense");
  return (
    <IndustryPage
      src="/images/article_defense.jpg"
      title={t("title")}
      tagline={t("tagline")}
    >
      <p>{t("p1")}</p>
      <p>{t("p2")}</p>
      <p>{t("p3")}</p>
      <p>{t("p4")}</p>
    </IndustryPage>
  );
}
