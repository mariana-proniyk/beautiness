import clsx from "clsx";
import styles from "./AboutSection.module.scss";
import { SectionTitle } from "../../ui";

export const AboutSection = () => {
	return (
		<section className={clsx(styles.root, ["root-center"])}>
			<div className={clsx(styles.container, ["content-center"])}>
				<div className={styles.body}>
					<SectionTitle
						className={styles.title}
						subTitle={"About Us"}
						title={"Style is a Reflection of your Attitude & your Personality"}
					></SectionTitle>
					<p>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, buying to
						injected humour, or randomised words which don't look even many
						desktop publishing packages.
					</p>
				</div>
			</div>
			<img className={styles.photo} src="images/image.jpg" alt="" />
		</section>
	);
};
