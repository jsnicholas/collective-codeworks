import hamburgerIcon from "../assets/icon-hamburger.svg";

function Navbar() {
  return (
    <div className="navbar bg-primary place-content-around">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-lg text-neutral font-serif">
          collective codeworks
        </a>
      </div>

      <div className="flex-end hidden md:inline">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-neutral font-body">About</a>
          </li>
          <li>
            <a className="text-neutral font-body">Services</a>
          </li>
          <li>
            <a className="rounded-full bg-neutral font-serif">Contact</a>
          </li>
        </ul>
      </div>

      <div className="flex-end md:hidden">
        <ul className="menu menu-horizontal">
          <li>
            <details>
              <summary>{hamburgerIcon}</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
