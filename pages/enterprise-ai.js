import Fullpage from "../components/Fullpage";
import Layout from "../components/Layout";

export default function EnterpriseAI() {
  return (
    <Layout>
      <Fullpage>
        <div className="section content" id="section0">
          <div
            className="avoid-navbar uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin"
            style={{ boxShadow: "none" }}
            uk-grid="true"
          >
            <div className="n2n-border-solid-bottom-left uk-flex-last@m uk-card-media-right uk-cover-container">
              <img src="images/enterprise-ai.jpg" alt="" uk-cover="true" />
              <canvas width="600" height="500"></canvas>
            </div>
            <div>
              <div className="uk-card-body uk-card-large">
                <h1 className="uk-heading-medium">
                  Together we will transform your business
                </h1>
                <p>
                  N2N.ai develops new applications for Healthcare and Well-being
                  in areas where AI technologies are ready to make an impact
                  such as IVF, radiology, pathology, and hospital operation. Our
                  next mission is to develop image processing and Digital Twins
                  solutions for several industries, including building and
                  constructing, mining, transports, logistics, oil and gas and
                  renewal energy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section content" id="section1">
          <div
            className="avoid-navbar uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin"
            style={{ boxShadow: "none" }}
            uk-grid="true"
          >
            <div className="n2n-border-solid-right uk-card-media-left uk-cover-container">
              <img
                src="images/enterprise-ai-experience.jpg"
                alt=""
                uk-cover="true"
              />
              <canvas width="600" height="500"></canvas>
            </div>
            <div>
              <div className="uk-card-body uk-card-large">
                <h1>Experience</h1>
                <p>
                  With deep understanding of AI innovation and trends in
                  Industry 4.0 Revolution, we have provided state-of-the-art
                  digital transformation consulting services to help clients
                  transform their businesses successfully into the future.
                  Stemming from our work, we have also identified increasing
                  requirements for transformative data analytics in order to
                  deliver better data-driven services and decision making for
                  operational efficiency and increased productivity that
                  combined with higher degree of automation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section content" id="section2">
          <div
            className="avoid-navbar uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@m uk-margin"
            style={{ boxShadow: "none" }}
            uk-grid="true"
          >
            <div className="n2n-border-solid-top-left uk-flex-last@m uk-card-media-right uk-cover-container">
              <img
                src="images/enterprise-ai-network.jpg"
                alt=""
                uk-cover="true"
              />
              <canvas width="600" height="500"></canvas>
            </div>
            <div>
              <div className="uk-card-body uk-card-large">
                <h1>Network</h1>
                <p>
                  N2N.ai is eager to work collaboratively with world-class
                  academic researchers and global industry partners to maximise
                  opportunities in this field. N2N.ai has already built an
                  extensive global network with strategic partners in Vietnam,
                  Singapore, Canada, US, Japan and Germany. Our strategic focus
                  aligns well with Advanced Manufacturing Growth Centre’s sector
                  competitiveness priorities, in particular robotics and
                  automated processes; digital design and rapid prototyping;
                  sensors and data analysis; translating ideas into products and
                  services; and visualisation and virtual reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fullpage>
      {/* <div className="uk-padding-large uk-padding-large-left uk-padding-large-right"></div> */}
    </Layout>
  );
}
