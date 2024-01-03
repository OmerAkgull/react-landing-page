import "./style.scss";
import Navbar from "./sections/navbar/navbar";
import Hero from "./sections/hero/hero";
import Features from "./sections/features/features";
import Footer from "./sections/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer/>
    </>
  );
}

export default App;
