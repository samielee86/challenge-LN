import React from "react";
import styles from "./Card.module.scss";

const Card = ({ art, id }) => {
	return (
		<article className={styles.article}>
			<div className={styles.img}>
				<img
					src={art.img}
					alt=""
					width="100%"
				/>
			</div>

			<div
				className={`${styles.cardBody} ${
					art.type === "Author" && styles.bodyAuthor
				}`}>
				<h3 className={styles.title}>
					<span className={styles.lead}>{art.lead}. </span>
					{art.title}
				</h3>

				<p className={styles.subhead}>{art.subHead}</p>

				<div className={styles.authorImg}>
					<img
						src={art.authorImg}
						alt=""
						width="100%"
					/>
				</div>

				<h4 className={styles.author}>Por {art.author}</h4>
			</div>
		</article>
	);
};

export default Card;
