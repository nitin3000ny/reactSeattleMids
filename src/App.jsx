import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer/Footer";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<BrowserRouter >
			<Navbar />
			<Routes>
				<Route path="/" element={<Shop/>} />
				<Route path="/mens" element={<ShopCategory banner={"https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"} category="men" />} />
				<Route path="/womens" element={<ShopCategory banner={"https://plus.unsplash.com/premium_photo-1661724321823-0b709f89b7d5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tZW4lMjBiYW5uZXJ8ZW58MHx8MHx8fDA%3D"} category="women" />} />
				<Route path="/kids" element={<ShopCategory banner={"https://images.unsplash.com/photo-1485309086598-f9d010ad3972?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"} category="kids" />} />
				<Route path="/product" element={<Product />}>
					<Route path=":productId" element={<Product />} />
				</Route>
				<Route path="/cart" element={<Cart />} />
				<Route path="/login" element={<LoginSignup />} />
			</Routes>
			<Footer/>
      </BrowserRouter>
		</>
	);
}

export default App;
