import Link from "next/link";

export default function NavbarDesktop(props) {
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
                <a className="n2n-navbar">Enterprise AI</a>
              </Link>
            </li>
            <li>
              <Link href="/industries">
                <a className="n2n-navbar">Industries</a>
              </Link>
              <div className="uk-navbar-dropdown uk-navbar-dropdown-width-3">
                <p className="uk-nav-header uk-margin-remove">Industries</p>
                <div
                  className="uk-navbar-dropdown-grid uk-child-width-1-2"
                  uk-grid="true"
                >
                  <div>
                    <div>
                      <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li>
                          <Link href="/industries/manufacturing">
                            <a className="n2n-navbar">Manufacturing</a>
                          </Link>
                        </li>
                        {/* <li className="uk-nav-divider"></li> */}
                        <li>
                          <Link href="/industries/utilities">
                            <a className="n2n-navbar">Utilities</a>
                          </Link>
                        </li>
                        {/* <li className="uk-nav-divider"></li> */}
                        <li>
                          <Link href="/industries/oil-and-gas">
                            <a className="n2n-navbar">Oil & Gas</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/industries/banking">
                            <a className="n2n-navbar">Banking</a>
                          </Link>
                        </li>
                        {/* <li className="uk-nav-divider"></li> */}
                        <li>
                          <Link href="/industries/healthcare">
                            <a className="n2n-navbar">Healthcare</a>
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
                          <a className="n2n-navbar">Defense</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/industries/retail">
                          <a className="n2n-navbar">Retail</a>
                        </Link>
                      </li>
                      {/* <li className="uk-nav-divider"></li> */}
                      <li>
                        <Link href="/industries/transportation">
                          <a className="n2n-navbar">Transportation</a>
                        </Link>
                      </li>
                      {/* <li className="uk-nav-divider"></li> */}
                      <li>
                        <Link href="/industries/smart-cities">
                          <a className="n2n-navbar">Smart Cities</a>
                        </Link>
                      </li>
                      {/* <li className="uk-nav-divider"></li> */}
                      <li>
                        <Link href="/industries/education">
                          <a className="n2n-navbar">Education</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link href="/partners">
                <a className="n2n-navbar">Partners</a>
              </Link>
            </li>
            <li>
              <Link href="/careers">
                <a className="n2n-navbar">Careers</a>
              </Link>
            </li>
            <li>
              <Link href="/company">
                <a className="n2n-navbar">Company</a>
              </Link>
            </li>
            {/* <li>
                <a href="" uk-icon="search"></a>
              </li> */}
          </ul>

          <div className="uk-navbar-item">
            <Link href="/results">
              <button className="n2n-button uk-button uk-button-default">
                Get Started
              </button>
            </Link>
          </div>
          <div className="uk-navbar-item">
            <a uk-icon="world"></a>
            <div uk-dropdown="mode: click; pos: bottom-right; offset: 45">
              {/* mode: click; ; boundary: .uk-navbar-container; boundary-align: true*/}
              <p className="uk-margin-small-bottom">Choose a language</p>
              <select className="uk-select">
                <option>English</option>
                <option>Vietnamese</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
