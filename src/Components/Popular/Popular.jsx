import React from "react";
import "./Popular.css";
import popular from "../Assets/popular";
import Item from "../Item/Item";
const Popular = () => {
	return (
		<div className="popular">
			<h1>Popular in women</h1>
			<hr />
			<div className="popular-item">
				{popular.map((item, i) => {
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

export default Popular;
