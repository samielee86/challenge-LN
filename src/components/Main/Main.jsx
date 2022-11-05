import React from "react";
import FocalIzquierdo from "../Containers/FocalIzquierdo/FocalIzquierdo";
import styles from "./Main.module.scss";

const Main = () => {
	return (
		<section className={styles.section}>
			<FocalIzquierdo title="Focal Izquierdo" />
		</section>
	);
};

export default Main;
