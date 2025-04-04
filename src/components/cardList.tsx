import { useState } from "react";
import type { ArticleType } from "../types/types.ts";

import data from "../data/data.json";
import "../style/cardList.css";

import Card from "./card";

export default function CardList() {
	// putting items category on an array to handle filter buttons creation
	const categArray: string[] = [
		...new Set(data.map((item) => item.category)),
		"all",
	];
	//console.log(categArray);

	//Filtering logic
	// using useState to get the filtered category: initialized for all objects categories
	const [filtered, setFiltered] = useState("all");
	//Using handleclick for the event triggering
	function handleClickCategory(e) {
		setFiltered(e.target.textContent);

		console.log(filtered);
	}
	// displaying filtered objects using filter()
	const filteredData = data.filter(
		(item) => item.category === filtered || "all" === filtered,
	);

	return (
		<main>
			<div className="filterBtn">
				{categArray.map((c) => (
					<button type="button" key={`k.${c}`} onClick={handleClickCategory}>
						{c}
					</button>
				))}
			</div>

			<div className="cards">
				{filteredData.map((f: ArticleType) => (
					<Card
						key={f.id}
						title={f.title}
						description={f.description}
						price={f.price}
						image={f.image}
						category={f.category}
					/>
				))}
			</div>
		</main>
	);
}
