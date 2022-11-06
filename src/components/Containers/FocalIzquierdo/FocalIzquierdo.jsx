import React from "react";
import Card from "../../Card/Card";
import styles from "./FocalIzquierdo.module.scss";
import { artFocalIX3 } from "../../../mock/db";

const FocalIzquierdo = ({ title }) => {
	return (
		<section className={styles.section}>
			<div className={styles.h3}>
				<h3>{title}</h3>
			</div>
			<div className={styles.container}>
				{artFocalIX3.map((art, i) => (
					<Card
						art={art}
						key={i}
						id={i + 1}
					/>
				))}
			</div>
		</section>
	);
};

export default FocalIzquierdo;
