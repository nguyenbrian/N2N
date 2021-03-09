import Link from "next/link";
import LanguageSelect from "./LanguageSelect";
import { useTranslation } from "next-i18next";

export default function NavbarDesktop(props) {
  const { t } = useTranslation("common");

  return (
    //uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar"
    <div>
      <nav
        className="uk-navbar-container"
        uk-navbar="true"
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
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/enterprise-ai">
                <a className="n2n-navbar">{t("enterprise-ai")}</a>
              </Link>
            </li>
            <li>
              <Link href="/industries">
                <a className="n2n-navbar">{t("industries")}</a>
              </Link>
              <div className="uk-navbar-dropdown uk-navbar-dropdown-width-3">
                <p className="uk-nav-header uk-margin-remove">
                  {t("industries")}
                </p>
                <div
                  className="uk-navbar-dropdown-grid uk-child-width-1-2"
                  uk-grid="true"
                >
                  <div>
                    <div>
                      <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li>
                          <Link href="/industries/manufacturing">
                            <a className="n2n-navbar">{t("manufacturing")}</a>
                          </Link>
                        </li>
                        {/* <li className="uk-nav-divider"></li> */}
                        <li>
                          <Link href="/industries/utilities">
                            <a className="n2n-navbar">{t("utilities")}</a>
                          </Link>
                        </li>
                        {/* <li className="uk-nav-divider"></li> */}
                        <li>
                          <Link href="/industries/oil-and-gas">
                            <a className="n2n-navbar">{t("oil-and-gas")}</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/banking">
                            <a className="n2n-navbar">{t("banking")}</a>
                          </Link>
                        </li>
                        {/* <li className="uk-nav-divider"></li> */}
                        <li>
                          <Link href="/industries/healthcare">
                            <a className="n2n-navbar">{t("healthcare")}</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      {/* <li className="uk-nav-divider"></li> */}
                      <li>
                        <Link href="/industries/defense">
                          <a className="n2n-navbar">{t("defense")}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/retail">
                          <a className="n2n-navbar">{t("retail")}</a>
                        </Link>
                      </li>
                      {/* <li className="uk-nav-divider"></li> */}
                      <li>
                        <Link href="/industries/transportation">
                          <a className="n2n-navbar">{t("transportation")}</a>
                        </Link>
                      </li>
                      {/* <li className="uk-nav-divider"></li> */}
                      <li>
                        <Link href="/industries/smart-cities">
                          <a className="n2n-navbar">{t("smart-cities")}</a>
                        </Link>
                      </li>
                      {/* <li className="uk-nav-divider"></li> */}
                      <li>
                        <Link href="/industries/education">
                          <a className="n2n-navbar">{t("education")}</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link href="/partners">
                <a className="n2n-navbar">{t("partners")}</a>
              </Link>
            </li>
            <li>
              <Link href="/careers">
                <a className="n2n-navbar">{t("careers")}</a>
              </Link>
            </li>
            <li>
              <Link href="/company">
                <a className="n2n-navbar">{t("company")}</a>
              </Link>
            </li>
            {/* <li>
                <a href="" uk-icon="search"></a>
              </li> */}
          </ul>

          <div className="uk-navbar-item">
            <Link href="/results">
              <button className="n2n-button uk-button uk-button-default">
                {t("get-started")}
              </button>
            </Link>
          </div>
          <div className="uk-navbar-item">
            <LanguageSelect variant="light" pos="bottom-right" offset="45" />
          </div>
        </div>
      </nav>
    </div>
  );
}
