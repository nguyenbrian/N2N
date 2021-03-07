import Fullpage from "../components/Fullpage";
import Layout from "../components/Layout";
import Link from "next/link";
import ResultsSection from "../components/ResultsSection";
import { useTranslation } from "next-i18next";

export default function Mainpage() {
  const { t } = useTranslation(["index", "common", "results"]);

  return (
    <Layout>
      <Fullpage
        anchors={["home", "examples", "industries", "next-step", "contact"]}
        sectionsColor={["#1a1a1a", "#242424", "#1a1a1a", "#fff"]}
        scrollOverflow={true}
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
            <h1 className="uk-heading-medium">{t("section0-h1")}</h1>
            <h2>{t("section0-h2")}</h2>
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
            <h1>{t("section1-manufacturing")}</h1>
            <Link href="/industries/manufacturing">
              <button className="n2n-button uk-light uk-button uk-button-default uk-margin-large-top">
                {t("see-how")}
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
            <h1>{t("section1-utilities")}</h1>
            <Link href="/industries/utilities">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                {t("see-how")}
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
            <h1>{t("section1-oil-and-gas")}</h1>
            <Link href="/industries/oil-and-gas">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                {t("see-how")}
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
            <h1>{t("section1-banking")}</h1>
            <Link href="/industries/banking">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                {t("see-how")}
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
            <h1>{t("section1-healthcare")}</h1>
            <Link href="/industries/healthcare">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                {t("see-how")}
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
            <h1>{t("section1-defense")}</h1>
            <Link href="/industries/defense">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                {t("see-how")}
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
            <h1>{t("section1-retail")}</h1>
            <Link href="/industries/retail">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                {t("see-how")}
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
            <h1>{t("section1-transportation")}</h1>
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
            <h1>{t("section1-smart-cities")}</h1>
            <Link href="/industries/smart-cities">
              <button className="n2n-button uk-button uk-button-default uk-light uk-margin-large-top">
                {t("see-how")}
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
            <h1>{t("section1-education")}</h1>
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
                      <a>{t("common:manufacturing")}</a>
                    </li>
                    <li>
                      <a>{t("common:utilities")}</a>
                    </li>
                    <li>
                      <a>{t("common:oil-and-gas")}</a>
                    </li>
                    <li>
                      <a>{t("common:banking")}</a>
                    </li>
                    <li>
                      <a>{t("common:healthcare")}</a>
                    </li>
                    <li>
                      <a>{t("common:defense")}</a>
                    </li>
                    <li>
                      <a>{t("common:retail")}</a>
                    </li>
                    <li>
                      <a>{t("common:transportation")}</a>
                    </li>
                    <li>
                      <a>{t("common:smart-cities")}</a>
                    </li>
                    <li>
                      <a>{t("common:education")}</a>
                    </li>
                  </ul>
                </div>
                <div className="uk-width-expand@m">
                  <ul id="component-tab-left" className="uk-switcher">
                    <li>
                      <p>{t("section2-manufacturing")}</p>
                      <Link href="/industries/manufacturing">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          {t("more")}
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>{t("section2-utilities")}</p>
                      <Link href="/industries/utilities">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          {t("more")}
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>{t("section2-oil-and-gas")}</p>
                      <Link href="/industries/oil-and-gas">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          {t("more")}
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>{t("section2-banking")}</p>
                      <Link href="/industries/banking">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          {t("more")}
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>{t("section2-healthcare")}</p>
                      <Link href="/industries/healthcare">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          {t("more")}
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>{t("section2-defense")}</p>
                      <Link href="/industries/defense">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          {t("more")}
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>{t("section2-retail")}</p>
                      <Link href="/industries/retail">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          {t("more")}
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>{t("section2-transportation")}</p>
                      <Link href="/industries/transportation">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          {t("more")}
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>{t("section2-smart-cities")}</p>
                      <Link href="/industries/smart-cities">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          {t("more")}
                        </button>
                      </Link>
                    </li>
                    <li>
                      <p>{t("section2-education")}</p>
                      <Link href="/industries/education">
                        <button className="n2n-button uk-button uk-button-default uk-light">
                          {t("more")}
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
