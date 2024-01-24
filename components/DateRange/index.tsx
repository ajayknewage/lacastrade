"use client";
import styles from "./date-range.module.scss";
import { FC, useEffect, useRef, useState } from "react";
import moment from "moment";
import isMobile from "is-mobile";
import { DateRangePicker, Range } from "react-date-range";

const DateRange: FC<{
  startDate: Date | null;
  endDate: Date | null;
  dateRangeHandler: (startDate: Date | null, endDate: Date | null) => void;
}> = ({ startDate, endDate, dateRangeHandler }) => {
  const [date, setDate] = useState<Range[]>([]);
  const dropRef = useRef<HTMLButtonElement>(null);

  const id = useState(Date.now());

  const [show, setShow] = useState(false);

  useEffect(() => {
    setDate([
      {
        startDate: startDate || new Date(),
        endDate: endDate || new Date(),
        key: "selection",
      },
    ]);
  }, [startDate, endDate]);

  useEffect(() => {
    const listener = () => {
      document.getElementById("__next")?.classList.toggle(styles.overflower);
    };

    if (id)
      document
        .getElementById("date-toggler-" + id)
        ?.addEventListener("click", listener);

    return () => {
      document
        .getElementById("date-toggler-" + id)
        ?.removeEventListener("click", listener);
    };
  }, [id]);

  return (
    <div className="relative inline-block text-left">
      <div
        className="flex gap-2 items-center border-2 border-stroke dark:border-strokedark rounded-md py-1 px-4 cursor-pointer"
        onClick={() => setShow(true)}
      >
        <div className={`${styles.icon} pr-1`}>
          <svg width="17.25" height="19.028" viewBox="0 0 17.25 19.028">
            <g id="calendar" transform="translate(0.625 0.625)">
              <rect
                id="Rectangle_108"
                data-name="Rectangle 108"
                width="16"
                height="15.778"
                rx="2"
                transform="translate(0 2)"
                fill="none"
                stroke="#aeaeae"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.25"
              ></rect>
              <path
                id="Path_17009"
                data-name="Path 17009"
                d="M11.556,0V4M4.444,0V4M0,8H16"
                fill="none"
                stroke="#aeaeae"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.25"
                fillRule="evenodd"
              ></path>
            </g>
          </svg>
        </div>
        <div
          className={`text-sm sm:min-w-42.5 py-2 px-4 border-x-2 border-stroke dark:border-strokedark m-0 ${styles.in1}`}
          style={
            !startDate
              ? {
                  color: "#8f8f8f",
                }
              : {}
          }
        >
          {startDate ? moment(startDate).format("MM-DD-YYYY") : "Start Date"}
        </div>
        <div
          className={`text-sm min-w-42.5 py-2 px-4  m-0 ${styles.in2}`}
          style={
            !endDate
              ? {
                  color: "#8f8f8f",
                }
              : {}
          }
        >
          {endDate ? moment(endDate).format("MM-DD-YYYY") : "End Date"}
        </div>
      </div>

      <div
        className={`absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
          show ? "block" : "hidden"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          <DateRangePicker
            onChange={({ selection }) => {
              dateRangeHandler(
                selection.startDate || null,
                selection.endDate || null
              );
            }}
            showPreview
            moveRangeOnFirstSelection={false}
            ranges={date}
            direction="vertical"
          />
          <div className="flex justify-end gap-3 m-2">
            <button
              className="uppercase flex justify-center rounded bg-black py-1 px-2 font-medium text-sm text-gray hover:bg-opacity-95"
              onClick={() => {
                setShow(false);
              }}
            >
              Close
            </button>
            <button
              className="uppercase flex justify-center rounded bg-danger py-1 px-2 font-medium text-sm text-gray hover:bg-opacity-95"
              onClick={() => {
                dateRangeHandler(null, null);
                setShow(false);
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateRange;
