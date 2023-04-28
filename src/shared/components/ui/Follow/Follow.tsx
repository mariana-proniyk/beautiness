import clsx from "clsx";
import { Icon } from "../Icon/Icon";
import styles from "./Follow.module.scss";

type FollowProps = {
	className?: string;
};
export const Follow: React.FC<FollowProps> = ({ className }) => {
	return (
		<div className={clsx(styles.follow, className)}>
			<div className={styles.icon}>
				<Icon name={"facebook"}></Icon>
			</div>
			<div className={styles.icon}>
				<Icon name={"twitter"}></Icon>
			</div>
			<div className={styles.icon}>
				<Icon name={"in"}></Icon>
			</div>
			<div className={styles.icon}>
				<Icon name={"instagram"}></Icon>
			</div>
		</div>
	);
};
