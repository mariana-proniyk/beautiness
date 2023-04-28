import { Icon } from "../Icon/Icon";
import styles from "./CallUs.module.scss";

export const CallUs = () => {
	return (
		<div className={styles.root}>
			<div className={styles.text}>
				<Icon className={styles.icon} name={"phone"}></Icon>
				<span>Call Us -</span>
			</div>
			<a href="tel: (+22) 123 456 7890">(+22) 123 456 7890</a>
		</div>
	);
};
