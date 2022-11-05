import React from "react";
import Card from "../../Card/Card";
import "./FocalIzquierdo.module.scss";
import articles from "../../../mock/db";

const FocalIzquierdo = ({ title }) => {
	// mapeo de articulos y asignacion de identificador para ubicarlos en donde queremos
	// pasar por prop en cada componente card la info segun el tipo.
	return (
		<section>
			<h2>{title}</h2>
			<div>
				{articles.map((art, i) => (
					<Card
						art={art}
						key={i}
						id={i}
					/>
				))}
			</div>
		</section>
	);
};

export default FocalIzquierdo;
