import ReactFullpage from "@fullpage/react-fullpage";
import ContactDetails from "./ContactDetails";

export default function Fullpage(props) {
  return (
    <ReactFullpage
      // pluginWrapper={pluginWrapper}
      //fullpage options
      // licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={500} /* Options here */
      // scrollHorizontally={true} /* Because we are using the extension */
      // scrollHorizontallyKey={"YOUR KEY HERE"}
      scrollOverflow={props.scrollOverflow}
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
                <ContactDetails />
                <p style={{ display: "block" }} className="uk-margin-top">
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
