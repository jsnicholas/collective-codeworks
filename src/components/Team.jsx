import customer1 from "../assets/image-emily.jpg";

function Team() {
  return (
    <section className="h-fit w-full text-center">
      <h2 className="text-bold font-serif text-3xl py-24 mb-4">
        Client Testimonials
      </h2>
      {/* Testimonial grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-24 px-24">
        {/* Testimonial 1 */}
        <div className="w-fit">
          <img className="w-16 mask mask-circle m-auto mb-6" src={customer1} />
          <p className="mb-8 font-medium">
            We put our trust in Creative Codeworks and they delivered, making
            sure our needs were met and deadlines were always hit.
          </p>
          <h3 className="font-bold font-serif text-lg">Emily R.</h3>
          <span>Marketing Director</span>
        </div>
        {/* testimonial 2 */}
        <div className="w-fit">
          <img className="mb-6 w-16 mask mask-circle m-auto" src={customer1} />
          <p className="mb-8 font-medium">
            We put our trust in Creative Codeworks and they delivered, making
            sure our needs were met and deadlines were always hit.
          </p>
          <h3 className="font-bold font-serif text-lg">Emily R.</h3>
          <span>Marketing Director</span>
        </div>
        {/* testimonial 3 */}
        <div className="w-fit">
          <img className="mb-6 w-16 mask mask-circle m-auto" src={customer1} />
          <p className="mb-8 font-medium">
            We put our trust in Creative Codeworks and they delivered, making
            sure our needs were met and deadlines were always hit.
          </p>
          <h3 className="font-bold font-serif text-lg">Emily R.</h3>
          <span>Marketing Director</span>
        </div>
      </div>
    </section>
  );
}

export default Team;
