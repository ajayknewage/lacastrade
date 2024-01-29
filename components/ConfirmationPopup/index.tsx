"use client";
import Image from "next/image";
import { FC, Fragment, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("body");

type ButtonTypes = "success" | "danger" | "black" | "primary" | "info";

const ConfirmationPopup: FC<{
  text: string;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: ButtonTypes;
  cancelVariant?: ButtonTypes;
  closeHandler: () => void;
  confirmHandler: () => void;
}> = ({
  text,
  confirmText = "Yes",
  cancelText = "No",
  confirmVariant = "danger",
  cancelVariant = "black",
  closeHandler,
  confirmHandler,
}) => {
  const getButtonClass = (type: ButtonTypes) => {
    switch (type) {
      case "black":
        return "bg-black";
      case "danger":
        return "bg-danger";
      case "info":
        return "bg-meta-5";
      case "primary":
        return "bg-primary";
      case "success":
        return "bg-success";
      default:
        return "bg-danger";
    }
  };

  return (
    <Fragment>
      <Modal
        isOpen
        onRequestClose={closeHandler}
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
            border: "none",
            boxShadow: "1px 0px 4px 4px rgba(0,0,0,0.1)",
          },
        }}
      >
        <div className="max-w-180 lg:min-w-[400px] py-2 px-10">
          <div>
            <div className="flex justify-center animate-pulse">
              <Image
                alt="info"
                src={"/images/icon/info.svg"}
                width={50}
                height={50}
              />
            </div>
            <div className="font-satoshi text-lg mt-2 text-center">{text}</div>
            <div className="flex gap-5">
              <button
                onClick={closeHandler}
                className={`uppercase inline-flex items-center justify-center py-1.5 md:py-2 px-10 text-center text-sm font-medium text-white hover:bg-opacity-90 my-4 w-full ${getButtonClass(
                  cancelVariant
                )}`}
                style={{
                  borderRadius: "4px",
                }}
              >
                {cancelText}
              </button>
              <button
                onClick={confirmHandler}
                className={`uppercase inline-flex items-center justify-center py-1.5 md:py-2 px-10 text-center text-sm font-medium text-white hover:bg-opacity-90 my-4 w-full ${getButtonClass(
                  confirmVariant
                )}`}
                style={{
                  borderRadius: "4px",
                }}
              >
                {confirmText}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default ConfirmationPopup;
