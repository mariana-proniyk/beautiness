import clsx from "clsx";
import styles from "./FollowSection.module.scss";
import { Button, SectionTitle } from "../../ui";

export const FollowSection = () => {
	return (
		<section className={clsx(styles.root, ["content-center"])}>
			<div className={styles.body}>
				<div className={styles["left-content"]}>
					<SectionTitle
						className={styles.title}
						subTitle={"Share us"}
						title={"Follow us on Instagram"}
					></SectionTitle>
					<p>
						There are many variations of passages of Lorem Ipsum available, but
						the majority have suffered alteration in some form, buying to
						injected humour, or randomised words many desktop publishing
						packages.
					</p>
					<img src="images/decor.jpg" alt="" />
				</div>
				<div className={styles["right-content"]}>
					<img src="images/decor.jpg" alt="" />
					<img src="images/decor.jpg" alt="" />
				</div>
			</div>
			<Button className={styles.button} type={"is-primary"}>
				Contact US
			</Button>
		</section>
	);
};
