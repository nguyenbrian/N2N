import Layout from "../components/Layout";
import IndustriesCard from "../components/IndustriesCard";

export default function Industries() {
  return (
    <Layout>
      <div className="uk-padding">
        <h1>Industries</h1>
        <div
          className="uk-grid-small uk-grid-match uk-child-width-1-4@m uk-child-width-1-2@s uk-text-center"
          uk-grid="true"
        >
          <div>
            <IndustriesCard
              // src="/images/frontpage-manufacturing.jpg"
              title="Manufacturing"
              link="/industries/manufacturing"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              // src="/images/frontpage-utilities.jpg"
              title="Utilities"
              link="/industries/utilities"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              // src="/images/frontpage-oil.jpg"
              title="Oil & Gas"
              link="/industries/oil-and-gas"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              // src="/images/frontpage-banking.jpg"
              title="Banking"
              link="/industries/banking"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              // src="/images/frontpage-healthcare.jpg"
              title="Healthcare"
              link="/industries/healthcare"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              // src="/images/frontpage-defense.jpg"
              title="Defense"
              link="/industries/defense"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              // src="/images/frontpage-retail.jpg"
              title="Retail"
              link="/industries/retail"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              // src="/images/frontpage-transport.jpg"
              title="Transportation"
              link="/industries/transportation"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              // src="/images/frontpage-cities.jpg"
              title="Smart Cities"
              link="/industries/smart-cities"
              // body="message"
            />
          </div>
          <div>
            <IndustriesCard
              // src="/images/frontpage-education.jpg"
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
