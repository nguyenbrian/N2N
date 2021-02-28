import Layout from "../components/Layout";
//import Image from "next/image";
import Fullpage from "../components/Fullpage";
import HalfImage from "../components/HalfImage";

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
          <HalfImage variant="left" src="images/company.jpg">
            <h1>What we are</h1>
            <p>
              N2N.ai is a leading complete enterprise AI solutions and services
              provider for accelerating digital transformation. Founded in
              Sydney - Australia, N2N.ai provides industry-led comprehensive
              services to build enterprise-scale AI applications more
              efficiently and cost-effectively than alternative approaches.
            </p>
          </HalfImage>
        </div>
        <div className="section content" id="section2">
          <HalfImage variant="right" src="images/company2.jpg">
            <h1>Our mission</h1>
            <p>
              Our mission is to continuously innovate and commercialise complete
              enterprise AI solutions, products and services to industry
              partners worldwide. Working closely with world-class academic
              researchers, N2N.ai supports the value chain in any industry with
              prototype, configurable and scalable, high-value AI applications
              for predictive maintenance, fraud detection, sensor network
              health, supply network optimization, energy management, anti-money
              laundering and customer engagement.
            </p>
          </HalfImage>
        </div>
      </Fullpage>
    </Layout>
  );
}
