import Layout from "../components/Layout";
//import Image from "next/image";
import Fullpage from "../components/Fullpage";

export default function Company() {
  return (
    <Layout>
      <Fullpage scrollOverflow={true}>
        <div className="section" id="section0">
          <div
            style={{ alignItems: "flex-start" }}
            className="uk-flex uk-flex-center"
          >
            <img
              width="450px"
              height="450px"
              src="/images/logo_display.png"
              alt=""
            />
          </div>
        </div>
        <div className="section content" id="section1">
          <div
            className="avoid-navbar uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
            style={{ boxShadow: "none" }}
            uk-grid="true"
          >
            <div className="n2n-border-bottom-left uk-flex-last@s uk-card-media-right uk-cover-container">
              <img src="images/company.jpg" alt="" uk-cover="true" />
              <canvas width="600" height="500"></canvas>
            </div>
            <div>
              <div className="uk-card-body uk-card-large">
                <h1>What we are</h1>
                <p>
                  N2N.ai is a leading complete enterprise AI solutions and
                  services provider for accelerating digital transformation.
                  Founded in Sydney - Australia, N2N.ai provides industry-led
                  comprehensive services to build enterprise-scale AI
                  applications more efficiently and cost-effectively than
                  alternative approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section content" id="section2">
          <div
            className="avoid-navbar uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
            style={{ boxShadow: "none" }}
            uk-grid="true"
          >
            <div className="n2n-border-top-right uk-card-media-left uk-cover-container">
              <img src="images/company2.jpg" alt="" uk-cover="true" />
              <canvas width="600" height="500"></canvas>
            </div>
            <div>
              <div className="uk-card-body uk-card-large">
                <h1>Our mission</h1>
                <p>
                  Our mission is to continuously innovate and commercialise
                  complete enterprise AI solutions, products and services to
                  industry partners worldwide. Working closely with world-class
                  academic researchers, N2N.ai supports the value chain in any
                  industry with prototype, configurable and scalable, high-value
                  AI applications for predictive maintenance, fraud detection,
                  sensor network health, supply network optimization, energy
                  management, anti-money laundering and customer engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fullpage>
    </Layout>
  );
}
