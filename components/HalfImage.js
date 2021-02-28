export default function HalfImage(props) {
  if (props.variant === "right") {
    return (
      <div
        className="avoid-navbar uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
        style={{ boxShadow: "none" }}
        uk-grid="true"
      >
        <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
          <img src={props.src} alt="" uk-cover="true" />
          <canvas width="600" height="500"></canvas>
        </div>
        <div>
          <div className="uk-card-body uk-card-large">{props.children}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="avoid-navbar uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
        style={{ boxShadow: "none" }}
        uk-grid="true"
      >
        <div className="uk-card-media-left uk-cover-container">
          <img src={props.src} alt="" uk-cover="true" />
          <canvas width="600" height="500"></canvas>
        </div>
        <div>
          <div className="uk-card-body uk-card-large">{props.children}</div>
        </div>
      </div>
    );
  }
}
