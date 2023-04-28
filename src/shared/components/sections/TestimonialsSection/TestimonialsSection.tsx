import clsx from "clsx";
import styles from "./TestimonialsSection.module.scss";
import { HeroTitle, SectionTitle } from "../../ui";
import { TestimonialItem } from "../../ui/TestimonialItem/TestimonialItem";

export const TestimonialsSection = () => {
	return (
		<section className={styles.root}>
			<div className={clsx(styles.body, ["content-center"])}>
				<SectionTitle
					className={styles.title}
					subTitle={"Testimonials"}
					title={"What our Customers says..."}
				></SectionTitle>
				<div className={styles.cards}>
					<TestimonialItem
						name={"James Williams"}
						country={"United States"}
						text={
							"“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “"
						}
					></TestimonialItem>
					<TestimonialItem
						name={"Lieo Jessica"}
						country={"United Kingdom"}
						text={
							"“ It is a long established fact that a reader will be tracked distracted by the readable content of a page is when looking at its layout. The point of using Lorem of distribution it look like readable English “"
						}
					></TestimonialItem>
				</div>
			</div>
		</section>
	);
};
