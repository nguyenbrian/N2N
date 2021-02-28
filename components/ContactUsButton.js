import Link from "next/link";

export default function ContactUsButton(props) {
  return (
    <div>
      <Link href="/contact-us">
        <button className="n2n-button uk-button uk-button-default">
          Contact us
        </button>
      </Link>
    </div>
  );
}
