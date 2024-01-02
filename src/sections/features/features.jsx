import Card from "/Users/User/Desktop/repos/OnlyJS React/react-landing-page/src/components/card/card";
import IconBox from "../../components/iconbox/iconbox";

export default function Features() {
  const card1 = {
    cardTitle: "Fresh new layout",
    cardText:
      "With Bootstrap 5, we've created a fresh new layout for this template!",
  };

  const card2 = {
    cardTitle: "Free to download",
    cardText:
      "As always, Start Bootstrap has a powerful collectin of free templates.",
  };

  const card3 = {
    cardTitle: "Jumbotron hero header",
    cardText: "The heroic part of this template is the jumbotron hero header!",
  };

  const card4 = {
    cardTitle: "Feature boxes",
    cardText: "We've created some custom feature boxes using Bootstrap icons!",
  };

  const card5 = {
    cardTitle: "Simple clean code",
    cardText:
      "We keep our dependencies up to date and squash bugs as they come!",
  };

  const card6 = {
    cardTitle: "A name you trust",
    cardText:
      "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-xxl-4 justify-content-center align-items-center d-flex flex-column">
          <IconBox />
          <Card cardTitle={card1.cardTitle} cardText={card1.cardText} />
        </div>
        <div className="col-lg-6 col-xxl-4 justify-content-center align-items-center d-flex flex-column">
          <IconBox />
          <Card cardTitle={card2.cardTitle} cardText={card2.cardText} />
        </div>
        <div className="col-lg-6 col-xxl-4 justify-content-center align-items-center d-flex flex-column">
          <IconBox />
          <Card cardTitle={card3.cardTitle} cardText={card3.cardText} />
        </div>
        <div className="col-lg-6 col-xxl-4 mt-5 justify-content-center align-items-center d-flex flex-column">
          <IconBox />
          <Card cardTitle={card4.cardTitle} cardText={card4.cardText} />
        </div>
        <div className="col-lg-6 col-xxl-4 mt-5 justify-content-center align-items-center d-flex flex-column">
          <IconBox />
          <Card cardTitle={card5.cardTitle} cardText={card6.cardText} />
        </div>
        <div className="col-lg-6 col-xxl-4 mt-5 justify-content-center align-items-center d-flex flex-column">
          <IconBox />
          <Card cardTitle={card6.cardTitle} cardText={card6.cardText} />
        </div>
      </div>
    </div>
  );
}
