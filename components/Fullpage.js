import ReactFullpage from "@fullpage/react-fullpage";

export default function Fullpage(props) {
  return (
    <ReactFullpage
      // pluginWrapper={pluginWrapper}
      //fullpage options
      // licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={600} /* Options here */
      // scrollHorizontally={true} /* Because we are using the extension */
      // scrollHorizontallyKey={"YOUR KEY HERE"}
      anchors={props.anchors !== undefined ? props.anchors : []}
      sectionsColor={props.sectionsColor}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {props.children}
            <div
              style={{ backgroundColor: "#1a1a1a" }}
              className="section fp-auto-height"
              id="section-footer"
            >
              <div className="uk-light uk-padding" style={{ height: "315px" }}>
                <h1>Contact</h1>
                <p className="uk-margin-remove">
                  <span
                    className="uk-margin-small-right"
                    uk-icon="icon: mail"
                  ></span>{" "}
                  contact@n2n.ai
                </p>
                <p className="uk-margin-remove">
                  <span
                    className="uk-margin-small-right"
                    uk-icon="icon: receiver"
                  ></span>{" "}
                  +61 414 151 151
                </p>

                <p className="uk-margin-top">
                  © 2021 N2N AI Pty Ltd. All Rights Reserved.
                </p>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
