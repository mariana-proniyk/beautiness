import clsx from "clsx";
import styles from "./HeroTitle.module.scss";

type HeroTitleProps = {
	subTitle: string;
	title: string;
	className?: string;
};
export const HeroTitle: React.FC<HeroTitleProps> = ({
	title,
	subTitle,
	className,
}) => {
	return (
		<div className={clsx(styles.root, className)}>
			<span>{subTitle}</span>
			<h2>{title}</h2>
		</div>
	);
};
