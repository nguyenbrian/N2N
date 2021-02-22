import Layout from "../../components/Layout";

export default function Retail() {
  return (
    <Layout>
      <div className="uk-padding">
        <div
          style={{ margin: "0 auto" }}
          className="uk-width-2xlarge uk-card uk-card-large uk-card-default uk-card-large uk-card-body"
        >
          <article className="uk-article">
            <h1 className="uk-article-title">
              <a className="uk-link-reset" href="">
                Retail
              </a>
            </h1>

            <div className="uk-inline">
              <img src="/images/article_retail.jpg" alt="" />
              <div className="uk-overlay-primary uk-position-cover"></div>
              <div className="uk-overlay uk-position-bottom uk-light">
                <p className="uk-text-lead">
                  Artificial intelligence in retail: Scale at speed
                </p>
              </div>
            </div>
            <p>
              Transformation in retail was already underway before the pandemic
              and is now accelerating, powered by data and AI. The good news is
              that retailers can now access the innovation, skills and solutions
              required to fully embrace AI responsibly across the enterprise to
              create value and fuel profitability.
            </p>
            <p>
              We are reaching the peak of the hype curve with artificial
              intelligence (AI) in retail. The vast majority of retailers agree
              it will continue to transform the retail industry and redefine
              financial and operational benchmarks for success. The competitive
              landscape is shifting and it’s no longer about just pursuing
              AI—it’s about being among the first to adopt AI at scale to reach
              unprecedented levels of personalization, precision and
              profitability.
            </p>
            <p>
              Artificial intelligence with practical, everyday applications is
              no longer the stuff of science fiction. AI is already being
              employed by thousands of businesses of all sizes today to help
              them do business faster and less expensively or to develop an edge
              over the competition.
            </p>
            <p>
              Most people don’t think about AI when they talk about the “digital
              transformation” of the retail industry. The first things that come
              to mind for most people are robots replacing workers and the
              efficiencies derived from a universally available internet
              together with the ubiquity and sophistication of modern database
              systems. But sophisticated AI systems are no longer limited to the
              labs of academia or high-tech giants like IBM and Google. A wide
              variety of purpose-built AI technologies, provided by company
              likes N2N.ai, are available today to “rent” or buy, including a
              growing number of “machine learning systems” that help retailers
              improve their operations and better understand customer behaviours
              in order to improve their marketing efforts.
            </p>
          </article>
        </div>
      </div>
    </Layout>
  );
}
