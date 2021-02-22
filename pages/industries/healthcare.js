import Layout from "../../components/Layout";

export default function Healthcare() {
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
                Healthcare
              </a>
            </h1>

            <div className="uk-inline">
              <img src="/images/article_healthcare.jpg" alt="" />
              <div className="uk-overlay-primary uk-position-cover"></div>
              <div className="uk-overlay uk-position-bottom uk-light">
                <p className="uk-text-lead">
                  Transforming healthcare with AI: The impact on the workforce
                  and organizations
                </p>
              </div>
            </div>

            <p>
              Digital transformation is an ongoing process and new trends are
              emerging in the healthcare industry with each passing day. When
              you pursue digital transformation in healthcare, you need to think
              beyond the technology needed to drive innovation. Digital
              transformation in healthcare is a building block of a
              patient-focused approach to healthcare. It will help healthcare
              providers streamline operations, understand what the patient
              requires, build loyalty and trust and offer a better user
              experience.
            </p>

            <p>
              Artificial intelligence (AI) has the potential to transform how
              healthcare is delivered. A joint report with the European Union’s
              EIT Health explores how it can support improvements in care
              outcomes, patient experience and access to healthcare services. It
              can increase productivity and the efficiency of care delivery and
              allow healthcare systems to provide more and better care to more
              people. AI can help improve the experience of healthcare
              practitioners, enabling them to spend more time in direct patient
              care and reducing burnout.
            </p>

            <p>
              Healthcare providers all over the world are faced with a single
              challenge: the need to improve patient outcomes while containing
              costs. Drivers include an increasing demand for chronic disease
              management for an aging population, technological advancements and
              empowered patients taking control of their health experience. The
              digital transformation in healthcare, through the creation of a
              rich health data foundation and integration of technologies like
              the Internet of Things (IoT), advanced analytics, Machine Learning
              (ML) and Artificial Intelligence (AI), is recognized as a key
              component to tackle these challenges. It can lead to improvements
              in diagnostics, prevention and patient therapy, ultimately
              empowering care givers to use an evidence-based approach to
              improve clinical decisions. Real-time interactions allow a
              physician to monitor a patient ‘live’, instead of interactions
              once every few weeks. Operational intelligence ensures efficient
              utilization of healthcare resources and services provided, thereby
              optimizing costs. However, procedure-based payments, legacy
              systems, disparate data sources with the limited adoption of data
              standards, technical debt, data security and privacy concerns
              impede the efficient usage of health information to maximize value
              creation for all healthcare stakeholders. This has led to a highly
              regulated, constrained industry. Ultimately, the goal is to
              improve quality of life and saving people’s lives through the
              creation of the intelligent healthcare provider, fully enabled to
              deliver value-based healthcare and a seamless patient experience.
              Information technologies that enable this goal must be extensible,
              safe, reliable and affordable, and tailored to the digitalization
              maturity-level of the individual organization.
            </p>
          </article>
        </div>
      </div>
    </Layout>
  );
}
