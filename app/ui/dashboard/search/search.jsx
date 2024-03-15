import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
const Search = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input type="text" placeholder={placeholder} className={styles.input} />
        <div className={styles.button}>
          <MdSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
