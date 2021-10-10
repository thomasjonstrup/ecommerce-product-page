import React, { useState } from "react";
import logo from "./assets/images/logo.svg";
import product1 from "./assets/images/image-product-1.jpg";
import product2 from "./assets/images/image-product-2.jpg";
import product3 from "./assets/images/image-product-3.jpg";
import product4 from "./assets/images/image-product-4.jpg";
import product1Thumb from "./assets/images/image-product-1-thumbnail.jpg";
import product2Thumb from "./assets/images/image-product-2-thumbnail.jpg";
import product3Thumb from "./assets/images/image-product-3-thumbnail.jpg";
import product4Thumb from "./assets/images/image-product-4-thumbnail.jpg";
import iconNext from "./assets/images/icon-next.svg";
import iconPrevious from "./assets/images/icon-previous.svg";
import imageAvatar from "./assets/images/image-avatar.png";
import iconCart from "./assets/images/icon-cart.svg";
import "./assets/scss/main.scss";

interface StringByString {
	[key: string]: string;
}

const images: StringByString = {
	product1: product1,
	product2: product2,
	product3: product3,
	product4: product4,
};

function App() {
	const [currentImage, setCurrentImage] = useState<number>(1);

	const image: any = images[`product${currentImage}`];

	console.log("currentImage :>> ", currentImage);

	const handleCurrentStep = (step: number): void => {
		setCurrentImage(step);
	};

	return (
		<>
			<header className="header">
				<div className="container">
					<nav className="header__nav">
						<div className="header__logo">
							<img src={logo} className="App-logo" alt="logo" />
						</div>
						<ul className="header__links">
							<li>
								<a className="header__link" href="#home">
									Collections
								</a>
							</li>
							<li>
								<a className="header__link" href="#home">
									Men
								</a>
							</li>
							<li>
								<a className="header__link" href="#home">
									Women
								</a>
							</li>
							<li>
								<a className="header__link" href="#home">
									About
								</a>
							</li>
							<li>
								<a className="header__link" href="#home">
									Contact
								</a>
							</li>
						</ul>
						<div className="right">
							<div className="icon-cart">
								<img src={iconCart} alt="icon-cart" />
							</div>
							<div className="avatar">
								<img src={imageAvatar} alt="image-avatar" />
							</div>
						</div>
					</nav>
				</div>
			</header>
			<main>
				<div className="container">
					<div className="flex-row">
						<div className="col">
							<div className="product">
								<div className="product__image img">
									<img src={image} alt="product-1" />
									<a href="#" className="previous round">
										<img
											src={iconPrevious}
											alt="icon-previous"
											onClick={(
												event: React.SyntheticEvent
											): void => {
												event.preventDefault();

												if (currentImage === 1) {
													return handleCurrentStep(4);
												}

												handleCurrentStep(
													currentImage - 1
												);
											}}
										/>
									</a>
									<a
										href="#"
										className="next round"
										onClick={(
											event: React.SyntheticEvent
										): void => {
											event.preventDefault();

											if (currentImage === 4) {
												return handleCurrentStep(1);
											}

											handleCurrentStep(currentImage + 1);
										}}
									>
										<img src={iconNext} alt="icon-next" />
									</a>
								</div>
								<div className="product__thumbnails mt-3">
									<div
										className={`img product__thumbnail ${
											currentImage === 1 ? "active" : ""
										}`}
										onClick={() => {
											handleCurrentStep(1);
										}}
									>
										<img
											src={product1Thumb}
											alt="product1Thumb"
										/>
									</div>
									<div
										className={`img product__thumbnail ${
											currentImage === 2 ? "active" : ""
										}`}
										onClick={() => {
											handleCurrentStep(2);
										}}
									>
										<img
											src={product2Thumb}
											alt="product2Thumb"
										/>
									</div>
									<div
										className={`img product__thumbnail ${
											currentImage === 3 ? "active" : ""
										}`}
										onClick={() => {
											handleCurrentStep(3);
										}}
									>
										<img
											src={product3Thumb}
											alt="product3Thumb"
										/>
									</div>
									<div
										className={`img product__thumbnail ${
											currentImage === 4 ? "active" : ""
										}`}
										onClick={() => {
											handleCurrentStep(4);
										}}
									>
										<img
											src={product4Thumb}
											alt="product4Thumb"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="col">
							<p className="primary-text bold">Sneaker Company</p>
							<h1>Fall Limited Edition Sneakers</h1>
							<p className="description mb-2 mt-2">
								These low-profile sneakers are your perfect
								casual wear companion. Featuring a durable
								rubber outer sole, they’ll withstand everything
								the weather can offer.
							</p>
							<div className="flex">
								<h2 className="price">$125.00</h2>
								<span className="label">50%</span>
							</div>
							<p className="price-striked mt-2">$250.00</p>
							<div className="flex-row gap-2 mt-2">
								<div className="input__group">
									<button className="btn btn--secondary">
										-
									</button>
									<div className="input">
										<input type="text" />
									</div>
									<button className="btn btn--secondary">
										+
									</button>
								</div>
								<button className="btn btn--primary">
									Add to cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
			<footer className="footer">
				<div className="attribution">
					Challenge by
					<a
						href="https://www.frontendmentor.io?ref=challenge"
						target="_blank"
					>
						Frontend Mentor
					</a>
					. Coded by <a href="#">Thomas Jonstrup</a>.
				</div>
			</footer>
		</>
	);
}

export default App;
