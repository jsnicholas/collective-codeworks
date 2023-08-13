function Footer() {
  return (
    <footer className="h-64 p-16 bg-success text-neutral-content text-center">
      <div className="flex flex-col gap-6">
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
