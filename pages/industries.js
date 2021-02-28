import Layout from "../components/Layout";
import IndustriesCard from "../components/IndustriesCard";

export default function Industries() {
  return (
    <Layout>
      <div className="uk-padding">
        <h1 className="avoid-navbar">Industries</h1>
        <div
          className="uk-grid-small uk-grid-match uk-child-width-1-4@m uk-child-width-1-2@s uk-text-center"
          uk-grid="true"
        >
          <div>
            <IndustriesCard
              src="/images/article_manufacturing_thumb.jpg"
              title="Manufacturing"
              link="/industries/manufacturing"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_utilities_thumb.jpg"
              title="Utilities"
              link="/industries/utilities"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_oil-and-gas_thumb.jpg"
              title="Oil & Gas"
              link="/industries/oil-and-gas"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_banking_thumb.jpg"
              title="Banking"
              link="/industries/banking"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_healthcare_thumb.jpg"
              title="Healthcare"
              link="/industries/healthcare"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_defense_thumb.jpg"
              title="Defense"
              link="/industries/defense"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_retail_thumb.jpg"
              title="Retail"
              link="/industries/retail"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_transport_thumb.jpg"
              title="Transportation"
              link="/industries/transportation"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_smart-cities_thumb.jpg"
              title="Smart Cities"
              link="/industries/smart-cities"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              src="/images/article_education_thumb.jpg"
              title="Education"
              link="/industries/education"
              // body="message"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
