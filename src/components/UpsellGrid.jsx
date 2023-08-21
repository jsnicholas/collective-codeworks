import lemonPic from "../assets/desktop/image-transform.jpg";
import cupPic from "../assets/desktop/image-stand-out.jpg";
import cherryPic from "../assets/desktop/image-graphic-design.jpg";
import orangePic from "../assets/desktop/image-photography.jpg";

function UpsellGrid() {
  return (
    <>
      {/* First upsell row */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-square content-center justify-center align-center p-8 md:p-24">
          <p className="text-dark font-serif text-4xl mb-6">
            Transform your brand
          </p>
          <p className="text-dark font-sans mb-8">
            we are a full service creative agency specialized in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a className="uppercase text-sm font-serif font-bold" href="/">
            Learn more
          </a>
        </div>
        <div
          className="aspect-square bg-center bg-cover"
          style={{ backgroundImage: `url(${lemonPic})` }}
        />
        {/* second upsell row */}
        <div
          className="aspect-square bg-center bg-cover"
          style={{ backgroundImage: `url(${cupPic})` }}
        ></div>
        <div className="aspect-square content-center justify-center align-center p-8 md:p-24">
          <p className="text-dark font-serif text-4xl capitalize mb-6">
            Stand out to the right audience
          </p>
          <p className="text-dark font-sans mb-8">
            we are a full service creative agency specialized in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a className="uppercase text-sm font-serif font-bold" href="/">
            Learn more
          </a>
        </div>
        {/* graphic design upsell */}
        <div
          className="aspect-square bg-center bg-cover"
          style={{ backgroundImage: `url(${cherryPic})` }}
        >
          <div className="h-1/3"></div>
          <div className="h-1/4 lg:h-1/3"></div>
          <div className="text-center h-1/3" style={{ color: "#225F4F" }}>
            <p className="font-serif text-4xl capitalize mb-4">
              Graphic design
            </p>
            <p className="px-12">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential
              clients&apos; attention
            </p>
          </div>
        </div>
        {/* Photography upsell */}
        <div
          className="aspect-square bg-center bg-cover"
          style={{ backgroundImage: `url(${orangePic})` }}
        >
          <div className="h-1/3"></div>
          <div className="h-1/4 lg:h-1/3"></div>
          <div className="text-center h-1/3" style={{ color: "#144156" }}>
            <p className="font-serif text-4xl capitalize mb-4">Photography</p>
            <p className="px-12">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential
              clients&apos; attention
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default UpsellGrid;
