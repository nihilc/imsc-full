import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <h1>IMSC</h1>
      <button>Login / Logout</button>
    </header>
  );
};

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/landing">Landing</NavLink>
        </li>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/report">Reports</NavLink>
        </li>

        <li>
          <NavLink to="/inventory">Inventory</NavLink>
          <ul>
            <li>
              <NavLink to="/category">Category</NavLink>
            </li>
            <li>
              <NavLink to="/item">Item</NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink to="/administration">Admin</NavLink>
          <ul>
            <li>
              <NavLink to="/city">City</NavLink>
            </li>
            <li>
              <NavLink to="/company">Company</NavLink>
            </li>
            <li>
              <NavLink to="/worker">Worker</NavLink>
            </li>
            <li>
              <NavLink to="/user">User</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 Christian Cardenas</p>
    </footer>
  );
};
