import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Navbar.css";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
	const [menu, setMenu] = useState("shop");
const {getTotalCartItems}=useContext(ShopContext)
	return (
		<div className="navbar">
			<div className="logo">
				<p>
					Seattle<span className="mid">Mids</span>
				</p>
			</div>
			<ul className="nav-menu">
				<li onClick={() => setMenu("shop")}>
					{" "}
					<Link to="/" style={{textDecoration:"none"}}>Shop</Link> {menu === "shop" ? <hr /> : null}
				</li>
				<li onClick={() => setMenu("mens")}>
					<Link to="/mens" style={{textDecoration:"none"}}>Men</Link> {menu === "mens" ? <hr /> : null}
				</li>
				<li onClick={() => setMenu("womens")}>
					<Link to="/womens" style={{textDecoration:"none"}}>Women</Link> {menu === "womens" ? <hr /> : null}
				</li>
				<li onClick={() => setMenu("kids")}>
					<Link to="/kids" style={{textDecoration:"none"}}>Kids</Link> {menu === "kids" ? <hr /> : null}
				</li>
			</ul>
			<div className="nav-login-cart">
				<Link to="/login" style={{textDecoration:"none"}}>
					<button>Login</button>
				</Link>

				<div className="cart">
					<Link to="/cart" style={{textDecoration:"none"}}><i className="fa-solid fa-cart-shopping cart-icon"></i></Link>
					<div className="cart-count">{getTotalCartItems()}</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
