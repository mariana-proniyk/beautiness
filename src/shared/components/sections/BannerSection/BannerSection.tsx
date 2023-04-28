import { Button } from "../../ui";
import { HeroTitle } from "../../ui/HeroTitle/HeroTitle";
import styles from "./BannerSection.module.scss";

type BannerSectionProps = {
	text: string;
};
export const BannerSection: React.FC<BannerSectionProps> = ({ text }) => {
	return (
		<section className={styles.root}>
			<div className={styles.container}>
				<HeroTitle
					className={styles.title}
					subTitle={"SHORT STORY ABOUT US"}
					title={"The big story behind, our beautyness center"}
				></HeroTitle>
				<Button className={styles.button} type={"is-primary"}>
					{text}
				</Button>
			</div>
		</section>
	);
};
