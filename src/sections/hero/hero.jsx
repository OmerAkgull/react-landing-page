import image from "/src/assets/img/apexdigital.webp";

export default function Hero() {
  return (
    <header className="container p-5 px-lg-5 mt-5 bg-light d-flex justify-content-center align-items-center text-center flex-column rounded">
    <img src={image} className="rounded img-fluid"></img>
      <h1 className="fw-bold pt-5 display-5">Software as intended.</h1>
      <p className="fs-4 px-5">
        We transform your ideas into beautiful web applications.
      </p>
      <div className="pb-4 pb-lg-5">
        <button type="button" className="btn btn-primary px-3 py-2 fs-5">
          Get offer
        </button>
      </div>
    </header>
  );
}
