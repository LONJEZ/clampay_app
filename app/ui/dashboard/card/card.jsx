import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>245</span>
        <span className={styles.deatil}>
          <span className={styles.postive}>12%</span>
          <span>more than previous week</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
