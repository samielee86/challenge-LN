import React from "react";
import styles from "./Card.module.scss";

const Card = ({ art, id }) => {
	const isRegular = () => {
		return art.type === "Regular";
	};

	const isAuthor = () => {
		return art.type === "Author";
	};

	const isFirstChildFocalI = () => {
		return id === 1;
	};

	return (
		<article
			className={`${styles.article} ${
				isAuthor() ? styles.articleAuthor : ""
			} ${`card${id}`}`}>
			{isRegular() ? (
				<img
					className={styles.img}
					src={art.img}
					alt=""
					width="100%"
				/>
			) : (
				<></>
			)}
			<div
				className={`${styles.cardBody} ${
					isAuthor() ? styles.bodyAuthor : ""
				}`}>
				<h3 className={styles.title}>
					{art.lead ? (
						<span className={styles.lead}>{art.lead}. </span>
					) : (
						<></>
					)}
					{art.title}
				</h3>
				<span
					className={`${
						isFirstChildFocalI()
							? styles.firstSubhead
							: styles.subhead
					}`}>
					{art.subhead}
				</span>
				<div className={styles.authorContainer}>
					{isAuthor() ? (
						<div className={styles.authorImg}>
							<img
								src={art.authorImg}
								alt=""
								width="100%"
							/>
						</div>
					) : (
						<></>
					)}

					{art.author ? (
						<span className={styles.author}>Por {art.author}</span>
					) : (
						<></>
					)}
				</div>
			</div>
		</article>
	);
};

export default Card;
