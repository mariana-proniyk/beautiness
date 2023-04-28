import clsx from "clsx";
import styles from "./OurTeamSection.module.scss";
import { SectionTitle } from "../../ui";
import { TeamItem } from "../../ui/TeamItem/TeamItem";

export const OurTeamSection = () => {
	return (
		<section className={clsx(styles.root, ["root-center"])}>
			<SectionTitle
				className={styles.title}
				subTitle={"Meet our Experts"}
				title={"The amazing women behind Beautyness"}
			></SectionTitle>
			<div className={styles.cards}>
				<TeamItem
					name={"Sherlin D’Cruz"}
					work={"Beautyness Expert"}
					children={
						"I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain"
					}
				></TeamItem>
				<TeamItem
					name={"Maria Sharapova"}
					work={"Beautyness Expert"}
					children={
						"I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain"
					}
				></TeamItem>
				<TeamItem
					name={"Angeline Jenifer"}
					work={"Beautyness Expert"}
					children={
						"I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain"
					}
				></TeamItem>
			</div>
		</section>
	);
};
