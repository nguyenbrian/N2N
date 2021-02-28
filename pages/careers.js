import Layout from "../components/Layout";
import Fullpage from "../components/Fullpage";
import HalfImage from "../components/HalfImage";

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
          <HalfImage variant="left" src="images/careers_1.jpg">
            <h1>Career Opportunities</h1>
            <p>There are currently no jobs available.</p>
          </HalfImage>
        </div>
      </Fullpage>
    </Layout>
  );
}
