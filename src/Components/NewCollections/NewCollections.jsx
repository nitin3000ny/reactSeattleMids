import React from "react";
import "./NewCollections.css";
import new_collections from "../Assets/newCollections";
import Item from "../Item/Item";
const NewCollections = () => {
	return (
		<div className="new-collections">
			<h1>NEW COLLECTIONS</h1>
			<hr />
			<div className="collections">
				{new_collections.map((item, i) => {
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

export default NewCollections;
