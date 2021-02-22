import Layout from "../../components/Layout";

export default function Utilities() {
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
                Utilities
              </a>
            </h1>

            <div className="uk-inline">
              <img src="/images/article_utilities.jpg" alt="" />
              <div className="uk-overlay-primary uk-position-cover"></div>
              <div className="uk-overlay uk-position-bottom uk-light">
                <p className="uk-text-lead">
                  Using AI to accelerate Digital Transformation at Utilities
                </p>
              </div>
            </div>

            <p>
              Digital transformation in the utilities sector is the process of
              adopting new digital ways of working, often with a business goal
              for utilities to reinvent themselves. Common business goals
              include improved interactions with customers, more streamlined
              operations, greater efficiencies, and hopes of triggering new
              business models.
            </p>

            <b>Business is benefit of digital transformation in utilities:</b>
            <p>
              Although transformation has been slow to arrive for the utility
              sector, those companies that do implement digital technologies and
              adopt news ways of working can benefit greatly. Utility executives
              using expert systems based on Artificial Intelligence (AI), for
              example, can gain new business insights and optimize processes by
              analyzing large data sets quickly. Safety, regulatory and
              compliance-based systems can be improved by helping employees
              better monitor and control policies. Meanwhile and of significant
              importance, digital transformation can help utilities improve
              customer service operations and explore new business models. This
              can enhance customer satisfaction, reduce churn and lead to new
              products and services.
            </p>
          </article>
        </div>
      </div>
    </Layout>
  );
}
