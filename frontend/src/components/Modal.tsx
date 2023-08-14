import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  children: React.ReactNode;
}

const backdropVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      durtion: 1,
      delayChildren: 0.2,
    },
  },
};

const modalVariant = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
    },
  },
};

const Modal: FC<Props> = ({ isOpen, setIsOpen, children }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal-container" variants={modalVariant}>
            {children}
            <motion.div
              whileHover={{ rotate: 45 }}
              className="close"
              onClick={() => setIsOpen(false)}
            >
              <div></div>
              <div></div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;


// import ReactModal from 'react-modal';
// import ReactDOM from 'react-dom';
// import Link from 'next/link';
// import motion from 'framer-motion';
// import AnimatePresence from 'framer-motion';
//
// interface Props {
//   isOpen: boolean;
//   setIsOpen: (state: boolean) => void;
//   title?: string;
//   children: React.ReactNode;
// }
//
// const Modal = ({ isOpen, setIsOpen, title = null, children }: Props) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div className="modal-overlay">
//           <motion.div className="modal-wrapper">
//             <div className="modal">
//               {title && <h1>{title}</h1>}
//               <div className="modal-body">{children}</div>
//               <motion.div className="close" onClick={() => setIsOpen(false)}>
//                 <div></div>
//                 <div></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </AnimatePresence>
//   )
//
//   return ReactDOM.createPortal(
//     modalContent,
//     document.getElementById("modal-root")
//   )
// }
//
// export default Modal;
