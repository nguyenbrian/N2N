import Layout from "../components/Layout";
import Fullpage from "../components/Fullpage";
import PartnerCard from "../components/PartnerCard";

export default function Partners() {
  const partners = [
    {
      name: "Macquarie University",
      link: "https://www.mq.edu.au/",
      img: "images/mq.png",
    },
    { name: "UNSW", link: "http://www.unsw.edu.au/", img: "images/unsw.png" },
    { name: "UNISA", link: "https://unisa.edu.au/", img: "images/unisa.jpg" },
    {
      name: "SmartCrete CRC",
      link: "http://smartcretecrc.com.au/",
      img: "images/SCCRC.png",
      padding: true,
    },
    {
      name: "FPT Software",
      link: "https://www.fpt-software.com/",
      img: "images/fpt.png",
    },
    {
      name: "TMA Solutions",
      link: "http://www.tmasolutions.com/",
      img: "images/tma.jpg",
      padding: true,
    },
    {
      name: "Pai Technology",
      link: "https://pai.technology/",
      img: "images/pai.svg",
      padding: true,
    },

    {
      name: "AUTOTECH",
      link: "http://auto-tech.vn/",
      img: "images/autotech.png",
    },
    {
      name: "Kodimo",
      link: "https://kodimo.com/",
      img: "images/kodimo.png",
      padding: true,
    },
    {
      name: "CMC Global",
      link: "https://www.cmcglobal.com.vn/",
      img: "images/cmc.jpg",
    },
    {
      name: "APICOO Robotics",
      link: "https://apicoorobotics.com/",
      img: "images/apicoo.png",
    },
    { name: "WESMART", link: "http://wesmart.vn/", img: "images/wesmart.png" },
    {
      name: "GaraSTEM",
      link: "https://garastem.com/",
      img: "images/garastem.png",
    },
    { name: "LC TECH", link: "https://lctech.vn/", img: "images/lc.png" },
    { name: "ITDC", link: "http://itdctech-vn.com/" },
    {
      name: "OhmniLabs",
      link: "https://ohmnilabs.com/",
    },
  ];
  return (
    <Layout>
      <Fullpage scrollOverflow={true}>
        <div
          style={{
            backgroundImage: `url(/images/partners_1.jpg)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="section frontpage uk-background-blend-hard-light"
          id="section0"
        >
          <div className="uk-padding">
            <h1 className="uk-heading-medium">Partners</h1>
            <h2>Partnering to Deliver Customer Success</h2>
          </div>
        </div>
        <div className="section content" id="section1">
          <div className="avoid-navbar uk-flex uk-flex-center uk-padding">
            <div className="uk-width-3-4@m">
              <div
                className="uk-child-width-1-2@s uk-child-width-1-3@m uk-text-center"
                uk-grid="masonry: true"
              >
                {partners.map((i) => {
                  return (
                    <PartnerCard
                      key={i.name}
                      title={i.name}
                      link={i.link}
                      src={i.img}
                      padding={i.padding}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Fullpage>
    </Layout>
  );
}
