import Layout from "./Layout";
import Link from "next/link";
export default function IndustryPage(props) {
  return (
    <Layout>
      <div className="uk-padding">
        <div className="avoid-navbar">
          <Link href="/industries">
            <button
              className="uk-button uk-button-default uk-margin-bottom"
              type="button"
            >
              <span
                uk-icon="icon:  chevron-left"
                className="uk-margin-right"
              ></span>
              Explore industries
            </button>
          </Link>
          <div
            style={{ margin: "0 auto" }}
            className="uk-width-2xlarge uk-card uk-card-large uk-card-default uk-card-large uk-card-body"
          >
            <article className="uk-article">
              <h1 className="uk-article-title">
                <a className="uk-link-reset" href="">
                  {props.title}
                </a>
              </h1>

              <div className="uk-inline">
                <img src={props.src} alt="" />
                <div className="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-overlay uk-position-bottom uk-light">
                  <p className="uk-text-lead">{props.tagline}</p>
                </div>
              </div>
              {props.children}
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
}
