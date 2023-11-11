import React from "react";
import "./Hero.css";

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-left">
				<h3>Fashion to Die for</h3>
				<h1>Seattle Mids</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem neque
					aut tempora sit. Consequuntur tenetur sed, neque repudiandae iste
					placeat esse odit culpa perferendis, libero nesciunt et earum autem
					asperiores?
				</p>
				<button className="hero-latest-btn">
					<span>Latest Collections</span> <i class="fa-solid fa-arrow-right"></i>
				</button>
			</div>
			<div className="hero-right"></div>
		</div>
	);
};

export default Hero;
