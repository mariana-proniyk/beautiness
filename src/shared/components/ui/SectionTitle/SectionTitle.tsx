import clsx from "clsx";
import styles from "./SectionTitle.module.scss";

type SectionTitleProps = {
	subTitle: string;
	title: string;
	className?: string;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({
	title,
	subTitle,
	className,
}) => {
	return (
		<div className={clsx(styles.root, className)}>
			<span>{subTitle}</span>
			<h3>{title}</h3>
		</div>
	);
};
