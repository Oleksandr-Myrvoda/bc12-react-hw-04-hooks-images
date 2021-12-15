import Loader from "react-loader-spinner";

import styles from "./Loader.module.css";

const Spinner = () => {
  return (
    <Loader
      className={styles.loader}
      type="ThreeDots"
      color="#3f51b5"
      height={120}
      width={120}
      timeout={3000}
    />
  );
};

export default Spinner;
