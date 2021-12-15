import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ smallImage, largeImage, onClick, alt }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        onClick={() => onClick(largeImage)}
        src={smallImage}
        alt={alt}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
