import * as bootstrap from 'bootstrap'


export default function Navbar() {
    return(
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container">
    <a className="navbar-brand" href="#">Apex Digital</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
    )
}