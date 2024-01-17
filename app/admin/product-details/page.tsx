import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";

import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export const metadata: Metadata = {
  title: "Product | ReCastTrade",
  description: "",
  // other metadata
};

const ProductDetails = () => {
  return (
    <>
      <Breadcrumb pageName="Product Details" />

      <div className="flex gap-10">
        <div className="">
          <div
            className="overflow-hidden rounded-sm border border-stroke bg-white px-5 pt-7 pb-7 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5"
            style={{ width: "500px", height: "500px" }}
          >
            <Image
              src={"/images/cards/cards-04.png"}
              alt="image"
              width={500}
              height={500}
              className="object-cover rounded-sm"
              style={{
                height: "100%",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div>North America | Woman | Bottom</div>
          <div className="text-title-xxl">Classic Retro Women Jeans</div>
          <div className="text-title-xl2 font-black">$100</div>
          <div className="mt-4.5 mb-5.5 grid grid-cols-2 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F] max-w-94">
            <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
              <span className="">Size </span>
              <span className="font-semibold text-black dark:text-white">
                Medium
              </span>
            </div>

            <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
              <span className="">Color </span>
              <span className="w-5 h-5 rounded-full bg-meta-4"></span>
            </div>
          </div>

          <div>
            <span className="font-semibold">Product Description</span>
            <p className="whitespace-pre-line">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <hr className="text-stroke my-8" />
          <span className="">Product Owner</span>
          <div className="mb-4 flex items-center gap-3 mt-2">
            <div className="h-14 w-14 rounded-full">
              <Image
                src={"/images/user/user-03.png"}
                width={55}
                height={55}
                alt="User"
              />
            </div>
            <div>
              <span className="mb-1.5 text-black dark:text-white">
                Ester Howard
              </span>
              <div className="flex gap-2.5">
                <FontAwesomeIcon icon={faStar} className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
