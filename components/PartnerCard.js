//import Image from "next/image";

export default function PartnerCard(props) {
  return (
    <div>
      <div className="uk-card-small uk-card-default uk-box-shadow-hover-xlarge">
        {props.src ? (
          <div
            style={props.padding ? { padding: "15px" } : {}}
            className="uk-card-media-top"
          >
            <img
              style={{
                objectFit: "contain",
              }}
              src={props.src}
              alt=""
            />
          </div>
        ) : null}

        <div className="uk-card-body">
          <h1 className="uk-card-title">{props.title}</h1>
          {/* <p>{props.body}</p> */}
          <button
            className="n2n-button uk-button uk-button-default"
            type="button"
            onClick={() => {
              window.open(props.link);
            }}
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
