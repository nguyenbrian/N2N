import Layout from "../components/Layout";
import IndustriesCard from "../components/IndustriesCard";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default function Industries() {
  const { t } = useTranslation("common");
  return (
    <Layout>
      <div className="uk-padding">
        <h1 className="avoid-navbar">{t("industries")}</h1>
        <div
          className="uk-grid-small uk-grid-match uk-child-width-1-4@m uk-child-width-1-2@s uk-text-center"
          uk-grid="true"
        >
          <div>
            <IndustriesCard
              src="/images/article_manufacturing_thumb.jpg"
              title={t("manufacturing")}
              link="/industries/manufacturing"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_utilities_thumb.jpg"
              title={t("utilities")}
              link="/industries/utilities"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_oil-and-gas_thumb.jpg"
              title={t("oil-and-gas")}
              link="/industries/oil-and-gas"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_banking_thumb.jpg"
              title={t("banking")}
              link="/industries/banking"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_healthcare_thumb.jpg"
              title={t("healthcare")}
              link="/industries/healthcare"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_defense_thumb.jpg"
              title={t("defense")}
              link="/industries/defense"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_retail_thumb.jpg"
              title={t("retail")}
              link="/industries/retail"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_transport_thumb.jpg"
              title={t("transportation")}
              link="/industries/transportation"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_smart-cities_thumb.jpg"
              title={t("smart-cities")}
              link="/industries/smart-cities"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_education_thumb.jpg"
              title={t("education")}
              link="/industries/education"
              // body="message"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
