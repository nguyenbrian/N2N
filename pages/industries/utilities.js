import IndustryPage from "../../components/IndustryPage";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "utilities"])),
  },
});

export default function Utilities() {
  const { t } = useTranslation("utilities");
  return (
    <IndustryPage
      title={t("title")}
      tagline={t("tagline")}
      src="/images/article_utilities.jpg"
    >
      <p>{t("p1")}</p>

      <b>{t("p2")}</b>
      <p>{t("p3")}</p>
    </IndustryPage>
  );
}
