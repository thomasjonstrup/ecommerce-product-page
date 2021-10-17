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
import { Cart } from "./components/Cart";

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
	const [itemCount, setItemCount] = useState<number>(1);
	const [cartCount, setCartCount] = useState<number>(1);
	const [showCart, setShowCart] = useState<boolean>(false);

	const image: any = images[`product${currentImage}`];

	const handleCurrentStep = (step: number): void => {
		setCurrentImage(step);
	};

	return (
		<>
			<header className="header">
				<div className="container">
					<nav className="header__nav">
						<div className="right">
							<div className="header__menu">
								<svg
									width="16"
									height="15"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
										fill="#69707D"
										fill-rule="evenodd"
									/>
								</svg>
							</div>
							<div className="header__logo">
								<img
									src={logo}
									className="App-logo"
									alt="logo"
								/>
							</div>
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
							<div className="header__cart">
								<div
									className="icon-cart"
									onClick={() => {
										setShowCart(!showCart);
									}}
								>
									<img src={iconCart} alt="icon-cart" />
									{cartCount > 0 && <span>{cartCount}</span>}
								</div>
							</div>
							<div className="avatar">
								<img src={imageAvatar} alt="image-avatar" />
							</div>
						</div>
					</nav>
				</div>
				<Cart show={showCart} />
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
						<div className="col col-p">
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
									<button
										className="btn btn--secondary"
										onClick={() => {
											if (itemCount > 0) {
												setItemCount(itemCount - 1);
											}
										}}
									>
										-
									</button>
									<div className="input">
										<input type="text" value={itemCount} />
									</div>
									<button
										className="btn btn--secondary"
										onClick={() => {
											setItemCount(itemCount + 1);
										}}
									>
										+
									</button>
								</div>
								<button
									className="btn btn--primary"
									onClick={() => {
										setCartCount(itemCount);
									}}
								>
									<svg
										width="22"
										height="20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
											fill="hsl(0, 0%, 100%)"
											fill-rule="nonzero"
										/>
									</svg>
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
