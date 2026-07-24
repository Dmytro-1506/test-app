import { Link } from "react-router-dom";

import styles from "./Navigation.module.css"

export default function Navigation() {
    return (
        <div className={styles.navBox}>

            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/login">Login</Link>

        </div>
        
    )
}