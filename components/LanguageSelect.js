import { useRouter } from "next/router";

export default function LanguageSelect(props) {
  const router = useRouter();

  let options = (
    <>
      <option>English</option>
      <option>Tiếng Việt</option>
    </>
  );

  if (router.locale === "vi") {
    options = (
      <>
        <option>Tiếng Việt</option>
        <option>English</option>
      </>
    );
  }

  return (
    <div>
      <a uk-icon="world"></a>
      <div
        className={
          props.variant === "dark"
            ? "uk-light uk-background-secondary"
            : "uk-dark uk-background-muted"
        }
        uk-dropdown={`mode: click; pos: ${props.pos}; offset: ${props.offset}`}
      >
        <p className="uk-margin-small-bottom">Choose a language</p>
        <select id="selectedLanguage" className="uk-select">
          {options}
        </select>
        <button
          onClick={() => {
            const lang = document.getElementById("selectedLanguage").value;
            if (lang === "Tiếng Việt" && router.locale !== "vi") {
              router.push(router.pathname, undefined, { locale: "vi" });
            } else if (lang === "English" && router.locale !== "en") {
              router.push(router.pathname, undefined, { locale: "en" });
            }
          }}
          className="n2n-button uk-button uk-button-default uk-margin-top"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
