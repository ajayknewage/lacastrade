"use client";
import ConfirmationPopup from "@/components/ConfirmationPopup";
import { Fragment, useState } from "react";

const ConfirmationModal = () => {
  const [modal, setModal] = useState(false);

  return (
    <Fragment>
      <button
        onClick={() => setModal(true)}
        className="inline-flex items-center justify-center bg-primary  py-1.5 px-6 md:py-2  md:px-10 text-center text-xs md:text-sm font-medium text-white hover:bg-opacity-90 md:rounded-md my-4"
      >
        Confirmation Popup
      </button>
      {modal && (
        <ConfirmationPopup
          text="Are you sure you want to remove this user?"
          confirmHandler={() => setModal(false)}
          closeHandler={() => setModal(false)}
        />
      )}
    </Fragment>
  );
};

export default ConfirmationModal;
