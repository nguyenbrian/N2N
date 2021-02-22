import Layout from "../../components/Layout";

export default function Transportation() {
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
                Transportation
              </a>
            </h1>

            <div className="uk-inline">
              <img src="/images/article_transport.jpg" alt="" />
              <div className="uk-overlay-primary uk-position-cover"></div>
              <div className="uk-overlay uk-position-bottom uk-light">
                <p className="uk-text-lead">tagline</p>
              </div>
            </div>
            <p>text</p>
          </article>
        </div>
      </div>
    </Layout>
  );
}
