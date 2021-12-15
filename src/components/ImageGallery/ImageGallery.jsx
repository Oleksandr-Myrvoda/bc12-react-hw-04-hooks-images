import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ hits, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {hits.map(({ id, webformatURL, largeImageURL, tags }, index) => (
        <ImageGalleryItem
          key={id + index}
          smallImage={webformatURL}
          largeImage={largeImageURL}
          alt={tags}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
