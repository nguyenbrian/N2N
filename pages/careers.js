import Layout from "../components/Layout";
import Fullpage from "../components/Fullpage";

export default function Careers() {
  return (
    <Layout>
      <Fullpage>
        <div
          style={{
            backgroundImage: `url(/images/careers_2.jpg)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="section frontpage uk-background-blend-hard-light"
          id="section0"
        >
          <div className="uk-padding">
            <h1 className="uk-heading-medium">Careers</h1>
            <h2>
              Join us for endless inspiration of meaningful work in a talented
              team.
            </h2>
          </div>
        </div>
        <div className="section content" id="section1">
          <div
            className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
            style={{ boxShadow: "none" }}
            uk-grid="true"
          >
            <div className="n2n-border-bottom-left uk-card-media-left uk-cover-container">
              <img src="images/careers_1.jpg" alt="" uk-cover="true" />
              <canvas width="600" height="500"></canvas>
            </div>
            <div>
              <div className="uk-card-body uk-card-large">
                <h1>Career Opportunities</h1>
                <p>There are currently no jobs available.</p>
              </div>
            </div>
          </div>
        </div>
      </Fullpage>
    </Layout>
  );
}
