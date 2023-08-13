import customer1 from "../assets/image-emily.jpg";

function Team() {
  return (
    <section className="h-96 w-full">
      <div className="grid grid-col-1 md:grid-col-3">
        <img className="mask mask-circle" src={customer1} />
      </div>
    </section>
  );
}

export default Team;
