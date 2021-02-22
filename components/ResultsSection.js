export default function ResultsSection(props) {
  return (
    <div className="section frontpage notdark" id="section5">
      <div className="uk-padding">
        <h1 className="uk-heading-medium">
          Proven results in weeks, not years
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
              <a uk-icon="icon: arrow-right; ratio: 2"></a>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-box-shadow-hover-large">
              <h3 className="uk-card-title">Request a demo</h3>
              <p>
                See the N2N AI Suite in action and learn more about our
                applications.
              </p>
              <a uk-icon="icon: arrow-right; ratio: 2"></a>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-box-shadow-hover-large">
              <h3 className="uk-card-title">Schedule a briefing</h3>
              <p>
                Meet the N2N.ai team in person and see what it's like to work
                with us.
              </p>
              <a uk-icon="icon: arrow-right; ratio: 2"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
