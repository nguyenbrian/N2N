import Link from "next/link";

export default function NavbarMobile(props) {
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
                    <a>Enterprise AI</a>
                  </Link>
                </li>
                <li className="uk-parent">
                  <Link href="/industries">
                    <a>Industries</a>
                  </Link>
                  <ul className="uk-nav-sub">
                    <li>
                      <Link href="/industries/manufacturing">
                        <a>Manufacturing</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/utilities">
                        <a>Utilities</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/oil-and-gas">
                        <a>Oil & Gas</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/banking">
                        <a>Banking</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/healthcare">
                        <a>Healthcare</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/defense">
                        <a>Defence</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/retail">
                        <a>Retail</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/transportation">
                        <a>Transportation</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/smart-cities">
                        <a>Smart Cities</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/education">
                        <a>Education</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries">
                        <a>All</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/partners">
                    <a>Partners</a>
                  </Link>
                </li>
                <li>
                  <Link href="/careers">
                    <a>Careers</a>
                  </Link>
                </li>
                <li>
                  <Link href="/company">
                    <a>Company</a>
                  </Link>
                </li>
                <li>
                  <Link href="/results">
                    <button className="uk-button uk-button-default uk-dark n2n-button uk-margin-large-top">
                      Get started
                    </button>
                  </Link>
                </li>
                {/* <div className="uk-margin-top">
                  <select className="uk-select">
                    <option>English</option>
                    <option>Vietnamese</option>
                  </select>
                </div> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
