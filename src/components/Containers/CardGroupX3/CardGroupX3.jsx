import React from "react";
import Card from "../../Card/Card";
import "./CardGroupX3.module.scss";
import articles from "../../../mock/db";

const CardGroupX3 = () => {
	return (
		<section>
			{articles.map((art, i) => (
				<Card
					art={art}
					key={i}
				/>
			))}
		</section>
	);
};

export default CardGroupX3;
