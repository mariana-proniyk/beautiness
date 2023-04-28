import clsx from "clsx";
import styles from "./Header.module.scss";
import { CallUs, Icon, Social } from "../../ui";
import { Button } from "../../ui/Button/Button";
import { Dropdown } from "../../ui/Dropdown/Dropdown";

export const Header = () => {
	return (
		<header className={clsx(styles.root, ["root-center"])}>
			<div className={styles["left-content"]}>
				<a className={styles.logo} href="/">
					<img src="/images/logo.svg" alt="" />
				</a>
				<CallUs></CallUs>
			</div>
			<div className={styles["right-content"]}>
				<nav>
					<ul>
						<li>
							<a href="">Home</a>
						</li>
						<div className={styles.dropdown}>
							<li>
								<a href="">Pages</a>
							</li>
							<Icon className={styles.icon} name={"arrow"}></Icon>
						</div>
						<li>
							<a href="">About</a>
						</li>
						<li>
							<a href="">Services</a>
						</li>
						<li>
							<a href="">Contact</a>
						</li>
					</ul>
				</nav>
				<Social className={styles.social}></Social>
				<Button className={styles.button} type={"is-primary"}>
					RESERVATION
				</Button>
			</div>
		</header>
	);
};
