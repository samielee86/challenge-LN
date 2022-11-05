import React from "react";
import Card from "../../Card/Card";
import styles from "./CardGroupX3.module.scss";
import { artGroupX3 } from "../../../mock/db";

const CardGroupX3 = ({ title }) => {
	return (
		<section className={styles.section}>
			<div className={styles.h2}>
				<h2>{title}</h2>
			</div>
			<div className={styles.container}>
				{artGroupX3.map((art, i) => (
					<Card
						art={art}
						key={i}
					/>
				))}
			</div>
		</section>
	);
};

export default CardGroupX3;
