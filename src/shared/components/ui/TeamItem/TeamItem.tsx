import { Social } from "../Social/Social";
import styles from "./TeamItem.module.scss";

type TeamItemProps = {
	name: string;
	work: string;
	children: string;
};
export const TeamItem: React.FC<TeamItemProps> = ({ name, work, children }) => {
	return (
		<div className={styles.item}>
			<div className={styles.photo}>
				<img src="images/team.jpg" alt="" />
			</div>
			<div className={styles.body}>
				<h4>{name}</h4>
				<span>{work}</span>
				<p>{children}</p>
				<Social className={styles.social}></Social>
			</div>
		</div>
	);
};
