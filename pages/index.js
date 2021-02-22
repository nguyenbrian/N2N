import Head from "next/head";
import styles from "../styles/Home.module.css";
import Fullpage from "../components/Fullpage";
import Layout from "../components/Layout";
import Link from "next/link";
import ResultsSection from "../components/ResultsSection";

export default function Home() {
  return (
    <Layout>
      <Fullpage
        anchors={["home", "examples", "industries", "next-step"]}
        sectionsColor={["#1a1a1a", "#242424", "#1a1a1a", "#fff"]}
      >
        <div
          style={{
            backgroundImage: `url(/images/frontpage.jpg)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="section frontpage uk-background-blend-hard-light"
          id="section0"
        >
          <div className="uk-padding">
            <h1 className="uk-heading-medium">
              This is Complete Enterprise AI.
            </h1>
            <h2>Transforming your future business. Now.</h2>
          </div>
        </div>
        <div className="section frontpage uk-light" id="section2">
          <div
            style={{
              backgroundImage: `url(/images/frontpage-manufacturing.jpg)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="slide uk-padding-large"
            id="slide1"
          >
            <h1>
              Manufacturing: AI – The driving force of your industry digital
              transformation
            </h1>
            <Link href="/industries/manufacturing">
              <button className="n2n-button uk-light uk-button uk-button-default uk-margin-large-top">
                See how
              </button>
            </Link>
          </div>
          <div
            style={{
              backgroundImage: `url(/images/frontpage-utilities.jpg)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="slide"
            id="slide2"
          >
            <h1>Utilities tagline</h1>
            <Link href="/industries/utilities">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                See how
              </button>
            </Link>
          </div>
          <div
            style={{
              backgroundImage: `url(/images/frontpage-oil.jpg)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="slide"
            id="slide3"
          >
            <h1>Oil and Gas tagline</h1>
            <Link href="/industries/oil-and-gas">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                See how
              </button>
            </Link>
          </div>
          <div
            style={{
              backgroundImage: `url(/images/frontpage-banking.jpg)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="slide"
            id="slide4"
          >
            <h1>Banking tagline</h1>
            <Link href="/industries/banking">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                See how
              </button>
            </Link>
          </div>
          <div
            style={{
              backgroundImage: `url(/images/frontpage-healthcare.jpg)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="slide"
            id="slide5"
          >
            <h1>Healthcare tagline</h1>
            <Link href="/industries/healthcare">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                See how
              </button>
            </Link>
          </div>
          <div
            style={{
              backgroundImage: `url(/images/frontpage-defense.jpg)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="slide"
            id="slide6"
          >
            <h1>Defense tagline</h1>
            <Link href="/industries/defense">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                See how
              </button>
            </Link>
          </div>
          <div
            style={{
              backgroundImage: `url(/images/frontpage-retail.jpg)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="slide"
            id="slide7"
          >
            <h1>Retail tagline</h1>
            <Link href="/industries/retail">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                See how
              </button>
            </Link>
          </div>
          <div
            style={{
              backgroundImage: `url(/images/frontpage-transport.jpg)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="slide"
            id="slide8"
          >
            <h1>Transportation tagline</h1>
            <Link href="/industries/transportation">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                See how
              </button>
            </Link>
          </div>
          <div
            style={{
              backgroundImage: `url(/images/frontpage-cities.jpg)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="slide"
            id="slide9"
          >
            <h1>Smart cities tagline</h1>
            <Link href="/industries/smart-cities">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                See how
              </button>
            </Link>
          </div>
          <div
            style={{
              backgroundImage: `url(/images/frontpage-education.jpg)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="slide"
            id="slide10"
          >
            <h1>Education tagline</h1>
            <Link href="/industries/education">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                See how
              </button>
            </Link>
          </div>
        </div>
        <div className="section frontpage" id="section4">
          <div id="n2n-switcher">
            <div
              className="uk-light uk-padding-large"
              uk-grid="true"
              style={{ margin: "0 auto" }} //width: "500px",
            >
              <div className="uk-width-auto@m">
                <ul
                  className="uk-tab-left n2n-tab"
                  uk-tab="connect: #component-tab-left; animation: uk-animation-fade"
                >
                  <li>
                    <a>Manufacturing</a>
                  </li>
                  <li>
                    <a>Utilities</a>
                  </li>
                  <li>
                    <a>Oil & Gas</a>
                  </li>
                  <li>
                    <a>Banking</a>
                  </li>
                  <li>
                    <a>Healthcare</a>
                  </li>
                  <li>
                    <a>Defense</a>
                  </li>
                  <li>
                    <a>Retail</a>
                  </li>
                  <li>
                    <a>Transportation</a>
                  </li>
                  <li>
                    <a>Smart Cities</a>
                  </li>
                  <li>
                    <a>Education</a>
                  </li>
                </ul>
              </div>
              <div className="uk-width-expand@m">
                <ul id="component-tab-left" className="uk-switcher">
                  <li>
                    <p>
                      RW: One system, five steps, 23 seconds to action. This
                      used to take over a day. We have now collapsed all that
                      heavy lifting into the application.
                    </p>
                    <Link href="/industries/manufacturing">
                      <button className="n2n-button uk-button uk-button-default uk-light">
                        Explore manufacturing
                      </button>
                    </Link>
                  </li>
                  <li>
                    <p>
                      RW: If we can predict where a failure might be and prevent
                      an incident from occurring, that's the best thing you can
                      do from a utility perspective.
                    </p>
                    <Link href="/industries/utilities">
                      <button className="n2n-button uk-button uk-button-default uk-light">
                        Explore utilities
                      </button>
                    </Link>
                  </li>
                  <li>
                    <p>
                      RW: The combination of our data science expertise and the
                      software development expertise that N2N.ai brings is
                      really powerful.
                    </p>
                    <Link href="/industries/oil-and-gas">
                      <button className="n2n-button uk-button uk-button-default uk-light">
                        Explore oil & gas
                      </button>
                    </Link>
                  </li>
                  <li>
                    <p>
                      RW: We see N2N.ai as the missing link in deploying
                      end-user applications in data science.
                    </p>
                    <Link href="/industries/banking">
                      <button className="n2n-button uk-button uk-button-default uk-light">
                        Explore banking
                      </button>
                    </Link>
                  </li>
                  <li>
                    <p>
                      RW: With AI and ML coming online and the volume of data
                      that's coming off the various intelligence feeds and from
                      the battlefield, we are trying to make sense of that. And
                      N2N.ai has been a great partner in that endeavor.
                    </p>
                    <Link href="/industries/healthcare">
                      <button className="n2n-button uk-button uk-button-default uk-light">
                        Explore healthcare
                      </button>
                    </Link>
                  </li>
                  <li>
                    <p>
                      RW: On the one hand it’s very much about dollars and ROI,
                      but on the other we are really focused on customer
                      satisfaction.
                    </p>
                    <Link href="/industries/defense">
                      <button className="n2n-button uk-button uk-button-default uk-light">
                        Explore defense
                      </button>
                    </Link>
                  </li>
                  <li>
                    <p>
                      RW: The N2N AI Suite is an ideal fit for the incessantly
                      data-driven retail sector.
                    </p>
                    <Link href="/industries/retail">
                      <button className="n2n-button uk-button uk-button-default uk-light">
                        Explore Retail
                      </button>
                    </Link>
                  </li>
                  <li>
                    <p>
                      RW: When comparing N2N AI Suite to a competitive platform,
                      we realized 26x savings in delivery and huge benefits from
                      a cost and quality stand-point.
                    </p>
                    <Link href="/industries/transportation">
                      <button className="n2n-button uk-button uk-button-default uk-light">
                        Explore transportation
                      </button>
                    </Link>
                  </li>
                  <li>
                    <p>
                      RW: ENGIE is looking to provide a zero-carbon future. The
                      N2N AI Suite is important because it helps us build
                      applications faster.
                    </p>
                    <Link href="/industries/smart-cities">
                      <button className="n2n-button uk-button uk-button-default uk-light">
                        Explore smart cities
                      </button>
                    </Link>
                  </li>
                  <li>
                    <p>
                      RW: What predictive AI allows you to do is get ahead of
                      the curve.
                    </p>
                    <Link href="/industries/education">
                      <button className="n2n-button uk-button uk-button-default uk-light">
                        Explore education
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ResultsSection />
      </Fullpage>
    </Layout>
  );
}
