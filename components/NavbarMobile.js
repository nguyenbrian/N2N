import Link from "next/link";
import LanguageSelect from "./LanguageSelect";
import { useTranslation } from "next-i18next";

export default function NavbarMobile(props) {
  const { t } = useTranslation("common");

  return (
    //uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar"
    <div>
      <nav
        className="uk-navbar-container"
        uk-navbar="true"
        // uk-navbar="dropbar: true"
        style={{ position: "relative", zIndex: 980 }}
      >
        <div className="uk-navbar-left">
          <Link href="/">
            <a
              className="uk-navbar-item uk-logo"
              style={{
                fontSize: "18px",
                color: "#d72323",
              }}
            >
              <img
                height="50px"
                width="50px"
                src="/images/logo_navbar_icon.png"
                style={{ marginRight: "5px" }}
              />
              <p id="icon-text">N2N.ai</p>
            </a>
          </Link>
        </div>

        <div className="uk-navbar-right">
          <a
            className="uk-navbar-toggle"
            uk-navbar-toggle-icon="true"
            uk-toggle="target: #offcanvas-nav-primary"
          ></a>

          <div
            id="offcanvas-nav-primary"
            uk-offcanvas="overlay: true; flip: true"
          >
            <div className="uk-offcanvas-bar uk-flex uk-flex-column">
              {/* <Link href="/">
                <a
                  className="uk-navbar-item uk-logo"
                  style={{
                    fontSize: "18px",
                    color: "#d72323",
                  }}
                >
                  <img
                    height="50px"
                    width="50px"
                    src="/images/logo_navbar_icon.png"
                    style={{ marginRight: "5px" }}
                  />
                  <p id="icon-text">N2N.ai</p>
                </a>
              </Link> */}
              <button
                className="uk-offcanvas-close"
                type="button"
                uk-close="true"
              ></button>
              <ul
                className="uk-nav-primary uk-nav-center uk-nav-parent-icon uk-margin-auto-vertical"
                uk-nav="true"
              >
                <li>
                  <Link href="/enterprise-ai">
                    <a>{t("enterprise-ai")}</a>
                  </Link>
                </li>
                <li className="uk-parent">
                  <Link href="/industries">
                    <a>{t("industries")}</a>
                  </Link>
                  <ul className="uk-nav-sub">
                    <li>
                      <Link href="/industries/manufacturing">
                        <a>{t("manufacturing")}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/utilities">
                        <a>{t("utilities")}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/oil-and-gas">
                        <a>{t("oil-and-gas")}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/banking">
                        <a>{t("banking")}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/healthcare">
                        <a>{t("healthcare")}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/defense">
                        <a>{t("defense")}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/retail">
                        <a>{t("retail")}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/transportation">
                        <a>{t("transportation")}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/smart-cities">
                        <a>{t("smart-cities")}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/education">
                        <a>{t("education")}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries">
                        <a>{t("all")}</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/partners">
                    <a>{t("partners")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/careers">
                    <a>{t("careers")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/company">
                    <a>{t("company")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/results">
                    <button className="uk-button uk-button-default uk-dark n2n-button uk-margin-large-top">
                      {t("get-started")}
                    </button>
                  </Link>
                </li>
                <div className="uk-margin-top">
                  <LanguageSelect variant="dark" pos="top" offset="10" />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
