import lemonPic from "../assets/desktop/image-transform.jpg";
import cupPic from "../assets/desktop/image-stand-out.jpg";
import cherryPic from "../assets/desktop/image-graphic-design.jpg";
import orangePic from "../assets/desktop/image-photography.jpg";

function UpsellGrid() {
  return (
    <>
      {/* First upsell row */}
      <section>
        <div className="grid grid-cols-2">
          <div className="aspect-square content-center justify-center align-center p-24">
            <p className="text-dark font-serif text-4xl mb-4">
              Transform your brand
            </p>
            <p className="text-dark font-sans mb-4">
              we are a full service creative agency specialized in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a className="uppercase text-sm font-serif font-bold" href="/">
              Learn more
            </a>
          </div>
          <div
            className="aspect-square bg-center bg-cover"
            style={{ backgroundImage: `url(${lemonPic})` }}
          />
        </div>
      </section>
      {/* second upsell row */}
      <section>
        <div className="grid grid-cols-2">
          <div
            className="aspect-square bg-center bg-cover"
            style={{ backgroundImage: `url(${cupPic})` }}
          ></div>
          <div className="aspect-square content-center justify-center align-center p-24">
            <p className="text-dark font-serif text-4xl capitalize">
              Stand out to the right audience
            </p>
            <p className="text-dark font-sans mb-4">
              we are a full service creative agency specialized in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a className="uppercase text-sm font-serif font-bold" href="/">
              Learn more
            </a>
          </div>
        </div>
      </section>
      {/* third upsell row */}
      <section>
        <div className="grid grid-cols-2">
          <div
            className="aspect-square bg-center bg-cover"
            style={{ backgroundImage: `url(${cherryPic})` }}
          ></div>
          <div
            className="aspect-square text-dark bg-center bg-cover"
            style={{ backgroundImage: `url(${orangePic})` }}
          ></div>
        </div>
      </section>
    </>
  );
}

export default UpsellGrid;
