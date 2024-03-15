import styles from "./transaction.module.css";
import Image from "next/image";

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr className={styles.header}>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Transactions details</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.row}>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Carlos lonjez
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>01.03.2024</td>
            <td>
              <span className={styles.details}>
                Transfer <span className={styles.account}>45090</span>{" "}
                <span className={styles.asset}>GAMING LAPTOP </span>{" "}
                <span className={styles.reference}>
                  MPESA SAV80KFHS0790798200 A
                </span>
              </span>
            </td>
            <td>Ksh 2000</td>
          </tr>

          <tr className={styles.row}>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Carlos lonjez
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>01.03.2024</td>
            <td>
              <span className={styles.details}>
                Transfer <span className={styles.account}>45090</span>{" "}
                <span className={styles.asset}>GAMING LAPTOP </span>{" "}
                <span className={styles.reference}>
                  MPESA SAV80KFHS0790798200 A
                </span>
              </span>
            </td>
            <td>Ksh 2000</td>
          </tr>

          <tr className={styles.row}>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Carlos lonjez
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>01.03.2024</td>
            <td>
              <span className={styles.details}>
                Transfer <span className={styles.account}>45090</span>{" "}
                <span className={styles.asset}>GAMING LAPTOP </span>{" "}
                <span className={styles.reference}>
                  MPESA SAV80KFHS0790798200 A
                </span>
              </span>
            </td>
            <td>Ksh 2000</td>
          </tr>

          <tr className={styles.row}>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Carlos lonjez
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>01.03.2024</td>
            <td>
              <span className={styles.details}>
                Transfer <span className={styles.account}>45090</span>{" "}
                <span className={styles.asset}>GAMING LAPTOP </span>{" "}
                <span className={styles.reference}>
                  MPESA SAV80KFHS0790798200 A
                </span>
              </span>
            </td>
            <td>Ksh 2000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
