import Card from "/Users/User/Desktop/repos/OnlyJS React/react-landing-page/src/components/card"

export default function Features() {
    const card1 = {
        cardTitle: "Fresh new layout",
        cardText:
          "With Bootstrap 5, we've created a fresh new layout for this template!",
      };
    

    return(
        <div className="container mt-5">
        <div className="row">
        <div className="col-lg-6 col-xxl-4">
        <Card cardTitle={card1.cardTitle} cardText = {card1.cardText}/>
        </div>
        </div>
        </div>
    )
}