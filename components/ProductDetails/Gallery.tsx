"use client";
import Image from "next/image";
import { useState } from "react";

export const Gallery = () => {
  const [index, setIndex] = useState(1);

  return (
    <div className="flex flex-col items-center lg:items-start">
      <div
        className="overflow-hidden rounded-sm border border-stroke bg-white px-5 pt-7 pb-7 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 animate-fade-in"
        style={{ width: "500px", height: "500px" }}
      >
        <Image
          src={`/images/cards/cards-0${index}.png`}
          alt="image"
          width={500}
          height={500}
          className="object-cover rounded-sm"
          style={{
            height: "100%",
          }}
        />
      </div>
      <div className="flex gap-2 mt-2">
        {[...Array(5)].map((item, k) => (
          <div
            className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-2 cursor-pointer animate-fade-in"
            style={{ width: "80px", height: "80px" }}
            key={k}
          >
            <Image
              src={`/images/cards/cards-0${k + 1}.png`}
              alt="image"
              width={80}
              height={80}
              className="object-cover rounded-sm "
              style={{
                height: "100%",
              }}
              onClick={() => setIndex(k + 1)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
