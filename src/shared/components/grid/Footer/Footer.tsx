import clsx from "clsx";
import styles from "./Footer.module.scss";
import { Follow } from "../../ui";

export const Footer = () => {
	return (
		<footer className={styles["main-footer"]}>
			<div className={clsx(styles.body, ["content-center"])}>
				<div className={styles["top-content"]}>
					<a className={styles.logo} href="/">
						<img src="/images/white-logo.svg" alt="" />
					</a>
					<Follow></Follow>
				</div>
				<div className={styles["main-content"]}>
					<div className={styles.list}>
						<h5>Explore</h5>
						<ul>
							<li>
								<a href="">Home</a>
							</li>
							<li>
								<a href="">About Us</a>
							</li>
							<li>
								<a href="">Services</a>
							</li>
							<li>
								<a href="">Appointments</a>
							</li>
							<li>
								<a href="">Blog</a>
							</li>
							<li>
								<a href="">Contact Us</a>
							</li>
						</ul>
					</div>
					<div className={styles.list}>
						<h5>Utility Pages</h5>
						<ul>
							<li>
								<a href="">Start here</a>
							</li>
							<li>
								<a href="">Style guide</a>
							</li>
							<li>
								<a href="">404 not found</a>
							</li>
							<li>
								<a href="">Password protected</a>
							</li>
							<li>
								<a href="">Licenses</a>
							</li>
							<li>
								<a href="">Changelog</a>
							</li>
						</ul>
					</div>
					<div className={styles.list}>
						<h5>Keep in Touch</h5>
						<div className={styles.info}>
							Address :<a>24A Kingston St, Los Vegas NC 28202, USA.</a>
						</div>
						<div className={styles.info}>
							Mail :
							<a href="mail to:support@doctors.com">support@doctors.com</a>
						</div>
						<div className={styles.info}>
							Phone :
							<a href="tel: (+22) 123 - 4567 - 900">(+22) 123 - 4567 - 900</a>
						</div>
					</div>
					<div className={styles.list}>
						<h5>Working Hours</h5>
						<span className={styles.time}>Mon to Fri: 7am - 6pm</span>
						<span className={styles.time}>Sat: 9am - 7pm</span>
						<span className={styles.time}>Sun: 9am - 6pm</span>
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<span> Copyright 2021. Drafted by Victor Themes.</span>
			</div>
		</footer>
	);
};
