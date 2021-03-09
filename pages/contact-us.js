import Fullpage from "../components/Fullpage";
import Layout from "../components/Layout";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "contact-us"])),
  },
});

export default function ContactUs(props) {
  const { t } = useTranslation("contact-us");
  return (
    <Layout>
      <Fullpage scrollOverflow={true}>
        <div className="section uk-animation-fade" id="section0">
          <div className="uk-flex uk-flex-center avoid-navbar">
            <div className="uk-padding-large uk-width-1-2@s">
              <h1>{t("contact-us")}</h1>
              <form className="uk-form-stacked">
                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    {t("name") + " "}
                    <p style={{ color: "red", display: "inline" }}>
                      {t("required")}
                    </p>
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input"
                      id="contact-us-name"
                      type="text"
                      placeholder={t("name-placeholder")}
                    />
                  </div>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    {t("title")}
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input"
                      id="contact-us-title"
                      type="text"
                      placeholder={t("title-placeholder")}
                    />
                  </div>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    {t("mail") + " "}
                    <p style={{ color: "red", display: "inline" }}>
                      {t("required")}
                    </p>
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input"
                      id="contact-us-email"
                      type="text"
                      placeholder={t("mail-placeholder")}
                    />
                  </div>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    {t("number")}
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input"
                      id="contact-us-phone"
                      type="text"
                      placeholder={t("number-placeholder")}
                    />
                  </div>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    {t("company")}
                  </label>
                  <div className="uk-form-controls">
                    <input
                      className="uk-input"
                      id="contact-us-company"
                      type="text"
                      placeholder={t("company-placeholder")}
                    />
                  </div>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label" htmlFor="form-stacked-text">
                    {t("msg") + " "}
                    <p style={{ color: "red", display: "inline" }}>
                      {t("required")}
                    </p>
                  </label>
                  <textarea
                    style={{ resize: "none" }}
                    id="contact-us-msg"
                    className="uk-textarea uk-resize-vertical"
                    rows="5"
                    placeholder={t("msg-placeholder")}
                  ></textarea>
                </div>

                <div className="uk-margin">
                  <button
                    id="contact-us-submit"
                    className="uk-button uk-button-default n2n-button"
                    type="button"
                    onClick={() => {
                      let name = document.getElementById("contact-us-name")
                        .value;

                      let jobTitle = document.getElementById("contact-us-title")
                        .value;

                      let emailAddr = document.getElementById(
                        "contact-us-email"
                      ).value;

                      let phoneNo = document.getElementById("contact-us-phone")
                        .value;

                      let companyName = document.getElementById(
                        "contact-us-company"
                      ).value;

                      let msg = document.getElementById("contact-us-msg").value;

                      let errors = {
                        "contact-us-name": false,
                        "contact-us-email": false,
                        "contact-us-msg": false,
                      };
                      if (name === "") {
                        errors["contact-us-name"] = true;
                      }

                      if (emailAddr === "") {
                        errors["contact-us-email"] = true;
                      }

                      if (msg === "") {
                        errors["contact-us-msg"] = true;
                      }

                      let hasErrors = false;

                      Object.keys(errors).forEach((i) => {
                        if (errors[i] === true) {
                          hasErrors = true;
                          document
                            .getElementById(i)
                            .classList.add("uk-form-danger");
                        } else {
                          document
                            .getElementById(i)
                            .classList.remove("uk-form-danger");
                        }
                      });

                      if (hasErrors) {
                        return;
                      }

                      // let myHeaders = new Headers();
                      // myHeaders.append(
                      //   "Content-Type",
                      //   "application/x-www-form-urlencoded"
                      // );
                      // // myHeaders.append(
                      // //   "Cookie",
                      // //   "S=spreadsheet_forms=UnfjNtnYOktGOex6da-9AYi8eGe6Gr67hetNuLA7HAE; NID=210=J-q73wMELgMDjD2hXIUaYZ3jHIbnCzsNv0GzKvDPzppfMyGW5YFUA19A-6W2u_uixkEEspLxQir9utUlFxLMsxlN36FSktB3Wr6pazuI75USsrnzOyeUzAljqsaFT2aZ28d5D-pwi7aW56BQFueqLw1NXj7Nov5KSJt-B9BVEvk"
                      // // );

                      // let urlencoded = new URLSearchParams();
                      // urlencoded.append("entry.170303827", name);
                      // urlencoded.append("entry.975948400", jobTitle);
                      // urlencoded.append("entry.1876911322", emailAddr);
                      // urlencoded.append("entry.915376698", phoneNo);
                      // urlencoded.append("entry.1511638443", companyName);
                      // urlencoded.append("entry.135035489", msg);

                      // let requestOptions = {
                      //   method: "POST",
                      //   headers: myHeaders,
                      //   body: urlencoded,
                      //   redirect: "follow",
                      //   mode: "no-cors",
                      // };

                      // fetch(
                      //   "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdzesy9x88D2mAOVAMHme5KLOOhsr-W3alv8qDZGRCKTSMe3A/formResponse",
                      //   requestOptions
                      // )
                      //   .then((r) => {
                      //     const uikit = require("uikit");
                      //     uikit.notification({
                      //       message: "Your response was successfully sent",
                      //       status: "success",
                      //     });
                      //   })
                      //   .catch((e) => {});
                    }}
                  >
                    {t("submit")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fullpage>
    </Layout>
  );
}
