import { useState, useEffect } from "react";
import fetchHits from "./services/apiService";
import Modal from "./components/Modal";
import ImageGallery from "./components/ImageGallery";
import Spinner from "./components/Loader";
import Searchbar from "./components/Searchbar";
import Button from "./components/Button";

import styles from "./App.module.css";

const MODAL = {
  NONE: "none",
  OPEN: "open",
  // EDIT: "edit",
  // DELETE: "delete",
};

const App = () => {
  const [openedModal, setOpenedModal] = useState(MODAL.NONE);
  const [hits, setHits] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(null);
  const [largeImage, setLargeImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (query) => {
    if (query === searchQuery) return;

    setSearchQuery(query);
    setCurrentPage(1);
    setHits([]);
  };

  const openModal = (img) => {
    setOpenedModal(MODAL.OPEN);
    setLargeImage(img);
  };

  const closeModal = () => setOpenedModal(MODAL.NONE);
  const search = () => setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  // const getDataApi = (currentPage, searchQuery) => {
  //   // if (!searchQuery) return;
  //   setIsLoading(true);

  //   fetchHits({ currentPage, searchQuery })
  //     .then((hits) => {
  //       setHits((prevHits) => [...prevHits, ...hits]);
  //     })
  //     .catch((error) => setError(error.message))
  //     .finally(() => {
  //       setIsLoading(false);

  //       window.scrollTo({
  //         top: document.documentElement.scrollHeight,
  //         behavior: "smooth",
  //       });
  //     });
  // };

  useEffect(() => {
    if (!searchQuery) return;

    const getDataApi = () => {
      setIsLoading(true);

      fetchHits({ currentPage, searchQuery })
        .then((hits) => {
          setHits((prevHits) => [...prevHits, ...hits]);
        })
        .catch((error) => setError(error.message))
        .finally(() => {
          setIsLoading(false);

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        });
    };

    getDataApi();
  }, [currentPage, searchQuery]);

  const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;

  return (
    <div className={styles.app}>
      <Searchbar onSubmit={handleSearch} />
      {hits.length > 0 && <ImageGallery hits={hits} onClick={openModal} />}
      {isLoading && <Spinner />}
      {shouldRenderLoadMoreButton && <Button onClick={search} />}

      {openedModal === MODAL.OPEN && (
        <Modal onClose={closeModal} largeImage={largeImage}>
          <img src={largeImage} alt="" />
        </Modal>
      )}
    </div>
  );
};

export default App;
