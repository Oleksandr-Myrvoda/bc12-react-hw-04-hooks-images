import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const modalRootRef = document.querySelector("#modal-root");

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const onEscPress = (e) => {
      if (e.code === "Escape") {
        console.log("Escape");
        onClose();
      }
    };
    window.addEventListener("keydown", onEscPress);
    return () => {
      window.removeEventListener("keydown", onEscPress);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </header>

        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    modalRootRef
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  // icon: PropTypes.string.isRequired, //from props
  // title: PropTypes.string.isRequired, //from props
  children: PropTypes.node.isRequired,
};

export default Modal;

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.onEscPress);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.onEscPress);
//   }

//   onEscPress = (e) => {
//     if (e.code === "Escape") {
//       console.log("Escape");
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { onClose, children } = this.props;

//     return createPortal(
//       <div className={styles.backdrop} onClick={this.handleBackdropClick}>
//         <div className={styles.modal}>
//           <header className={styles.header}>
//             <button
//               type="button"
//               className={styles.closeBtn}
//               onClick={onClose}
//               aria-label="Close"
//             >
//               &times;
//             </button>
//           </header>

//           <div className={styles.content}>{children}</div>
//         </div>
//       </div>,
//       modalRootRef
//     );
//   }
// }

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   // icon: PropTypes.string.isRequired, //from props
//   // title: PropTypes.string.isRequired, //from props
//   children: PropTypes.node.isRequired,
// };

// export default Modal;
