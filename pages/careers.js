import Layout from "../components/Layout";
import Fullpage from "../components/Fullpage";

export default function Careers() {
  return (
    <Layout>
      <Fullpage>
        <div className="section content" id="section1">
          <div
            className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
            style={{ boxShadow: "none" }}
            uk-grid="true"
          >
            <div className="n2n-border-bottom-left uk-flex-last@s uk-card-media-right uk-cover-container">
              <img src="images/company.jpg" alt="" uk-cover="true" />
              <canvas width="600" height="500"></canvas>
            </div>
            <div>
              <div className="uk-card-body uk-card-large">
                <h1>Careers</h1>
                <p>Careers</p>
              </div>
            </div>
          </div>
        </div>
      </Fullpage>
    </Layout>
  );
}
