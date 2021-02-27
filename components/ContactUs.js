import ContactDetails from "./ContactDetails";

export default function ContactUs(props) {
  return (
    <div>
      <button
        className="n2n-button uk-button uk-button-default"
        uk-toggle="target: #modal-center"
      >
        Contact us
      </button>

      <div id="modal-center" className="uk-flex-top" uk-modal="true">
        <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button
            className="uk-modal-close-default"
            type="button"
            uk-close="true"
          ></button>
          <div className="uk-padding">
            <ContactDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
