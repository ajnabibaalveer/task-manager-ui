import { NavLink } from "react-router-dom";
import "./sidebar.css";

const SideBar = () => {
    return (
        <aside id="sidebar" className='sidebar'>
            <ul className="sidebar-nav" id='sidebar-nav'>
                <li className="nav-item mb-3">
                    <NavLink to="/" end className="nav-link">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li className="nav-item mb-3">
                    <NavLink to="/Register" className="nav-link">
                        <i className="bi bi-person-plus"></i>
                        <span>Register</span>
                    </NavLink>
                </li>
                <li className="nav-item mb-3">
                    <NavLink to="/Activity" className="nav-link">
                        <i className="bi bi-graph-up"></i>
                        <span>Activity</span>
                    </NavLink>
                </li>
                <li className="nav-item mb-3">
                    <NavLink to="/Report" className="nav-link">
                        <i className="bi bi-bar-chart"></i>
                        <span>Report</span>
                    </NavLink>
                </li>
                <li className="nav-item mb-3">
                    <NavLink to="/Setting" className="nav-link">
                        <i className="bi bi-gear"></i>
                        <span>Setting</span>
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
}

export default SideBar;
