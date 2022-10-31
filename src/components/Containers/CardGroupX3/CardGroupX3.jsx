import React, { useState, useEffect } from "react";
import Card from "../../Card/Card";
import "./CardGroupX3.module.scss";
import articles from "../../../mock/db";

const CardGroupX3 = () => {
	const [arts, setArts] = useState([]);

	useEffect(() => {
		const getArts = new Promise((res, rej) => {
			setTimeout(() => {
				res(articles);
			});
		}, 500);

		getArts
			.then((data) => {
				setArts(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<section>
			{arts.map((art, i) => (
				<Card
					art={art}
					key={i}
				/>
			))}
		</section>
	);
};

export default CardGroupX3;

// no era necesario el useEffect ni useState. pasar todo por props
