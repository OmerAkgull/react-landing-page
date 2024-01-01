import "./hero.module.scss";

export default function Hero() {
  return (
    <header className="container p-5 px-lg-5 mt-5 bg-light d-flex justify-content-center align-items-center text-center flex-column rounded">
      <h1 className="fw-bold pt-5 display-5">A warm welcome!</h1>
      <p className="fs-4 px-5">
        Bootstrap utility classes are used to create this jumbotron since the
        old component has been removed from the framework. Why create custom CSS
        when you can use utilities?
      </p>
      <div className="pb-4 pb-lg-5">
        <button type="button" className="btn btn-primary px-3 py-2 fs-5">
          Call to action
        </button>
      </div>
    </header>
  );
}
