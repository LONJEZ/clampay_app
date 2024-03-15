"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  //MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." className={styles.input} />
          <div className={styles.button}>
            <MdSearch />
          </div>
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
        </div>
        <div className={styles.user}>
          <Image
            className={styles.userImage}
            src={"/noavatar.png"}
            alt=""
            width="50"
            height="50"
          />
          <div className={styles.userDetail}>
            <span className={styles.username}>Enevald Bravo</span>
            <span className={styles.userTitle}>Administrator</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
