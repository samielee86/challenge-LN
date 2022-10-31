import React from "react";
import styles from "./Card.module.scss";

const Card = ({ art }) => {
	return (
		<article className={styles.article}>
			{art.type === "Regular" && art.img && (
				<div className={styles.img}>
					<img
						src={art.img}
						alt=""
						width="100%"
					/>
				</div>
			)}
			<div
				className={`${styles.cardBody} ${
					art.type === "Author" && styles.bodyAuthor
				}`}>
				<h3 className={styles.title}>
					{art.lead && (
						<span className={styles.lead}>{art.lead}. </span>
					)}
					{art.title}
				</h3>
				{art.subHead && <p className={styles.subhead}>{art.subHead}</p>}

				{art.type === "Author" && (
					<div className={styles.authorImg}>
						<img
							src={art.authorImg}
							alt=""
							width="100%"
						/>
					</div>
				)}
				{art.author && (
					<h4 className={styles.author}>Por {art.author}</h4>
				)}
			</div>
		</article>
	);
};

export default Card;
