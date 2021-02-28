import { useRouter } from "next/router";

export default function LanguageSelect(props) {
  const router = useRouter();

  const options = [
    { id: "en", lang: "English" },
    { id: "vi", lang: "Tiếng Việt" },
  ];

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
          Apply
        </button>
      </div>
    </div>
  );
}
