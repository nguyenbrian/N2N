import ContactUsButton from "./ContactUsButton";
import { useTranslation } from "next-i18next";

export default function ResultsSection(props) {
  const { t } = useTranslation("results");

  return (
    <div className="section frontpage notdark" id="section5">
      <div className="uk-padding">
        <h1 style={{ marginTop: "90px" }} className="uk-heading-medium">
          {t("h1")}
        </h1>
        <h2>{t("h2")}</h2>
        <div
          id="nextSteps"
          className="uk-child-width-1-1 uk-child-width-1-3@m uk-grid-small uk-grid-match uk-margin-large-top"
          uk-grid="true"
          style={{
            maxWidth: "100%",
          }}
        >
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-box-shadow-hover-large">
              <h3 className="uk-card-title">{t("card0-h1")}</h3>
              <p>{t("card0-p")}</p>
              <ContactUsButton modalID="contact-us-modal" />
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-box-shadow-hover-large">
              <h3 className="uk-card-title">{t("card1-h1")}</h3>
              <p>{t("card1-p")}</p>
              <ContactUsButton modalID="contact-us-modal" />
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-card-body uk-box-shadow-hover-large">
              <h3 className="uk-card-title">{t("card2-h1")}</h3>
              <p>{t("card2-p")}</p>
              <ContactUsButton modalID="contact-us-modal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
