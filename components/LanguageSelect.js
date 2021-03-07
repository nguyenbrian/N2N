import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function LanguageSelect(props) {
  const router = useRouter();
  const { t } = useTranslation("common");

  const options = [
    {
      id: "en",
      lang: "English",
      icon: "https://www.countryflags.io/gb/flat/64.png",
    },
    {
      id: "vi",
      lang: "Tiếng Việt",
      icon: "https://www.countryflags.io/vn/flat/64.png",
    },
  ];

  return (
    <div>
      {router.locale === "en" ? (
        <img style={{ height: "40px" }} src={options[0].icon} />
      ) : (
        <img style={{ height: "40px" }} src={options[1].icon} />
      )}

      <div
        className={
          props.variant === "dark"
            ? "uk-light uk-background-secondary"
            : "uk-dark uk-background-muted"
        }
        uk-dropdown={`mode: hover; pos: ${props.pos}; offset: ${props.offset}`}
      >
        <p className="uk-margin-small-bottom">{t("choose-a-language")}</p>
        <select
          defaultValue={router.locale}
          id="selectedLanguage"
          className="uk-select"
        >
          {options.map((i) => {
            return (
              <option key={i.id} value={i.id} id={i.id}>
                {i.lang}
              </option>
            );
          })}
        </select>
        <button
          onClick={() => {
            const lang = document.getElementById("selectedLanguage").value;
            if (lang === "vi" && router.locale !== "vi") {
              router.push(router.pathname, undefined, { locale: "vi" });
            } else if (lang === "en" && router.locale !== "en") {
              router.push(router.pathname, undefined, { locale: "en" });
            }
          }}
          className="n2n-button uk-button uk-button-default uk-margin-top"
        >
          {t("apply")}
        </button>
      </div>
    </div>
  );
}
