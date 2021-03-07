import IndustryPage from "../../components/IndustryPage";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "banking"])),
  },
});

export default function Banking() {
  const { t } = useTranslation("banking");

  return (
    <IndustryPage
      src="/images/article_banking.jpg"
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
