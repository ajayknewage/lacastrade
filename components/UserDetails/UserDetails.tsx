"use client";
import { Fragment, useState } from "react";
import PreviewDetails from "./PreviewDetails";
import EditDetails from "./EditDetails";
import ResetPassword from "./ResetPassword";

export const UserDetails = () => {
  const [index, setIndex] = useState(0);
  return (
    <Fragment>
      {index === 0 && <PreviewDetails setIndex={setIndex} />}{" "}
      {index === 1 && <EditDetails setIndex={setIndex} />}
      {index === 1 && <ResetPassword setIndex={setIndex} />}
    </Fragment>
  );
};
