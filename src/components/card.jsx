

export default function Card(props) {
    return(
        <div className="card p-5 text-center bg-light border-0">
  <div className="card-body">
    <h2 className="card-title fs-4 fw-bold">{props.cardTitle}</h2>
    <p className="card-text">{props.cardText}</p>
  </div>
</div>
    )
}