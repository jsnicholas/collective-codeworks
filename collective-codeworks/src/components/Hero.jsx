import heroBgImg from "../assets/desktop/image-header.jpg";
import downArrow from "../assets/icon-arrow-down.svg";

function Hero() {
  return (
    <div
      className="hero min-h-screen bg-primary"
      style={{
        backgroundImage: `url(${heroBgImg})`,
      }}
    >
      <div className="text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold font-serif text-neutral uppercase tracking-widest">
            We are Creatives
          </h1>
          <p className="mb-10 text-center">
            <img className="m-auto" src={downArrow} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
