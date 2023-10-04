import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.Copyright}>
          &copy; Copyright
          {new Date().getFullYear()} by worldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
