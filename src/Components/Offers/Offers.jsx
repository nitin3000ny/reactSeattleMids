import React from "react";
import "./Offers.css";
const Offers = () => {
	return (
		<div className="offers">
			<div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>
                    ONLY ON BEST SELLER PRODUCTS
                </p>
                <button>Check Now</button>
            </div>
			<div className="offers-right">
                <img src="https://img.freepik.com/free-photo/beautiful-woman-showing-copy-space_329181-90.jpg?w=900&t=st=1699614926~exp=1699615526~hmac=67a9cb58654c0357edc581e1df410bdd0f41d09c8428001137c9e9dd4dfa4878" alt="" />
            </div>
		</div>
	);
};

export default Offers;
