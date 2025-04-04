import data from "../data/data.json";
import type { ArticleType } from "../types/types.ts";

import "../style/cardList.css";

import Card from "./card";

export default function CardList() {
	return (
		<main>
			{data.map((d: ArticleType) => (
				<Card
					key={d.id}
					title={d.title}
					description={d.description}
					price={d.price}
					image={d.image}
					category={d.category}
				/>
			))}
		</main>
	);
}
