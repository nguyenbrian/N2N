import Layout from "../../components/Layout";

export default function Banking() {
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
                Banking
              </a>
            </h1>

            <div className="uk-inline">
              <img src="/images/article_banking.jpg" alt="" />
              <div className="uk-overlay-primary uk-position-cover"></div>
              <div className="uk-overlay uk-position-bottom uk-light">
                <p className="uk-text-lead">
                  AI-bank of the future: How can banks meet the AI challenge?
                </p>
              </div>
            </div>

            <p>
              Artificial intelligence technologies are increasingly integral to
              the world we live in, and banks need to deploy these technologies
              at scale to remain relevant. For many banks, ensuring adoption of
              AI technologies across the enterprise is no longer a choice, but a
              strategic imperative. Success requires a holistic transformation
              spanning multiple layers of the organization.
            </p>

            <p>
              Digital transformation is the process of integrating digital
              technologies into all aspects of a business to meet the market and
              changing business requirements. It aims to increase the
              effectiveness of business operations and customer relations. To
              achieve these goals, organizations need to update their systems,
              processes, organizations and culture.
            </p>

            <p>
              Digital transformation in banking requires a shift to online and
              digital services as well as a change in backend processes to
              promote digitization and automation. To compete with digital
              natives, banks should provide an end-to-end digital experience to
              their customers by integrating necessary technologies.
            </p>

            <p>
              Unlike industries like healthcare, banking and financial services
              mostly deal with structured quantitative data which makes it
              easier to digitize and automate processes. This is a double-edged
              sword: Financial services institutions can have more effective
              digital transformation initiatives compared to other industries;
              however, it is also easier for attackers to launch digital native
              financial institutions.
            </p>

            <p>
              Given the numerous tech giants and fintech companies encroaching
              on their business, banks need to ramp up their digital
              transformation efforts and adopt technologies such as machine
              learning, automation and blockchain. N2N.ai has answered all
              relevant questions on digital transformation in banking. 
            </p>
          </article>
        </div>
      </div>
    </Layout>
  );
}
