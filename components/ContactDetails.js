export default function ContactDetails(props) {
  return (
    <div>
      <h1>Contact</h1>
      <p className="uk-margin-remove">
        <span className="uk-margin-small-right" uk-icon="mail" />
        E: contact@n2n.ai
      </p>
      <a
        className="uk-margin-top uk-button uk-button-default"
        href="mailto:contact@n2n.ai"
      >
        <span className="uk-margin-right" uk-icon="mail" />
        Open email
      </a>
      {/* <div className="uk-button-group uk-margin-top">
        <a
          className="uk-button uk-button-default"
          onClick={() => {
            console.log("hi");
            navigator.clipboard.writeText("contact@n2n.ai");
          }}
        >
          <span className="uk-margin-right" uk-icon="copy" />
          Copy
        </a>
        <div className="uk-inline"></div>
      </div> */}
    </div>
  );
}
