import Image from "next/image";
import Link from "next/link";

export default function ResultsSection(props) {
  return (
    <div className="uk-card-small uk-card-hover">
      <div className="uk-card-media-top">
        {/* <Image
          priority="true"
          layout="responsive"
          height="200px"
          width="300px"
          src={props.src}
          alt=""
        /> */}
      </div>
      <div className="uk-card-body">
        <h1 className="uk-card-title">{props.title}</h1>
        {/* <p>{props.body}</p> */}
        <Link href={props.link}>
          <button
            className="n2n-button uk-button uk-button-default"
            type="button"
          >
            Learn more
          </button>
        </Link>
      </div>
    </div>
  );
}
