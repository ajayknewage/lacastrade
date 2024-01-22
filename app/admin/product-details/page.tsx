import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";

import { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Gallery } from "@/components/ProductDetails";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Product | ReCastTrade",
  description: "",
  // other metadata
};

const ProductDetails = () => {
  return (
    <>
      <Breadcrumb pageName="Product Details" />

      <div className="flex flex-col lg:flex-row gap-10">
        <Gallery />
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
              industry. Lorem Ipsum has been the industrys standard dummy text
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
            <Link href={"/admin/user"}>
              <div>
                <span className="mb-1.5 text-black dark:text-white">
                  Ester Howard
                </span>
                <div className="flex gap-1 mt-1">
                  <FontAwesomeIcon
                    icon={faStar}
                    size="sm"
                    className="text-primary"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    size="sm"
                    className="text-primary"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    size="sm"
                    className="text-primary"
                  />
                  <FontAwesomeIcon
                    icon={faStarHalfStroke}
                    size="sm"
                    className="text-primary"
                  />
                  <FontAwesomeIcon icon={faStar} size="sm" className="" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
