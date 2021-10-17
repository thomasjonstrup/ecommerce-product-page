import React, { FunctionComponent } from "react";

import product1Thumb from "../assets/images/image-product-1-thumbnail.jpg";

type CartProps = {
	show: boolean;
	/* 	title: string;
	paragraph?: string; // the paragraph is optional */
};

// No need to define the defaultProps property
export const Cart: FunctionComponent<CartProps> = ({
	show,
	/* 	title,
	paragraph = "Hello World", */
}) => (
	<div className={`cart${show ? " cart--show" : ""}`}>
		<h2>Cart</h2>
		<hr />

		<div className="cart__row">
			<div className={`cart__image`}>
				<img src={product1Thumb} alt="product1Thumb" />
			</div>
			<p>Fall Limited Edition Sneakers</p>
		</div>
	</div>
);
