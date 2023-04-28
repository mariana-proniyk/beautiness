import styles from "./Dropdown.module.scss";
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { Icon } from "../Icon/Icon";

export const Dropdown = () => {
	const [title, setTitle] = React.useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setTitle(event.target.value as string);
	};

	{
		return (
			<>
				<InputLabel className={styles.dropdown} id="demo-simple-select-label">
					Pages
				</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={title}
					label="Pages"
					onChange={handleChange}
				>
					<MenuItem value={1}>About</MenuItem>
					<MenuItem value={2}>Services</MenuItem>
					<MenuItem value={3}>Team</MenuItem>
					<MenuItem value={4}>Blog</MenuItem>
					<MenuItem value={5}>Locations</MenuItem>
					<MenuItem value={6}>Contact</MenuItem>
				</Select>
			</>
		);
	}
};
