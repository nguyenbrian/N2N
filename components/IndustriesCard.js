//import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function IndustriesCard(props) {
  const { t } = useTranslation("common");
  return (
    <div className="uk-card-small uk-card-default uk-box-shadow-hover-xlarge">
      <div className="uk-card-media-top">
        <img
          style={{
            height: "200px",
            width: "100%",
            objectFit: "cover",
          }}
          src={props.src}
          alt=""
        />
      </div>
      <div className="uk-card-body">
        <h1 className="uk-card-title">{props.title}</h1>
        {/* <p>{props.body}</p> */}
        <Link href={props.link}>
          <button
            className="n2n-button uk-button uk-button-default"
            type="button"
          >
            {t("learn-more")}
          </button>
        </Link>
      </div>
    </div>
  );
}
