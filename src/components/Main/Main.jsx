import React from "react";
import FocalIzquierdo from "../Containers/FocalIzquierdo/FocalIzquierdo";
import CardGroupX3 from "../Containers/CardGroupX3/CardGroupX3";
import "./Main.scss";

const Main = () => {
	return (
		<section className="mainSection">
			<div className="groupContainer">
				<CardGroupX3 title="Card Group x 3" />
				<FocalIzquierdo title="Focal Izquierdo" />
			</div>
			<div className="aside">
				<div className="asideText">Publicidad</div>
			</div>
		</section>
	);
};

export default Main;
