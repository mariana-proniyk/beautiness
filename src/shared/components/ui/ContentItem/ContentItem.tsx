import styles from "./ContentItem.module.scss";

type ContentItemProps = {
	title: string;
	text: string;
};
export const ContentItem: React.FC<ContentItemProps> = ({ title, text }) => {
	return (
		<div className={styles.item}>
			<div className={styles.photo}>
				<img src="images/item.png" alt="" />
			</div>
			<div className={styles.body}>
				<h5>{title}</h5>
				<p>{text}</p>
			</div>
		</div>
	);
};
