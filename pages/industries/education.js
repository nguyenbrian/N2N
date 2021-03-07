import IndustryPage from "../../components/IndustryPage";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "education"])),
  },
});

export default function Education() {
  const { t } = useTranslation("education");
  return (
    <IndustryPage
      src="/images/article_education.jpg"
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
