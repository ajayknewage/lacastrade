"use client";
import { Fragment, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("body");

const CustomModal = () => {
  const [modal, setModal] = useState(false);

  return (
    <Fragment>
      <button
        onClick={() => setModal(true)}
        className="inline-flex items-center justify-center bg-primary  py-1.5 px-6 md:py-2  md:px-10 text-center text-xs md:text-sm font-medium text-white hover:bg-opacity-90 md:rounded-md my-4"
      >
        Modal
      </button>
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        contentLabel="Example Modal"
        style={{
          overlay: {
            zIndex: 10000,
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <h2>Custom Modal</h2>
      </Modal>
    </Fragment>
  );
};

export default CustomModal;
