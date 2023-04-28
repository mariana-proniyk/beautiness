import clsx from "clsx";
import styles from "./Button.module.scss";
import { IconsId } from "../../../types";
import { Icon } from "../Icon/Icon";

type ButtonProps = {
	type: "is-border" | "is-primary";
	className?: string;
	children?: React.ReactNode;
	isDisabled?: boolean;
	icon?: IconsId;
};

export const Button: React.FC<ButtonProps> = ({
	type,
	className,
	children,
	isDisabled,
	icon,
}) => {
	return (
		<button
			className={clsx(styles.root, className, styles[type], {
				[styles["is-disabled"]]: isDisabled,
			})}
		>
			{children}
		</button>
	);
};
