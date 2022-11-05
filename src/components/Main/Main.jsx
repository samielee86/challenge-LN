import React from "react";
// import FocalIzquierdo from "../Containers/FocalIzquierdo";
import CardGroupX3 from "../Containers/CardGroupX3/CardGroupX3";
import styles from "./Main.module.scss";

const Main = () => {
	return (
		<section className={styles.section}>
			<CardGroupX3 title="Card Group x 3" />
			{/* <FocalIzquierdo /> */}
		</section>
	);
};

export default Main;
