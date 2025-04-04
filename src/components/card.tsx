import type { CardProps } from "../types/types";

import "../style/card.css";

export default function Card({ title, description, price, image }: CardProps) {
	return (
		<section className="card">
			<img src={image} alt="article pic" />
			<h2>{title}</h2>
			<span>Prix: {price}€</span>
			<p>{description}</p>
		</section>
	);
}
