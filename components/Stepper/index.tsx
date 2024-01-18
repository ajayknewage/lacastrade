"use client";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment, { Moment } from "moment";
import { useState } from "react";

const Stepper = () => {
  const [steps, setSteps] = useState<
    {
      title: string;
      updated_at: Moment;
      active: boolean;
    }[]
  >([
    {
      title: "Order Created",
      updated_at: moment(),
      active: true,
    },
    {
      title: "Payment Success",
      updated_at: moment(),
      active: true,
    },
    {
      title: "On Delivery",
      updated_at: moment(),
      active: false,
    },
    {
      title: "Order Delivered",
      updated_at: moment(),
      active: false,
    },
  ]);

  return (
    <div className="flex p-10 justify-between">
      {steps.map((item, index) => (
        <div className="flex flex-col w-100" key={index}>
          <div className="relative flex items-center">
            <span
              className={`w-12 h-12 ${
                item.active
                  ? "bg-success"
                  : steps[index - 1].active
                  ? "bg-warning"
                  : "bg-bodydark1"
              } rounded-full text-white flex justify-center items-center z-10`}
            >
              <FontAwesomeIcon icon={faCheck} size="2x" />
            </span>
            <span
              className={`w-12 h-12 rounded-full z-10 absolute border-4 ${
                item.active
                  ? "border-success"
                  : steps[index - 1].active
                  ? "border-meta-8 animate-pulse"
                  : "border-bodydark1"
              }`}
            ></span>
            <div
              className={`h-2 w-full ${
                item.active ? "bg-success" : "bg-bodydark1"
              } absolute z-1 ${index === steps.length - 1 ? "hidden" : ""}`}
            ></div>
          </div>

          <span className="font-semibold mt-2">{item.title}</span>
          <span className="text-sm">{item.updated_at.format("LLL")}</span>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
