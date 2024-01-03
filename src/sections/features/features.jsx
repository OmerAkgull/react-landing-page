import Card from "/Users/User/Desktop/repos/OnlyJS React/react-landing-page/src/components/card/card";
import IconBox from "../../components/iconbox/iconbox";

export default function Features() {
  const card1 = {
    cardTitle: "Product Development",
    cardText:
      "Product you want to develop? You are in the right place. Our expert staff will develop your product with expertise.",
  };

  const card2 = {
    cardTitle: "DevOps Consultancy",
    cardText:
      "We create the development infrastructures to accelerate your company's digital transformation.",
  };

  const card3 = {
    cardTitle: "Mobile Development",
    cardText:
      "We develop your mobile application for iOS and Android platforms with React Native and Flutter.",
  };

  const card4 = {
    cardTitle: "Web Development",
    cardText:
      "We offer mobile-friendly and dynamic websites through technologies such as React.js and Django.",
  };

  const card5 = {
    cardTitle: "UI/UX Design",
    cardText:
      "With our UI/UX team, we design user experience-oriented user interfaces for your application.",
  };

  const card6 = {
    cardTitle: "Maintenance Support",
    cardText:
      "We offer 24/7 enterprise-level support throughout your project and after delivery.",
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-xxl-4 mt-5 mt-lg-0 justify-content-center align-items-center d-flex flex-column">
          <IconBox icon={<i className="bi bi-rocket-takeoff-fill text-white fs-2"></i>} />
          <Card cardTitle={card1.cardTitle} cardText={card1.cardText} />
        </div>
        <div className="col-lg-6 col-xxl-4 mt-5 mt-lg-0 justify-content-center align-items-center d-flex flex-column">
          <IconBox icon={<i className="bi bi-cloud-download-fill text-white fs-2"></i>} />
          <Card cardTitle={card2.cardTitle} cardText={card2.cardText} />
        </div>
        <div className="col-lg-6 col-xxl-4 mt-5 mt-lg-0 justify-content-center align-items-center d-flex flex-column">
          <IconBox icon={<i className="bi bi-phone-fill text-white fs-2"></i>} />
          <Card cardTitle={card3.cardTitle} cardText={card3.cardText} />
        </div>
        <div className="col-lg-6 col-xxl-4 mt-5 justify-content-center align-items-center d-flex flex-column">
          <IconBox icon={<i className="bi bi-window-fullscreen text-white fs-2"></i>} />
          <Card cardTitle={card4.cardTitle} cardText={card4.cardText} />
        </div>
        <div className="col-lg-6 col-xxl-4 mt-5 justify-content-center align-items-center d-flex flex-column">
          <IconBox icon={<i className="bi bi-cursor-fill text-white fs-2"></i>} />
          <Card cardTitle={card5.cardTitle} cardText={card6.cardText} />
        </div>
        <div className="col-lg-6 col-xxl-4 mt-5 justify-content-center align-items-center d-flex flex-column">
          <IconBox icon={<i className="bi bi-gear-fill text-white fs-2"></i>} />
          <Card cardTitle={card6.cardTitle} cardText={card6.cardText} />
        </div>
      </div>
    </div>
  );
}
