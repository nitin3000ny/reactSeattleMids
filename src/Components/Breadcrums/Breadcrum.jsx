import React from "react";
import "./Breadcrum.css";
const Breadcrum = (props) => {
	const { product } = props;
	return (
		<div className="breadcrum" style={{ marginTop: "120px" }}>
			HOME <i className="fa-solid fa-caret-right"></i>{" "}SHOP{" "}
			<i className="fa-solid fa-caret-right"></i>
			{" "}{product.category} <i className="fa-solid fa-caret-right"></i> {product.name}
		</div>
	);
};

export default Breadcrum;
