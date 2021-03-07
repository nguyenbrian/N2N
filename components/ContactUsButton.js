import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function ContactUsButton(props) {
  const { t } = useTranslation("results");
  return (
    <div>
      <Link href="/contact-us">
        <button className="n2n-button uk-button uk-button-default">
          {t("contact-us")}
        </button>
      </Link>
    </div>
  );
}
