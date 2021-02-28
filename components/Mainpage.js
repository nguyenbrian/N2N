import Fullpage from "../components/Fullpage";
import Layout from "../components/Layout";
import Link from "next/link";
import ResultsSection from "../components/ResultsSection";

export default function Mainpage() {
  return (
    <Layout>
      <Fullpage
        anchors={["home", "examples", "industries", "next-step", "contact"]}
        sectionsColor={["#1a1a1a", "#242424", "#1a1a1a", "#fff"]}
        scrollOverflow={true}
      >
        bankb
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
            className="slide"
            id="slide1"
          >
            <h1>
              The latest digital manufacturing trends are aimed at connecting
              physical and virtual factory environments to boost productivity,
              efficiency and profitability.
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
            <h1>Using AI to accelerate Digital Transformation at Utilities</h1>
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
            <h1>
              Overcoming Digitization Challenges in the Oil and Gas Industry -
              Oil and Gas Industry Transforming Itself with the Help of AI
            </h1>
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
            <h1>AI-bank of the future: How can banks meet the AI challenge?</h1>
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
            <h1>
              Transforming healthcare with AI: The impact on the workforce and
              organizations
            </h1>
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
            <h1>How AI and Robotics will disrupt the Defense industry?</h1>
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
            <h1>Artificial intelligence in retail: Scale at speed</h1>
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
            <h1>The Role of AI and Big Data in Modern-Day Logistics</h1>
            <Link href="/industries/transportation">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                See more
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
            <h1>How to embark on becoming a smart digital city of tomorrow</h1>
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
            <h1>
              Impact of Artificial Intelligence on the current education system
            </h1>
            <Link href="/industries/education">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                See more
              </button>
            </Link>
          </div>
        </div>
        <div className="section frontpage" id="section4">
          <div className="uk-flex uk-flex-center">
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
                        Evolution of the manufacturing industry can be seen with
                        the implementation of 
                        <b>Artificial Intelligence and Robotics</b>. This is to
                        minimize the human workforce while improve efficiency
                        and simplify the whole manufacturing system.
                      </p>
                      <Link href="/industries/manufacturing">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          More
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>
                        Digital transformation in the utilities sector is the
                        process of adopting new digital ways of working, often
                        with a business goal for utilities to reinvent
                        themselves.
                      </p>
                      <Link href="/industries/utilities">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          More
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>
                        In the oil and gas industry, digitalization is improving
                        project economics and streamlining operations, with AI
                        as the key for sustainable growth and security against
                        cyberthreats.
                      </p>
                      <Link href="/industries/oil-and-gas">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          More
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>
                        Artificial intelligence technologies are increasingly
                        integral to the world we live in, and banks need to
                        deploy these technologies at scale to remain relevant.
                      </p>
                      <Link href="/industries/banking">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          More
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>
                        Technology is transforming the way people bank, travel
                        and shop. But, it has yet to make significant inroads
                        into the healthcare industry.
                      </p>
                      <Link href="/industries/healthcare">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          More
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>
                        The rise of digital platforms is empowering the
                        military, enabling better continuity of operations and
                        bringing armed forces at a new level of combat
                        readiness.
                      </p>
                      <Link href="/industries/defense">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          More
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>
                        Transformation in retail was already underway before the
                        pandemic and is now accelerating, powered by data and
                        AI.
                      </p>
                      <Link href="/industries/retail">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          More
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>
                        Industry 4.0 - one of the biggest disruptors to
                        traditional freight and logistics, is transforming the
                        way in which the industry continues to do business.
                      </p>
                      <Link href="/industries/transportation">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          More
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>
                        The recent growth in digital technologies is enabling
                        cities to undergo transformations for streamlining smart
                        services and offering new products.
                      </p>
                      <Link href="/industries/smart-cities">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          More
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>
                        Educators from all grade-levels are coming to realize
                        the benefits of technology in the classroom.
                      </p>
                      <Link href="/industries/education">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          More
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ResultsSection />
      </Fullpage>
    </Layout>
  );
}
