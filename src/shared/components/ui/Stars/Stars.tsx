import clsx from "clsx";
import { Icon } from "../Icon/Icon";
import styles from "./Stars.module.scss";

type StarsProps = {
	className?: string;
};
export const Stars: React.FC<StarsProps> = ({ className }) => {
	return (
		<div className={clsx(styles.root, className)}>
			<Icon name={"star"}></Icon>
			<Icon name={"star"}></Icon>
			<Icon name={"star"}></Icon>
			<Icon name={"star"}></Icon>
			<Icon name={"star"}></Icon>
		</div>
	);
};
