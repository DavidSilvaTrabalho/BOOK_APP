"Made by DavidSilvaTrabalho at 07/12/22, 02:34";

import React from "react";
import styles from "./NavBar.module.css";
import logo from "./../../assets/favicon-32x32.png";

function NavBar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navcontainer}>
				<figcaption>
					<img tabIndex={0} src={logo} alt="favicon" />
				</figcaption>
				<h1 tabIndex={1} className={styles.title}>Bookthemall</h1>
			</div>

			<div className={styles.input}>
				<input type="text" placeholder="Search" />
			</div>

			<div className={styles.containerbutton}>
				<button>Login</button>
				<button className={styles.signup}>Sing-up</button>
			</div>
		</nav>
	);
}

export default NavBar;
