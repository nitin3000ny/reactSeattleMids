import React from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";
const RelatedProducts = ({ similarProducts }) => {
	return (
		<div className="relatedproducts">
			<h1>Related Products</h1>
			<hr />
			<div className="relatedproducts-item">
				{similarProducts.map((item, i) => {
					return (
						<Item
							key={i}
							id={item.id}
							name={item.name}
							image={item.image}
							price={item.price}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default RelatedProducts;
