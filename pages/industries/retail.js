import IndustryPage from "../../components/IndustryPage";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "retail"])),
  },
});

export default function Retail() {
  const { t } = useTranslation("retail");
  return (
    <IndustryPage
      title={t("title")}
      tagline={t("tagline")}
      src="/images/article_retail.jpg"
    >
      <p>{t("p1")}</p>
      <p>{t("p2")}</p>
      <p>{t("p3")}</p>
    </IndustryPage>
  );
}
