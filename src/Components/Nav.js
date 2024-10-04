import { NavLink } from "react-router-dom";

function Nav(){
    return(

        <nav>
            <ul>
                <li class="navbar">
                    <NavLink to="/">
                        <img src='https://cdn.britannica.com/84/188484-050-F27B0049/lemons-tree.jpg' width='75' ></img>
                    </NavLink>
                </li>
                <li class="navbar">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li class="navbar">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li class="navbar">
                Menu
                </li>
                <li class="navbar">
                    <NavLink to="booking">Reservations</NavLink>
                </li>
                <li class="navbar">
                    Order Online
                </li>
                <li class="navbar">Login</li>
            </ul>
        </nav>
    )
}

export default Nav;