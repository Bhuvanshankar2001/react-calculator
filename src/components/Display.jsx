import styles from "./Display.module.css";

const Display = ({ displayvalue }) => {
  return (
    <input
      className={styles.display}
      value={displayvalue}
      type="text"
      readOnly
    />
  );
};

export default Display;
