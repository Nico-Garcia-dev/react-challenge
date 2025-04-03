import type { CardProps } from "../types/types";

export default function Card({
	title,
	description,
	price,
	image,
	category,
}: CardProps) {
	return (
		<section>
			<img src={image} alt="article pic" />
			<h2>{title}</h2>
			<p>{description}</p>
			<span>{price}</span>
			<h3>{category}</h3>
		</section>
	);
}
