import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
// ... (imports and other code)

const CartItems = () => {
	const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);

	return (
		<div className="cartitems">
			<div className="cartitems-format-main">
				<p>Products</p>
				<p>Title</p>
				<p>Price</p>
				<p>Quantity</p>
				<p>Total</p>
				<p>Remove</p>
			</div>
			<hr />
			{all_product.map((e) => {
				console.log(cartItems[e.id]);
				if (cartItems[e.id] > 0) {
					return (
						<div key={e.id}>
							<div className="cartitems-format cartitems-format-main">
								<img src={e.image} className="carticon-product-icon" alt="" />
								<p>{e.name}</p>
								<p>${e.price}</p>
								<button className="cartitems-quantity">
									{cartItems[e.id]}
								</button>
								<p>${e.price * cartItems[e.id]}</p>
								<img
									src={remove_icon}
									alt=""
									className="cartitems-remove-icon"
									onClick={() => {
										removeFromCart(e.id);
									}}
								/>
							</div>
							<hr />
						</div>
					);
				}
				// Make sure to return null if the condition is not met.
				return null;
			})}
			<div className="cartitems-down">
				<div className="cartitems-total">
					<h1>Cart Totals</h1>
					<div>
						<div className="cartitems-total-item">
							<p>Subtotal</p>
							<p>${getTotalCartAmount()}</p>
						</div>
						<hr />
						<div className="cartitems-total-item">
							<p>Shipping Fee</p>
							<p>Free</p>
						</div>
						<hr />
						<div className="cartitems-total-item">
							<h3>Total</h3>
							<h3>${getTotalCartAmount()}</h3>
						</div>
					</div>
					<button>Proceed To Checkout</button>
				</div>
				<div className="cartitems-promocode">
					<p>If you have a promocode enter it here</p>
					<div className="cartitems-promobox">
						<input type="text" placeholder="promo code" />
						<button>Submit</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItems;
