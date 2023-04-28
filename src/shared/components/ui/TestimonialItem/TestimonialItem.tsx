import { Stars } from "../Stars/Stars";
import styles from "./TestimonialItem.module.scss";

type TestimonialItemProps = {
	name: string;
	country: string;
	text: string;
};
export const TestimonialItem: React.FC<TestimonialItemProps> = ({
	name,
	country,
	text,
}) => {
	return (
		<div className={styles.root}>
			<p>{text}</p>
			<div className={styles.autor}>
				<div className={styles.photo}>
					<img src="images/user.jpg" alt="" />
				</div>
				<div className={styles.body}>
					<Stars></Stars>
					<h6>{name}</h6>
					<span>{country}</span>
				</div>
			</div>
		</div>
	);
};
