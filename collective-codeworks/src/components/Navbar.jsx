function Navbar() {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl text-neutral">
          collective codeworks
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-neutral">About</a>
          </li>
          <li>
            <a className="text-neutral">Services</a>
          </li>
          <li>
            <a className="rounded-full bg-neutral">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
