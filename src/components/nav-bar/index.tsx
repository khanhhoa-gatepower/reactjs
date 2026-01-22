import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="min-w-[270px] bg-white border-r-[1px] border-blueGray-100">
      <ul className="p-4">
        <li className="w-full">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-blueGray-800 font-semibold text-base bg-[#F1F5F9] px-3 py-2 rounded-[8px] w-full block'
                : 'px-3 py-2 rounded-[8px] w-full block text-blueGray-500'
            }
          >
            Home
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'text-blueGray-800 font-semibold text-base bg-[#F1F5F9] px-3 py-2 rounded-[8px] w-full block'
                : 'px-3 py-2 rounded-[8px] w-full block text-blueGray-500'
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
