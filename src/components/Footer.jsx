// import footer images
import milkFooterImg from "../assets/desktop/image-gallery-milkbottles.jpg";
import orangeFooterImg from "../assets/desktop/image-gallery-orange.jpg";
import coneFooterImg from "../assets/desktop/image-gallery-cone.jpg";
import sugarFooterImg from "../assets/desktop/image-gallery-sugarcubes.jpg";

function Footer() {
  return (
    <footer className="h-fit w-full">
      <div className="hidden md:grid grid-cols-4 h-96 w-full">
        <div
          className="bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${milkFooterImg})`,
          }}
        ></div>
        <div
          className="bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${orangeFooterImg})`,
          }}
        ></div>
        <div
          className="bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${coneFooterImg})`,
          }}
        ></div>
        <div
          className="bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${sugarFooterImg})`,
          }}
        ></div>
      </div>
      <div className="flex flex-col gap-6 p-16 bg-success">
        <span
          className="font-serif text-4xl text-center"
          style={{ color: "#225F4F" }}
        >
          Collective Codeworks
        </span>
        <div className="flex gap-4 justify-center">
          <a className="link link-hover">About</a>
          <a className="link link-hover">Projects</a>
          <a className="link link-hover">Contact</a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
