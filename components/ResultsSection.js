import ContactUs from "./ContactUs";

export default function ResultsSection(props) {
  return (
    <div className="section frontpage notdark" id="section5">
      <div className="uk-padding">
        <h1 style={{ marginTop: "90px" }} className="uk-heading-medium">
          Results in weeks, not years
        </h1>
        <h2>Take the next step</h2>
        <div
          id="nextSteps"
          className="uk-child-width-1-1 uk-child-width-1-3@m uk-grid-small uk-grid-match uk-margin-large-top"
          uk-grid="true"
          style={{ maxWidth: "100%" }}
        >
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-box-shadow-hover-large">
              <h3 className="uk-card-title">Speak with an expert</h3>
              <p>
                Talk to one of our AI experts about what N2N.ai products can do.
              </p>
              <ContactUs />
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-box-shadow-hover-large">
              <h3 className="uk-card-title">Build a prototype</h3>
              <p>
                Be together with N2N.ai team in action to build your best
                prototype and full enterprise grade products while learn more
                about our applications and services.
              </p>
              <ContactUs />
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-box-shadow-hover-large">
              <h3 className="uk-card-title">Schedule a briefing</h3>
              <p>
                Meet the N2N.ai team in person and see what it's like to work
                with us.
              </p>
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
