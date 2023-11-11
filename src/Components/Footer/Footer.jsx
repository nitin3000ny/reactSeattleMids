import React from "react";
import "./Footer.css";
const Footer = () => {
	return (
		<div>
			<footer>
				<div className="container footer">
					<div className="inner-container foot-head">
						<p>
							Questions? Call <a href="tel:+917051133258">7051133258</a>{" "}
						</p>
					</div>
					<div className="inner-container footer-flex flex">
						<div class="flex footer-flex-line">
							<a href="#">FAQ</a>
							<a href="#">Investor Relationships</a>
							<a href="#">Privacy</a>
						</div>
						<div className="flex footer-flex-line">
							<a href="#">Help Center</a>
							<a href="#">Jobs</a>
							<a href="#">Cookie Prefrences</a>
							<a href="#">Legal Notices</a>
						</div>
						<div className="flex footer-flex-line">
							<a href="#">Account</a>
							<a href="#">Corporate Information</a>
						</div>
						<div className="flex footer-flex-line">
							<a href="#">Terms of use</a>
							<a href="#">contact us</a>
						</div>
					</div>
					<div className="footer-bottom">
						<p id="copyright">
							&copy; <span id="current-year">2023</span> Mid Seattle. All rights
							reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
