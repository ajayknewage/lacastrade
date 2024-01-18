import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Stepper from "@/components/Stepper";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Order Details | ReCastTrade",
  description: "",
  // other metadata
};

const OrderDetails = () => {
  return (
    <>
      <Breadcrumb pageName="Order Details" />

      <div className="flex flex-col">
        <div>
          <div className="mt-4.5 mb-5.5 grid grid-cols-2 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F] max-w-125">
            <div className="flex flex-col items-center justify-center gap-1 px-4 dark:border-strokedark xsm:flex-row">
              <span className="">Order ID </span>
              <span className="font-semibold text-black dark:text-white">
                #568923645
              </span>
            </div>
          </div>

          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-2 col-start-1 col-end-8">
            <Stepper />
          </div>
          <div className="grid grid-cols-2 mt-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-10 col-start-1 col-end-1">
              <span className="font-semibold">Product Details</span>
              <div className="flex mt-2 gap-2 items-center">
                <div
                  className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark cursor-pointer animate-fade-in"
                  style={{ width: "100px", height: "100px", minWidth: "100px" }}
                >
                  <Image
                    src={`/images/cards/cards-04.png`}
                    alt="image"
                    width={100}
                    height={100}
                    className="object-cover rounded-sm"
                    style={{
                      height: "100%",
                    }}
                  />
                </div>
                <div>
                  <div>North America | Woman | Bottom</div>
                  <div className="font-semibold">Classic Retro Women Jeans</div>
                  <div className="font-black">$100</div>
                  <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard...
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-10 col-start-2 col-end-2">
              <div>
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
                    <div className="text-sm mt-1">
                      john.doe@gmail.com | +91 98956 15623
                    </div>
                  </div>
                </div>

                <div>
                  <span className="">Purhcased By</span>
                  <div className="mb-4 flex items-center gap-3 mt-2">
                    <div className="h-14 w-14 rounded-full">
                      <Image
                        src={"/images/user/user-02.png"}
                        width={55}
                        height={55}
                        alt="User"
                      />
                    </div>
                    <div>
                      <span className="mb-1.5 text-black dark:text-white">
                        Jogn Hie
                      </span>
                      <div className="text-sm mt-1">
                        jogn.hie@gmail.com | +91 45678 24568
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
