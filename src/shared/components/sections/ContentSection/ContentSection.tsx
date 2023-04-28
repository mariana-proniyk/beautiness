import clsx from "clsx";
import { SectionTitle } from "../../ui";
import { ContentItem } from "../../ui/ContentItem/ContentItem";
import styles from "./ContentSection.module.scss";

export const ContentSection = () => {
	return (
		<section className={clsx(styles.root, ["root-center"])}>
			<SectionTitle
				className={styles.title}
				subTitle={"Our Values"}
				title={"The work values we thrive for"}
			></SectionTitle>
			<div className={styles.cards}>
				<ContentItem
					title={"Beauty Experts"}
					text={
						"The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages."
					}
				></ContentItem>
				<ContentItem
					title={"Great Services"}
					text={
						"The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages."
					}
				></ContentItem>
				<ContentItem
					title={"100% Genuine"}
					text={
						"The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages."
					}
				></ContentItem>
			</div>
		</section>
	);
};
