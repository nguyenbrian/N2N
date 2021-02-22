export default function ContactDetails(props) {
  return (
    <>
      <h1>Contact</h1>
      <p className="uk-margin-remove">
        <span className="uk-margin-small-right" uk-icon="icon: mail"></span> E:
        contact@n2n.ai
      </p>
      <p className="uk-margin-remove">
        <span className="uk-margin-small-right" uk-icon="icon: receiver"></span>{" "}
        P: +61 414 151 151
      </p>
    </>
  );
}
